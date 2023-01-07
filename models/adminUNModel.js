const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class AdminUnModel extends Model { };

    AdminUnModel.init({
        user_name: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: 'adminun',
        timestamps: false
    })
    return AdminUnModel;
}