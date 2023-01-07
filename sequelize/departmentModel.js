const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Department extends Model { };
    Department.init({
        name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: 'department'
    })
    return Department;
}