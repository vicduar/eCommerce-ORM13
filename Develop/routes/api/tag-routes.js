const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tags=await Tag.findAll({include:{model:Product,through:ProductTag}})
    res.status(200).json(tags)
  } catch (error) {
    res.status(500).json(error.message)
  }

});

router.get('/:id', async (req, res) => {
  try {
    const tagId = req.params.id; // Extracting category ID from the request parameters
    const tag = await Tag.findByPk(tagId,{include:{model:Product,through:ProductTag}}); // Finding category by its primary key (ID)

    if (!tag) { // If category is not found
      return res.status(404).json({ error: 'Tag not found' });
    }
    res.status(200).json(tag); // Sending the category as JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Sending error message as JSON response
  }
});


router.post('/', async(req, res) => {
  // create a new category
  try {
    // Extract data from the request body
    const { tag_name } = req.body;

    // Create a new category in the database
    const newTag = await Tag.create({ tag_name });

    // Send the newly created category as a response
    res.status(201).json(newTag);
  } catch (error) {
    // If an error occurs, send a 500 response with the error message
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    // Extract category id from request parameters
    const tagId = req.params.id;

    // Find the category by id
    const tag = await Tag.update(req.body,{where:{id:tagId}});

    // If category doesn't exist, return 404 Not Found
    if (!tag) {
      return res.status(404).json({ error: 'Tag not found' });
    }
    // Return the updated category
    res.status(200).json(tag);
  } catch (error) {
    // If an error occurs, send a 500 response with the error message
    res.status(500).json({ error: error.message });
  }
});


router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    // Extract category id from request parameters
    const tagId = req.params.id;

    // Find the category by id
    const tag = await Tag.destroy({where:{id:tagId}});

    // If category doesn't exist, return 404 Not Found
    if (!tag) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    // Return a success message
    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (error) {
    // If an error occurs, send a 500 response with the error message
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
