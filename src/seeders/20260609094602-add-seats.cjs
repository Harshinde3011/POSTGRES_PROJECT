'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seats', [
      {
        airplaneId: 1,
        row: 1,
        col: 'A',
        class: "economy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 1,
        row: 1,
        col: 'B',
        class: "economy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 1,
        row: 1,
        class: "economy",
        col: 'C',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 1,
        row: 1,
        col: 'D',
        class: "economy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 1,
        row: 1,
        col: 'E',
        class: "economy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 1,
        row: 1,
        col: 'F',
        class: "economy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 1,
        row: 2,
        col: 'A',
        class: "economy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 1,
        row: 2,
        col: 'B',
        class: "economy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplaneId: 1,
        row: 2,
        col: 'C',
        class: "economy",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
