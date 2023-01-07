const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    database: 'learnsequelize',
    username: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
})

try {
    sequelize.authenticate()
    console.log('database connected successfully')
} catch (error) {
    console.log(error)
}

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Login = require('./LoginModel')(sequelize);
db.Profile = require('./ProfileModel')(sequelize);
db.Department = require('./departmentModel')(sequelize);
db.Tweets = require('./tweetsModel')(sequelize)

db.Login.hasOne(db.Profile, {
    foreignKey: {
        field: 'user_id',
        name: 'user_id'
    }
})

db.Profile.belongsTo(db.Login)

db.Department.hasOne(db.Profile, {
    foreignKey: {
        field: 'dep_id',
        name: 'dep_id'
    }
})
db.Profile.belongsTo(db.Department)

// ___tweets___
db.Login.hasMany(db.Tweets, {
    foreignKey: {
        field: 'user_id',
        name: 'user_id'
    }
})
db.Tweets.belongsTo(db.Login)
db.sequelize.sync({ alter: true })

module.exports = db;
