const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// TODO: MAKE SPECIFIC FILES + ROUTES FOR USERS, WISHLISTS, AND PRODUCTS !!! FIX ALL OLD CLASSES !!!

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
