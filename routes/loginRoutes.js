const router = require('express').Router();
const db = require('../sequelize');
const { Op } = require('sequelize');
const { jwtTokenGenerator } = require('../utils/jwtFunctions');

router.post('/sign-up', async (req, res) => {
    try {
        const { user_name, password, role_id } = req.body;
        if (!(Boolean(user_name) && Boolean(password))) return res.status(400).send('required field missing')

        // ___FIND_ROLE___
        const role = await db.Role.findOne({
            where: {
                id: role_id
            }
        })

        // ___CHECK_USER_EXIST___
        const adminLogin = await db.Login.findOne({
            where: {
                user_name: user_name
            }
        })
        if (adminLogin) return res.status(400).send('user name already exist')

        // ___CHECK_ADMIN_USER_NAME_PASSWORD___
        if (role.dataValues.name === 'admin') {
            const adminLogin = await db.AdminUn.findOne({
                where: {
                    [Op.and]: [
                        { user_name: user_name },
                        { password: password }
                    ]
                }
            })
            if (!adminLogin) return res.status(401).send('admin user name password are not matched')
        }

        // ___ADD_USER___
        const addUser = await db.Login.create({ user_name, password, role_id }, {
            returning: true
        })
        res.json({
            message: 'Signup successfully',
            data: addUser,
            token: jwtTokenGenerator({ user_id: addUser.id, role_id: addUser.role_id })
        })

    } catch (error) {
        res.status(500).send(error.message)
    }
})

router.post('/sign-in', async (req, res) => {
    try {
        const { user_name, password } = req.body;
        if (!(Boolean(user_name) && Boolean(password))) return res.status(400).send('required field missing');

        // __CHECK_USER_NAME_EXIST_
        const userExist = await db.Login.findOne({
            where: { user_name: user_name },


        })
        if (!userExist) return res.status(401).send('User name does not exist')


        // ___CHECK_USER_NAME_&&_PASSWORD_MATCHED__
        if (userExist.password !== password) return res.status(401).send('User name password are not matched')

        res.json({
            message: "Signin successfully",
            data: userExist,
            token: jwtTokenGenerator({ user_id: userExist.id, role_id: userExist.role_id })
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router