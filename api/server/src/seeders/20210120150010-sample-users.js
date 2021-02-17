"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    [
      {
        firstName: "Kobe",
        lastName: "Bryant",
        email: "kobe@blackmamba.com",
        createAt: new Date(),
        updatedAt: new Date(),
        password: "xyz",
      },
      {
        firstName: "Shaq",
        lastName: "Diesel",
        email: "shaq@bigcactus.com",
        createAt: new Date(),
        updatedAt: new Date(),
        password: "xyz",
      },
      {
        firstName: "Tim",
        lastName: "Brown",
        email: "tim@riders.com",
        createAt: new Date(),
        updatedAt: new Date(),
        password: "xyz",
      },
    ],
      {};
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
