const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Tweets extends Model { };
    Tweets.init({
        title: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: 'tweets'
    })
    return Tweets;
}