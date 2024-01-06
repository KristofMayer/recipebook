const express = require('express')
const passport = require('passport')
const router = express.Router()
require('dotenv').config();


router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }))

router.get('/auth/google/callback', passport.authenticate('google', {successRedirect:'/home', failureRedirect: '/' }))

module.exports = router
    