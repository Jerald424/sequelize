const express = require('express')
const app = express()
const cors = require('cors')
require('./sequelize')
const { authorization } = require('./utils/jwtFunctions')

//middleWhere
app.use(express.json()) //access req.body
app.use(cors()) //return values to client

app.use('/api', require('./routes/loginRoutes'))
app.use(authorization);
app.use('/api', require('./routes/profileRoutes'))
app.use('/api/support-data', require('./routes/supportDataRoutes'))
app.use('/api', require('./routes/tweetsRoutes'))

app.listen(5000, () => {
    console.log('app was running port')
})