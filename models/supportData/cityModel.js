const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class City extends Model { };
    City.init({
        name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: 'city'
    })
    return City
}