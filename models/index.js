const User = require('./User');
const Wishlist = require('./Wishlist');

User.hasMany(Wishlist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Wishlist.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Wishlist };
