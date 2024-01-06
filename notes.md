# Notes for the project

## Video resources

- https://www.youtube.com/playlist?list=PL4cUxeGkcC9hAJ-ARcYq_z6lDZV7kT1xD
- https://www.youtube.com/watch?v=O5kh3sTVSvA
- https://www.youtube.com/watch?v=OEdPH4fV7vY&t=3919
- https://www.youtube.com/watch?v=IDVUy34vlSE
- https://www.youtube.com/watch?v=V8dYGNfHjfk&t=454s
- https://www.youtube.com/watch?v=YZPnam8Y8r4
- https://www.youtube.com/watch?v=Y2ec4KQ7mP8
- https://www.youtube.com/watch?v=pdd04JzJrDw
- https://www.youtube.com/watch?v=d2RxKTKldfI


## Reading material

- https://medium.com/@veerajayanth13/simple-login-signup-using-google-oauth-in-node-js-and-mongodb-333bd7467cfc
- https://docs.docker.com/engine/reference/builder/#usage


log out call if something would break:


// POST route for handling logout
// router.post('/logout', function (req, res, next) {
//   // Use req.logout with a callback function
//   req.logout(function (err) {
//       if (err) {
//           // Handle error if logout fails
//           return next(err);
//       }

//       // Check if it's an AJAX request
//       if (req.xhr || req.headers.accept.indexOf('json') > -1) {
//           // Respond with JSON indicating successful logout
//           return res.json({ message: 'Logout successful' });
//           console.log('logged out');
//       }

//       // If not an AJAX request, redirect to the home page
//       res.redirect('/');
//   });
// });
