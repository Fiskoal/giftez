const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const newProduct = await Product.create({
      ...req.body,
    });
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
});

module.exports = router;
