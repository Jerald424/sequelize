const router = require('express').Router();
const db = require('../sequelize')

router.post('/login', async (req, res) => {
    try {
        const { role_id } = req.body;
        const { user_name, password } = req.body;
        if (!(Boolean(user_name) && Boolean(password))) return res.status(400).send('required field missing')

        const roles = await db.Role.findAll({
            where: {
                id: role_id
            }
        })
        res.json({ role: roles })


    } catch (error) {
        res.status(500).send(error.message)
    }
})
module.exports = router