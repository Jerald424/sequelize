const express = require('express')
const app = express()
const cors = require('cors')
require('./sequelize')
const { authorization } = require('./utils/jwtFunctions')

//midddlewhere
app.use(express.json()) //access req.body
app.use(cors()) //return value to client

//routes
app.use('/api', require('./routes/loginRoutes'))
// ___AUTHENTICATED_ROUTE__
app.use(authorization);
app.use('/api', require('./routes/changePassword'))
app.use('/api', require('./routes/profileRoutes'))

app.listen(5000, () => {
    console.log('app was running port 5000')
})