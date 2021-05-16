const User = require('./User');
const Posts = require('./Posts');
const Comments  = require('./Comments');



//need user to have many posts, 
User.hasMany(Posts, {

  foreignKey: 'posts_id',

})

//one user can have many comments on that post 
User.hasMany(Comments, {

  foreignKey: 'user_id',
}); 


//one post can have many comments 
Posts.hasMany(Comments, {

  foreignKey: 'posts_id',
  onDelete:'CASCADE'

});

//comments belongs to post and user
Comments.belongsTo(Posts, {
  foreignKey: 'posts_id',
  onDelete:'CASCADE'

});


module.exports = { User, Comments, Posts };
