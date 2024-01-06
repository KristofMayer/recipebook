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

router.get('/', ensureGuest, recipeController.signIn);
router.get('/home', ensureAuth, recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);
router.get('/recipe/:id', recipeController.exploreRecipe);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipes);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/random-recipe', recipeController.randomRecipe);
router.get('/submit-recipe', ensureAuth, recipeController.submitRecipe);
router.post('/submit-recipe', ensureAuth, recipeController.submitRecipeOnPost);
router.get('/signIn', recipeController.signIn);


module.exports = router;