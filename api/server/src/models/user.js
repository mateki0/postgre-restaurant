"use strict";

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define( "User", {
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    firstname: {
      type:Sequelize.STRING,
    },
    lastname:{
      type:Sequelize.STRING,
    },
    password:{
      type:Sequelize.STRING,
    },
    createdAt:{
      type:Sequelize.DATE,
    },
    updatedAt:{
      type:Sequelize.DATE,
    }
  });
  
  return User;
};
