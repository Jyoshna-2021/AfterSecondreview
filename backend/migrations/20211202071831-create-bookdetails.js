'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Bookdetails', {
      BookId:{type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true},
     
      title: {type:DataTypes.STRING},
      author: {type:DataTypes.STRING},
      edition:{type:DataTypes.STRING},
      publisher:{type:DataTypes.STRING},
      isbn: {type:DataTypes.INTEGER},
      genre: {type:DataTypes.STRING},
      url: {type:DataTypes.STRING},
      count: {type:DataTypes.STRING},
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('Bookdetails');
  }
};