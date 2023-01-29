const { Sequelize } = require("sequelize");
require("dotenv").config();


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
db.Post = require("../models/postModel")(sequelize);
db.Comments = require("../models/commentsModel")(sequelize);

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

//posts
db.Post.hasMany(db.Login, {
  foreignKey: {
    name: "post_id",
  },
});
db.Login.belongsTo(db.Post, {
  foreignKey: {
    name: "user_id",
  },
});

db.Post.hasMany(db.Comments, {
  foreignKey: {
    name: "post_id",
  },
});
db.Comments.belongsTo(db.Post);

db.sequelize.sync({ alter: true });

module.exports = db;
