const router = require('express').Router();
const db = require('../sequelize');
const { jwtTokenGenerator } = require('../utils/jwtFunctions');

router.post('/login', async (req, res) => {
    try {
        const { user_name, password } = req.body;
        if (!(Boolean(user_name) && Boolean(password))) res.status(400).send('required field missing')

        const userExist = await db.Login.findOne({
            where: {
                user_name: user_name
            }
        })
        if (userExist) return res.status(409).send('user name already exist')
        const user = await db.Login.create({ user_name: user_name, password: password })
        res.json({ token: jwtTokenGenerator(user.id) })

    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/register', async (req, res) => {
    try {
        const { user_name, password } = req.body;
        if (!(Boolean(user_name && Boolean(password)))) res.status(400).send('required field missing')

        const existUser = await db.Login.findOne({
            where: {
                user_name: user_name
            }
        })
        if (!existUser) return res.status(401).send('user name does not exist')
        if (existUser.password !== password) return res.status(401).send('user name and password not matched')
        res.json({ token: jwtTokenGenerator(existUser.id) })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router