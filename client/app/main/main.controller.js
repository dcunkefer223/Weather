'use strict';

angular.module('sq1WeatherApp')
  .controller('MainController', function ($scope, degree) {
    angular.extend($scope, degree)
    //$scope.grabWeather = degree.grabDegree();
    $scope.weatherCities = [];
    $scope.grabDegree = function(city){
      console.log("this is city#1", city)
      degree.grabDegree(city)
        .then(function(data){
          $scope.weather = data;
          $scope.weatherCities.push({city: city, temp: data})
        })
        .catch(function(err){
          console.log("err in grabCity", err)
        })
    }
  })
   
   .filter('fahren', function() {
        return function (number){
          return number * 9/5 -459.67
        }
    })
    .filter('celcius', function(){
      return function (number){
        return number-273.15
      }
    })   

  .factory('degree', function($http){
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
    }
  return {
    grabDegree: grabDegree
  }
});

