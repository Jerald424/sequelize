const { Sequelize } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize({
    database: process.env.DATABASE,
    username: process.env.USER,
    password: process.env.PASSWORD,
    port: 5432,
    host: 'localhost',
    dialect: 'postgres'
})

try {
    sequelize.authenticate()
    console.log('database connect successfully')
} catch (error) {
    console.log(error)
}

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.AdminUn = require('../models/adminUNModel')(sequelize);
db.Role = require('../models/roleModel')(sequelize);
db.Login = require('../models/userLogin')(sequelize);

db.Role.hasOne(db.Login, {
    foreignKey: {
        field: 'role_id',
        name: 'role_id'
    }
})
db.Login.belongsTo(db.Role)

db.sequelize.sync({ alter: true })

module.exports = db;
