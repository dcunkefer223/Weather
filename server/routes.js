/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';
var request = require("request");
var weatherURI = "http://api.openweathermap.org/data/2.5/weather?q=";
var api = "APPID=7c99bd12f8e57f1557fe0472e9ea0a64";

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
    findWeatherByCity(req.params.city, function(humidity){
      res.json(humidity);
    });
    console.log('weatherCity', weatherURI);
  });
//});

  // app.get('/weatherCity', function (req, res){
  // var city = req.query.city;
  // var url = weatherURI//+53b61f0bc98bfe8e551a7d93fd4ad047
  // request(url, function (err,response, body){
  //   if (err) console.log(err + " inside weatherCity");
  //   else{
  //     res.set('Content-Type', 'application/json')
  //     res.status(200).send(body)
  //   }
  // })
  // });

  function findWeatherByCity(city, cb){
    var query = weatherURI+city+api;
    console.log("inside findWEather by City",city);
    request(query, function (error, response, body){
      var body = JSON.parse(body);
      var temp = body.main.temp;
      console.log(temp)
        cb(temp);
    })
  }


};
