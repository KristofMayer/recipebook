// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     username: { type: String, reqired: true, unique: true},
//     password: { type: String, reqired: true }
// });

// module.exports = mongoose.model('User', UserSchema);


//TODO: Finish authentication

// const mongoose = require("mongoose");
// const { Schema } = mongoose.model;
// const UserSchema = new mongoose.Schema({
//   google: {
//     id: {
//       type: String,
//     },
//     name: {
//       type: String,
//     },
//     email: {
//       type: String,
//     },
//   },
// });
// const User = mongoose.model("User", UserSchema);
// module.exports = User;


const mongoose = require('mongoose');
require('dotenv').config();

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  email:{
type:String,
required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('User', UserSchema)

