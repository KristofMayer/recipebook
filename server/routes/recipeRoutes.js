// The main router file wherer all of the routes declared
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const passport = require('passport');
require("../config/passport")(passport);
const { ensureAuth, ensureGuest } = require('../middleware/auth');
require('dotenv').config();

/**
 *  App routes
 */

router.get('/', recipeController.homepage);
router.get('/home', recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);
router.route('/recipe/:id').get(recipeController.exploreRecipe).post(recipeController.deleteRecipe).delete(recipeController.deleteRecipe);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipes);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/random-recipe', recipeController.randomRecipe);
router.get('/submit-recipe', ensureAuth, recipeController.submitRecipe);
router.post('/submit-recipe', ensureAuth, recipeController.submitRecipeOnPost);
router.get('/signIn', recipeController.signIn);


module.exports = router;