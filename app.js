const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const passport = require('passport');
const findOrCreate = require('mongoose-findorcreate');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

//MidldeWare

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);


app.use(cookieParser('CookieBlogSecure'));
app.use(session({
    secret: 'CookieBlogSecretSession',
    saveUninitialized: true,
    resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(fileUpload());

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//Routing

const routes = require('./server/routes/recipeRoutes.js');
const passport = require('passport');
app.use('/', routes);

app.listen(port, ()=> console.log(`Linstening to port ${port}`));

