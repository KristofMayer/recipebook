
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This filed is required'
    },
    description: {
        type: String,
        required: 'This filed is required'
    },
    email: {
        type: String,
        required: 'This filed is required'
    },
    ingredients: {
        type: Array,
        required: 'This filed is required'
    },
    category: {
        type: String,
        enum: ['Thai', 'American', 'Chinese', 'Mexican', 'Indian'],
        required: 'This filed is required'
    },
    image: {
        type: String,
        required: 'This filed is required'
    }
});

recipeSchema.index({name: 'text', description: 'text'});

//wildcat
// recipeSchema.index({"$**": 'text'});

module.exports = mongoose.model('Recipe', recipeSchema);