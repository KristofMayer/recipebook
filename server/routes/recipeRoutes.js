const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 *  App routes
 */


router.get('/', recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);
router.get('/recipe/:id', recipeController.exploreRecipe);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipes);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/random-recipe', recipeController.randomRecipe);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);





module.exports = router;