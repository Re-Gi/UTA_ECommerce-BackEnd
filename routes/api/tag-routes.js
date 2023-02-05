const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  try {
    // find all tags, including associated Product data
    const tagsData = await Tag.findAll({ include: [{ model: Product }] });
    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  };
});

// get one tag
router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id`, including associated Product data
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  };
});

// create new tag
router.post('/', async (req, res) => {
  // create a new tag
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  
});

module.exports = router;
