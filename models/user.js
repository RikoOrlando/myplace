'use strict';
const pass = require('../helper/passwordhash')
const password = require('../helper/bcryptpassword')
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model{}

  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate:{
        unique(value){
          return User.findOne(
            {
              where:{username:value}
            }
          )
          .then((data)=>{
            if(data){
              throw new Error ('Username sudah digunakan.mohon mencari username yang lain')
            }
          })
        }
      }
    }, 
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail:true,
        unique(value){
          return User.findOne(
            {
              where:{email:value}
            }
          )
          .then((data)=>{
            if(data){
              throw new Error ('Email ini sudah terdaftar pada user lain')
            }
          })
        }
      }
    },
    password: DataTypes.STRING,
    description: DataTypes.STRING,
    birthday:DataTypes.INTEGER,
    secret: DataTypes.STRING,
    login: DataTypes.INTEGER
  }, {hooks:{
    beforeCreate:(instance, options)=>{
     return password.hash(instance.password)
      .then((dta)=>{
        instance.password = dta
      })
    },
    beforeUpdate:(instance, options)=>{
      
    }

  }, 
    sequelize 
  }
  );
  User.associate = function(models) {
    User.belongsToMany(models.Place, { through: models.UserPlace })
    User.hasMany(models.UserPlace)
    // associations can be defined here
  };
  return User;
};