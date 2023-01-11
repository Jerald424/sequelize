const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class UserLogin extends Model { };

    UserLogin.init({
        user_name: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: 'userlogin'
    })
    return UserLogin;
}