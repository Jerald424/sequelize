const router = require('express').Router();
const db = require('../sequelize')

router.post('/change-password', async (req, res) => {
    try {
        const { user_id } = req.user_info
        const { password } = req.body;
        if (!Boolean(password)) return res.status(400).send('Required field missing')

        const updatedLogin = await db.Login.update({ password: password }, {
            where: {
                id: user_id
            },
            returning: true
        })

        res.json({
            message: "Password updated successfully",
            data: updatedLogin[1][0]
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;