const User = require('./User');
const Wishlist = require('./Wishlist');
const Product = require("./Product")

User.hasMany(Wishlist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Wishlist.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Wishlist, Product };
