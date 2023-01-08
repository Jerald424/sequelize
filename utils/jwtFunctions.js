const jwt = require('jsonwebtoken')
require('dotenv').config()

//user_info:{user_id:1, role:1}
const jwtTokenGenerator = (user_info) => {
    return jwt.sign(user_info, process.env.jwtSecret, { expiresIn: '30d' })
}

const authorization = async (req, res, next) => {
    try {
        const token = req.header('token')
        if (!token) return res.status(401).send('Send token')
        const payload = jwt.verify(token, process.env.jwtSecret) //payload = {user_id:1, role:1}
        req.user_info = payload;
        next()
    } catch (error) {
        res.status(401).send(error.message)
    }
}

module.exports = { jwtTokenGenerator, authorization }