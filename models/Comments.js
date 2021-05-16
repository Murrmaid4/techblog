const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Comments } = require('../controllers/api');

class Comments extends Model {}

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        body:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
              unique: false
            }
        },
        post_id:{
            type: DataTypes.INTEGER,
            references: {
              model: 'posts',
              key: 'id',
              unique: false
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
      }
);

module.exports = Comments;