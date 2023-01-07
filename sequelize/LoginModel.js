const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class LoginModel extends Model { };
    LoginModel.init({
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
    return LoginModel;
}