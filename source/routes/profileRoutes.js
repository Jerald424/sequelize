const router = require('express').Router()
const db = require('../sequelize')

router.post('/profile', async (req, res) => {
    try {
        const user_id = req.user;
        const data = req.body;

        const profileExist = await db.Profile.findOne({
            where: {
                user_id: user_id
            },
            include: db.Department
        })
        if (profileExist) return res.status(400).send('profile already exist this user')
        const profile = await db.Profile.create({ ...data, user_id })
        res.json(profile)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
router.put('/profile', async (req, res) => {
    try {
        const data = req.body;
        const profileExist = await db.Profile.findOne({
            where: {
                user_id: req.user
            }
        })
        if (!profileExist) return res.status(400).send('no profile this users, create a profile first')

        const updatedProfile = await db.Profile.update({ ...data }, {
            where: {
                user_id: req.user
            },
            returning: true,

        })
        res.json(updatedProfile?.[1]?.[0])


    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/profile', async (req, res) => {
    try {
        const profile = await db.Profile.findOne({
            where: {
                user_id: req.user
            },

        })
        const dep = await db.Department.findOne({
            where: {
                id: profile.dep_id
            }
        })
        profile.dataValues['dep_id'] = dep
        res.json({ profile })
    } catch (error) {
        res.status(500).send(error.message)
    }
})
module.exports = router;