const router = require('express').Router();
const userRoutes = require('./userRoutes');
const wishlistRoutes = require('./wishlistRoutes');
const productRoutes = require('./productRoutes')

router.use('/users', userRoutes);
router.use('/wishlists', wishlistRoutes);
router.use('/products', productRoutes);

module.exports = router;
