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
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  };
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    await Tag.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(`Tag #${req.params.id} updated.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  
});

module.exports = router;
