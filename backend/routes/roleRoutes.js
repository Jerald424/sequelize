const router = require('express').Router()
const db = require('../sequelize')

router.get('/role', async (req, res) => {
    try {
        const roles = await db.Role.findAll()
        res.json(roles)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router