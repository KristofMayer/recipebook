// These are the controllers, the logic for each GET/POST request
require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');
const User = require('../models/Users');
require('dotenv').config();

/**
 *  GET /
 * home page
 */

exports.homepage = async(req, res) => {

    try{

        const limitNuber = 5;
        const categories = await Category.find({}).limit(limitNuber);
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNuber);
        const thai = await Recipe.find({ 'category': 'Thai' }).limit(limitNuber);
        const american = await Recipe.find({ 'category': 'American' }).limit(limitNuber);
        const chinese = await Recipe.find({ 'category': 'Chinese' }).limit(limitNuber);

        const food = { latest, thai, american, chinese };



        res.render('index', { title: 'Cooking Blog - Home', categories, food, userinfo:req.user });
    } catch(error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

}

/** 
 * GET
 * 
 * Categories */

exports.exploreCategories = async(req, res) => {

    try{

        const limitNuber = 20;
        const categories = await Category.find({}).limit(limitNuber);
        res.render('categories', { title: 'Cooking Blog - Categories', categories });
    } catch(error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

}

/** 
 * GET /recipe:id
 *  categoires
 *  */

exports.exploreRecipe = async(req, res) => {

    try{

       let recipeId = req.params.id; 

       const recipe = await Recipe.findById(recipeId);

        res.render('recipe', { title: 'Cooking Blog - Recipe', recipe, isAuthenticated: req.isAuthenticated() });
    } catch(error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

}

/**
 * 
 * GET categories/:id
 * 
 */

exports.exploreCategoriesById = async(req, res) => {

    try{

       let categoryId = req.params.id; 
       const limitNumber = 20; 
       const categoryById = await Recipe.find({ 'category': categoryId }).limit(limitNumber);

        res.render('categories', { title: 'Cooking Blog - Categroies', categoryById });
    } catch(error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

}


/**
 * POST
 * 
 * SearchRecipes
 */



exports.searchRecipes = async(req, res) => {



    try {
    let searchTerm = req.body.searchTerm;
    let recipe = await  Recipe.find({ $text: {$search: searchTerm, $diacriticSensitive: true }});
    res.render('search', {title: 'Cooking Blog - Search', recipe});
    //res.json(recipe);
    } catch(error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
}



/**
 * GET explore latest
 * /explore-latest
 * 
 * 
 */


exports.exploreLatest = async(req, res) => {

    try{
        const limitNumber = 20; 
       const recipe = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        res.render('explore-latest', { title: 'Cooking Blog - Explore Latest', recipe });
    } catch(error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

}


/**
 * 
 *  GET /random-recipe
 *  
 * Explore Random recipe
 *  
 */


exports.randomRecipe = async(req, res) => {

    try{

        let count = await Recipe.find().countDocuments();
        let random = Math.floor(Math.random() * count);
        let recipe = await Recipe.findOne().skip(random).exec();
        res.render('random-recipe', { title: 'Cooking Blog - Random', recipe });
    } catch(error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

}


/**
 * 
 *  GET /submit-recipe
 *  
 *  
 */



exports.submitRecipe = async(req, res) => {
    const infoErrorsObj = req.flash('infoErrors');
    const infoSubmitObj = req.flash('infoSubmit');
    res.render('submit-recipe', { title: 'Cooking Blog - Submit', infoSubmitObj, infoErrorsObj});
}


/**
 * POST /submit-recipe
 *  
 *  
 */


exports.submitRecipeOnPost = async(req, res) => {

    try {

        let imageUploadFile;
        let uploadPath;
        let newImageName;

        if(!req.files || Object.keys(req.files).length === 0){
            console.log("No Files where uploaded");
        } else {
            imageUploadFile = req.files.image;
            newImageName = Date.now() + imageUploadFile.name;

            uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

            imageUploadFile.mv(uploadPath, function(err){
                if(err) return res.status(500).send(err);
            })
        }

        const newRecipe = new Recipe({

            name: req.body.name,
            description: req.body.description,
            email: req.body.email,
            ingredients: req.body.ingredients,
            category: req.body.category,
            image: newImageName
        });

        await newRecipe.save();


        req.flash('infoSubmit', 'Recipe has been added.')
        res.redirect('submit-recipe');
    } catch (error) {
        req.flash('infoErrors', error);
        res.redirect('submit-recipe');
    }

}


/**
 * 
 *  GET /sign_in
 *  
 *  
 */


exports.signIn = async(req, res) => {
    const infoErrorsObj = req.flash('infoErrors');
    const infoSubmitObj = req.flash('infoSubmit');
    res.render('signIn', { title: 'Cooking Blog - Sign in'});
}


/**
 * 
 * 
 * Delete recipe
 * /delete/recipe/:id
 * 
 * 
 */

exports.deleteRecipe = async (req, res) => {
    const recipeId = req.params.id;

    try {
        // Use Recipe.findByIdAndDelete() to delete the recipe by ID
        const data = await Recipe.findByIdAndDelete(recipeId);
        if (!data) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        // Redirect to a page or send a response as needed
        res.redirect('/'); // Redirect to the home page after deletion, for example
    } catch (error) {
        res.status(500).json({ message: error.message || "Error occurred" });
    }
};