/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
var path = require('path');
//import path from 'path';
var Weather = require('./requestHandlers/weatherHandler.js');
var passport = require('passport');

module.exports = function(app, passport) {
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/')
    .get(function(req, res) {
     res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });

  app.get('/weatherCity/:city', function (req, res){
    console.log("city",req.params.city)
    Weather.findWeatherByCity(req.params.city, function(humidity){
      res.json(humidity);
    });
  });

    app.get('login', function (req, res){
      res.render('login.ejs', {message: req.flash('loginMessage')});
    });

    app.get('/signup', function(req, res) {
      res.render('../../../../app/login/signup.ejs', { message: req.flash('signupMessage') });
    });
    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    //POST REQUESTS

};
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
