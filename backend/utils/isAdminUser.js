const db = require('../sequelize')

const isAdminUser = async (req, res, next) => {
    try {
        const { role_id } = req.user_info;
        console.log('role_id: ', role_id);
        const role = await db.Role.findOne({
            where: {
                id: role_id
            }
        })
        // console.log('role: ', role);
        if (role.name !== 'admin') return res.status(401).send('Not authorized')
        next()
    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports = { isAdminUser }