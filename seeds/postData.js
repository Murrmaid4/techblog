const { Posts } = require('../models');

const postdata = [
  {
   title: 'test title',
   body: 'test body paragraph',
   user_id: 1
  },
  
];

const seedPosts = () => Posts.bulkCreate(postdata);

module.exports = seedPosts;
