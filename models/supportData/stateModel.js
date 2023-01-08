const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class State extends Model { };
    State.init({
        name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: 'state'
    })
    return State;
}