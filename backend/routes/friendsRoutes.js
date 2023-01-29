const router = require("express").Router();
const db = require("../sequelize");

router.get("/all-profile", async (req, res) => {
  try {
    const user = await db.Profile.findAndCountAll();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
