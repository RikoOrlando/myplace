'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'login', {
      type: Sequelize.INTEGER,
    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'login', {
      type: Sequelize.INTEGER,
    })
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};