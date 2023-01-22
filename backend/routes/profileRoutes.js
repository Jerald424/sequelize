const router = require('express').Router();
const db = require('../sequelize');
const { isAdminUser } = require('../utils/isAdminUser');

router.post('/profile', async (req, res) => {
    try {
        const { name, place, city_id, state_id } = req.body;
        const { user_id } = req.user_info;

        // ___CHECK_PROFILE_EXIST_FOR_USER__
        const [profile, created] = await db.Profile.findOrCreate({
            where: {
                user_id: user_id
            },
            defaults: {
                name: name,
                place: place,
                city_id: city_id,
                state_id: state_id
            }
        })

        res.json({
            profile: profile,
            created: created
        })

    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.put('/profile', async (req, res) => {
    try {
        const data = req.body;
        const updatedProfile = await db.Profile.update(data, {
            where: {
                user_id: req.user_info.user_id
            },
            returning: true
        })
        res.json(updatedProfile[1][0])
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.get('/profile', async (req, res) => {
    try {
        const profile = await db.Profile.findOne({
            where: {
                user_id: req.user_info.user_id
            },
            include: [
                { model: db.City, as: 'City' }
            ]
        })
        if (!profile) return res.status(400).json('No profile for you')
        res.json(profile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/all-profile', isAdminUser, async (req, res) => {
    try {
        const allProfile = await db.Profile.findAndCountAll()
        res.json(allProfile)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/city', isAdminUser, async (req, res) => {
    try {
        const { name } = req.body;
        if (!Boolean(name)) return res.status(400).send("Required field missing")

        const [city, created] = await db.City.findOrCreate({
            where: {
                name: name
            },
            defaults: {
                name: name
            },
            returning: true
        })
        res.json({ city: city, created: created })

    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.put("/city/:id", isAdminUser, async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedCity = await db.City.update(data, {
      where: {
        id: id,
      },
      returning: true,
    });
    res.json(updatedCity?.[1]?.[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/city/:id", isAdminUser, async (req, res) => {
  try {
    const { id } = req.params;
    await db.City.destroy({
      where: {
        id: id,
      },
    });
    res.json("City deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.get("/city", async (req, res) => {
  try {
    const city = await db.City.findAndCountAll();
    res.json(city);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/state", async (req, res) => {
  try {
    const state = await db.State.findAndCountAll();
    res.json(state);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/state", isAdminUser, async (req, res) => {
  try {
    const { name } = req.body;
    if (!Boolean(name)) return res.status(400).send("Required field are missing");
    const [state, created] = await db.State.findOrCreate({
      where: {
        name: name,
      },
      defaults: {
        name: name,
      },
    });
    res.json({ state: state, created: created });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/state/:id", isAdminUser, async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedState = await db.State.update(data, {
      where: {
        id: id,
      },
      returning: true,
    });

    res.json(updatedState?.[1]?.[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router