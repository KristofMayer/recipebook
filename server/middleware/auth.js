require('dotenv').config();

// simple authentication file, checking if the user is authenticated and redirect accordingly


module.exports = {
  // If the user is authenticated, proceed to the next middleware; otherwise, redirect to the specified URL (or the default one)
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect(process.env.LOGIN_REDIRECT_URL || '/signIn');
    }
  },

  // If the user is not authenticated, proceed to the next middleware; otherwise, redirect to the specified URL (or the default one)
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    } else {
      res.redirect(process.env.HOME_REDIRECT_URL || '/');
    }
  },
};




