'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('transcationdetails', {

     TranscationId:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    UserId:{
      type: DataTypes.INTEGER,
      
    },
    BookId:{
    
    type:DataTypes.INTEGER},
    BookName:{
      type:DataTypes.STRING
    },
    
    IssueDate:{
  type:DataTypes.DATE},

    duedate:
    {
      type:DataTypes.DATE
    },
    renewdate:{ 
      type:DataTypes.DATE
    },
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
    await queryInterface.dropTable('transcationdetails');
  }
};