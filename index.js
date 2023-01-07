const express = require('express')
const app = express()
const cors = require('cors')
require('./sequelize')

//midddlewhere
app.use(express.json()) //access req.body
app.use(cors()) //return value to client

//routes
app.use('/api', require('./routes/loginRoutes'))

app.listen(5000, () => {
    console.log('app was running port 5000')
})