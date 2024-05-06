const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories=await Category.findAll({include:[Product]})
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json(error.message)
  }

});

router.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id; // Extracting category ID from the request parameters
    const category = await Category.findByPk(categoryId,{include:[Product]}); // Finding category by its primary key (ID)

    if (!category) { // If category is not found
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category); // Sending the category as JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Sending error message as JSON response
  }
});


router.post('/', async(req, res) => {
  // create a new category
  try {
    // Extract data from the request body
    const { category_name } = req.body;

    // Create a new category in the database
    const newCategory = await Category.create({ category_name });

    // Send the newly created category as a response
    res.status(201).json(newCategory);
  } catch (error) {
    // If an error occurs, send a 500 response with the error message
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    // Extract category id from request parameters
    const categoryId = req.params.id;

    // Find the category by id
    const category = await Category.update(req.body,{where:{id:categoryId}});

    // If category doesn't exist, return 404 Not Found
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    // Return the updated category
    res.status(200).json(category);
  } catch (error) {
    // If an error occurs, send a 500 response with the error message
    res.status(500).json({ error: error.message });
  }
});


router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    // Extract category id from request parameters
    const categoryId = req.params.id;

    // Find the category by id
    const category = await Category.destroy({where:{id:categoryId}});

    // If category doesn't exist, return 404 Not Found
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Return a success message
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    // If an error occurs, send a 500 response with the error message
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

