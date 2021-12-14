'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('Admintable', {
      AdminId:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      UserId:{
        type:DataTypes.INTEGER
      },
      emailid:{
        type:DataTypes.STRING,
        allowNull:false
       },
       password:{
        type: DataTypes.STRING,
      allowNull:false
    },
    fine: 
    {
      type:DataTypes.INTEGER,
      allowNull:true
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Admintable');
  }
};