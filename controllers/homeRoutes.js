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

router.get('/wishlists/:id', async (req, res) => {
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

    console.log(user);

    res.render('profile', {
      user,
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
  let query = req.query.query;
  let page = req.query.page;
  let searchResults;

  if (!page) {
    page = 1;
  }
  if (query) {
    const params = {
      //TODO: UPDATE API KEY 
      api_key: '9295C1164A6C405BBC94C5709829FFA6',
      type: 'search',
      amazon_domain: 'amazon.com',
      sort_by: "featured",
      search_term: query,
      page: page,
    };
    axios
      .get('https://api.rainforestapi.com/request', { params })
      .then((response) => {
        let results = [];

        response.data.search_results.forEach((element) => {
          results.push(element);
        });

        const pages = JSON.stringify(response.data.pagination.total_pages);

        console.log(results);

        searchResults = {
          results: results,
          pages: pages,
        };
      })
      .then(async () => {
        if (req.session.logged_in) {
          try {
              const wishlistData2 = await Wishlist.findAll({
                where: {
                  user_id: req.session.user_id,
                },
              });

              

              wishlist2 = wishlistData2;

              console.log(wishlist2[0].dataValues.name)

              res.render('searchResults', {
                ...searchResults,
                wishlistData: wishlist2,
                user_id: req.session.user_id,
                logged_in: req.session.logged_in,
              });
            
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.render('searchResults', {
            ...searchResults,
            logged_in: req.session.logged_in,
          });
        }
      });
  } else {
    res.render('search', {
      logged_in: req.session.logged_in,
    });
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
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
