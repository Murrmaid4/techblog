const sequelize = require('../config/connection');
const seedUser = require('./userData')
const seedPosts = require('./postData');
const seedComments = require('./commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedAll();
