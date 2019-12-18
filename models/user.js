'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model{}
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, { sequelize });
  User.associate = function(models) {
    User.belongsToMany(models.Place, { through: models.UserPlace })
    // associations can be defined here
  };
  return User;
};