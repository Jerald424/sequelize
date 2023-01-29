const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Post extends Model {}

  Post.init(
    {
      message: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "posts",
    }
  );
  return Post;
};
