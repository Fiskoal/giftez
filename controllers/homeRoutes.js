const router = require('express').Router();
const { User, Wishlist, Product } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homePage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/wishlist/:id', async (req, res) => {
  try {
    //!!! DONT TOUCH THIS
    const checkProduct = await Product.findAll({
      where: {
        wishlist_id: req.params.id,
      },
    });

    let wishlistData;

    if (checkProduct.length > 0) {
      wishlistData = await Wishlist.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Product,
            where: {
              wishlist_id: req.params.id,
            },
          },
        ],
      });
    } else {
      wishlistData = await Wishlist.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
    }
    //!!! END OF DONT TOUCH

    const wishlist = wishlistData.get({ plain: true });

    res.render('wishlist', {
      ...wishlist,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Wishlist }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password', 'email'] },
      include: [{ model: Wishlist }],
      where: {
        username: req.params.id,
      },
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/search')

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
