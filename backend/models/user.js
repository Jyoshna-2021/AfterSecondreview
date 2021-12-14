'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({transcationdetails}) {}
      // define association here
     // this.hasMany(transcationdetails,{
      //  foreignKey:"userId"
     // })}
  };
  User.init({
    userId: 
    {
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
      allowNull:false
    },
    username:
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    email: 
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    phoneNumber: 
    {
     type: DataTypes.BIGINT,
     allowNull:false
    },
    password: 
    {
      type:DataTypes.STRING,
      allowNull:false
    },
    fine: 
    {
      type:DataTypes.INTEGER,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'userinfo'
  });
  return User;
};