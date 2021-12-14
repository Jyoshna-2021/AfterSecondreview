'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookdetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
     static associate({transcationdetails}) {
      // define association here
      this.hasMany(transcationdetails,{
        foreignKey:"BookId"
      })}
      
      // define association here
    
  };
  Bookdetails.init({
    BookId:{type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
 
    title: {type:DataTypes.STRING},
    author: {type:DataTypes.STRING},
    edition:{type:DataTypes.STRING},
    publisher:{type:DataTypes.STRING},
    isbn: {type:DataTypes.INTEGER},
    genre: {type:DataTypes.STRING},
    url: {type:DataTypes.STRING},
      count: {type:DataTypes.STRING},
  }, {
    sequelize,
    modelName: 'Bookdetails',
  });
  return Bookdetails;
};