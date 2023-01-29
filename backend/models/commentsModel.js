const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Comments extends Model {}

  Comments.init(
    {
      comment: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "comments",
    }
  );
  return Comments;
};
