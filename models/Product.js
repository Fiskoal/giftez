const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    wishlist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'wishlist',
        key: 'id',
      },
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amazon_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
