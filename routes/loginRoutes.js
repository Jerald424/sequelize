const router = require('express').Router();
const db = require('../sequelize')

router.post('/login', async (req, res) => {
    try {
        const { user_name, password } = req.body;
        if (!(Boolean(user_name) && Boolean(password))) return res.status(400).send('required field missing')

        const role = await db.Role.findAll()


    } catch (error) {
        res.status(500).send(error.message)
    }
})
module.exports = router