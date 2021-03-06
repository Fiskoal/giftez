const router = require('express').Router();
const { Wishlist } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newWishlist = await Wishlist.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newWishlist);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const wishlistData = await Wishlist.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!wishlistData) {
      console.log("404")
      res.status(404).json({ message: 'No wishlist found with this id!' });
      return;
    }

    res.status(200).json(wishlistData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
