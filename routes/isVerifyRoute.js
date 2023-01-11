const { authorization } = require('../utils/jwtFunctions');
const router = require('express').Router();
const db = require('../sequelize')


router.get('/is-verify', authorization, async (req, res) => {
    try {
        const { user_id } = req.user_info;
        const user = await db.Login.findOne({
            where: {
                id: user_id
            }
        })
        res.json(user)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;