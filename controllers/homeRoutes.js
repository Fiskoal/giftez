const router = require('express').Router();
const { User, Wishlist, Product } = require('../models');
const withAuth = require('../utils/auth');
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
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

router.get('/profile', withAuth, async (req, res) => {
  try {
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
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/search', async (req, res) => {
  try {
    res.render('search', {
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/search/:id', async (req, res) => {
  try {
    const page = req.query.page;
    const params = {
      api_key: "D20D90E9917D418AA166FEB5285C9F85",
      type: "search",
      amazon_domain: "amazon.com",
      search_term: req.params.id,
      page: page,
    }
    axios.get('https://api.rainforestapi.com/request', { params })
    .then(response => {
      const results = JSON.stringify(response.data.search_results);
      const pages = JSON.stringify(response.data.pagination.total_pages)

      const searchResults = {
        results: results,
        pages: pages,
      };

      res.render('searchResults', {
        ...searchResults,
        logged_in: req.session.logged_in,
      })
    })
    .catch(error => {
      res.status(500).json(error)
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/about', async (req, res) => {
  try { 
    res.render('about', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
