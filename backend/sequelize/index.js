const { Sequelize } = require("sequelize");
require("dotenv").config();
console.log(
  "_____________",
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD
);

const sequelize = new Sequelize({
  database: process.env.DATABASE,
  username: process.env.USER,
  password: process.env.PASSWORD,
  port: 5432,
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("database connect successfully");
} catch (error) {
  console.log(error);
}

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.AdminUn = require("../models/adminUNModel")(sequelize);
db.Role = require("../models/roleModel")(sequelize);
db.Login = require("../models/userLogin")(sequelize);
db.Profile = require("../models/profileModel")(sequelize);
db.City = require("../models/supportData/cityModel")(sequelize);
db.State = require("../models/supportData/stateModel")(sequelize);

db.Role.hasOne(db.Login, {
  foreignKey: {
    field: "role_id",
    name: "role_id",
  },
});
db.Login.belongsTo(db.Role);

// ___PROFILE__
db.Login.hasOne(db.Profile, {
  foreignKey: {
    field: "user_id",
    name: "user_id",
  },
});
db.Profile.belongsTo(db.Login);
//-city
db.City.hasOne(db.Profile, {
  foreignKey: {
    field: "city_id",
    name: "city_id",
  },
});
db.Profile.belongsTo(db.City);

//-state
db.State.hasOne(db.Profile, {
  foreignKey: {
    field: "state_id",
    name: "state_id",
  },
});
db.Profile.belongsTo(db.State);

db.sequelize.sync({});

module.exports = db;
