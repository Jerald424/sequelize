const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Role extends Model { };
    Role.init({
        name: {
            type: DataTypes.STRING,

        }
    }, {
        sequelize,
        tableName: 'role',
        timestamps: false
    })
    return Role;
}