'use strict';

angular.module('sq1WeatherApp')
 .factory('Degree', function($http){
      var grabDegree = function(city){
        console.log("inside degree factory", city)
        return $http({
                method: 'GET',
                url: '/weatherCity'+'/'+city
                //params: { city: city }
          })
        .then(function(resp){
          console.log("this is melvin kelvin", resp)
          return resp.data;
        })
      };
      
    return {
      grabDegree: grabDegree
      }
 });
