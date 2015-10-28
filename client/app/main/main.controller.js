'use strict';

angular.module('sq1WeatherApp')
  .controller('MainController', function ($scope, $http, Degree) {
    //angular.extend($scope)//, Degree)
    //$scope.grabWeather = degree.grabDegree();
      $scope.weatherCities = [];
      $scope.getLoco = function (){
        $http({method: 'GET',
          url: 'http://ipinfo.io'}).then(function (res){
          $scope.local = res.data.city
        }).catch(function(err){
          console.log(err);
        })
      }
      $scope.grabDegree = function(city){
        console.log("this is city#1", city)
        Degree.grabDegree(city)
          .then(function(data){
            $scope.weather = data;
            $scope.weatherCities.push({city: city, temp: data})
          })
          .catch(function(err){
            console.log("err in grabCity", err)
          })
      }
      $scope.takeAway = function(index){
        console.log(index)
        $scope.weatherCities.splice(index, 1);
      }
    $scope.getLoco();
   setTimeout(function(){$scope.grabDegree($scope.local)},1000);
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
