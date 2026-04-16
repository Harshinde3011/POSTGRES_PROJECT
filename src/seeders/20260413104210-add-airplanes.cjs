'use strict';
const { Op } = require("sequelize")
// npx sequelize seed:generate --name add-airplanes current file is created after this cmd
// npx sequelize db:seed:all
// npx sequelize db:seed:undo:all

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *                                                                                                                                                  
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false 
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'airbus345',
        capacity: 144,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        modelNumber: 'indigo90',
        capacity: 110,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Airplanes', { 
        [Op.or] : [ { modelNumber: 'airbus345' }, { modelNumber: 'indigo90' } ]
     });
  }
};
