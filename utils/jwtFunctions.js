const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtTokenGenerator = (user_id) => {
    const payload = { user: user_id }
    return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1hr" })
}

const authorization = async (req, res, next) => {
    try {
        const token = req.header('token');
        if (!token) return res.status(401).send('send token')
        const payload = jwt.verify(token, process.env.jwtSecret)
        req.user = payload.user
        next()
    } catch (error) {
        res.status(401).send(error.message)
    }
}

module.exports = { jwtTokenGenerator, authorization };