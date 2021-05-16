const { Comments } = require('../models');

const commentdata = [
  {
    body: 'This is a test',
    user_id: 1,
    posts_id: 1
  },
 
  
];

const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;
