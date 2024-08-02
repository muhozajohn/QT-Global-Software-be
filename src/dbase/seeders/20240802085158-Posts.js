'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      title: 'Build an app',
      description: 'Now we can query our database for information based on these associations',
      avatar: "https://res.cloudinary.com/dskrteajn/image/upload/v1722548973/vmbetv9fpxtidd9o8er8.jpg",
      category: 'Food',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
