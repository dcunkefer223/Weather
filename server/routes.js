/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';
var Weather = require('./requestHandlers/weatherHandler.js');

module.exports = function(app) {

  // Insert routes below
  //app.use('/api/things', require('./api/thing'));
  // All undefined asset or api routes should return a 404
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
    //console.log('weatherCity', weatherURI);
  });



};
