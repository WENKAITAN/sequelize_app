'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('users', [{
        username: 'John Doe',
        password: "123455",
        uuid: "9cef05ff-5bb9-48aa-b61d-41fc92422287",
        createdAt: "2021-10-28T22:30:38.072Z",
        updatedAt: "2021-10-28T22:30:38.072Z"
      }, {
        username: 'Jane Doe',
        password: "JaneDoe@email.com",
        uuid: "9cef05ff-5bb9-48aa-b61d-41fc92422280",
        createdAt: "2021-10-28T22:30:38.072Z",
        updatedAt: "2021-10-28T22:30:38.072Z"
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {});
  }
};
