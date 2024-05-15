"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          email: "hongdong808@gmail.com",
          password: "123456",
          firstName: "Hong",
          lastName: "Dong",
          address: "Ho Chi Minh",
          gender: 1,
          typeRole: "ROLE",
          keyRole: "R1",
          image: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
