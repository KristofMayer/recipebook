// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     username: { type: String, reqired: true, unique: true},
//     password: { type: String, reqired: true }
// });

// module.exports = mongoose.model('User', UserSchema);


//TODO: Finish authentication


const mongoose = require("mongoose");
const { Schema } = mongoose.model;
const UserSchema = new Schema({
  google: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;