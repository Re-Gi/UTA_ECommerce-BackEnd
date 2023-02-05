const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', async (req, res) => {
  try {
    // find all categories, including associated products
    const categoriesData = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value, including its associated products
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try{
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    await Category.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(`Category #${req.params.id} updated.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    await Category.destroy({ where: { id: req.params.id } });
    res.status(200).json(`Category #${req.params.id} deleted.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
