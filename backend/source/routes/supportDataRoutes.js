const router = require('express').Router();
const db = require('../sequelize');

router.post('/department', async (req, res) => {
    try {
        const { name } = req.body;
        const depExist = await db.Department.findOne({
            where: {
                name: name
            }
        })
        if (depExist) return res.status(400).send('same name exist')
        const department = await db.Department.create({ name: name })
        res.json(department)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.get('/department', async (req, res) => {
    try {
        const department = await db.Department.findAll()
        res.json(department)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;