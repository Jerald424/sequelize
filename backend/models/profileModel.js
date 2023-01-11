const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Profile extends Model { };

    Profile.init({
        name: {
            type: DataTypes.STRING
        },
        place: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: 'profile'
    })
    return Profile;
}