const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class ProfileModel extends Model { };
    ProfileModel.init({
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: 'profile'
    })
    return ProfileModel;
}