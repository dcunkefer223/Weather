'use strict';

describe('Controller: MainController', function() {

  // load the controller's module
  beforeEach(module('sq1WeatherApp'));
  //beforeEach(module('socketMock'));

  var scope;
  var MainCtrl;
  //var $httpBackend;
  //var settings;
  var city;
  var q;
  var deferred;
  var Degree;
  var apiService;
  
  beforeEach(function(){
    //city = 822;
    apiService = {
            // grabDegree: function () {
            //     deferred = q.defer();
            //     return deferred.promise;
            // },
            
              tDegree: function(){
                //var h = 'hello'
                return 822
              }
            
    };
  });
  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, $q) {
    q=$q;
    scope = $rootScope.$new();
    MainCtrl = $controller('MainController', {
      $scope: scope,
      Degree: apiService
    });
  }));

  it('should attach a list of things to the controller', function() {
  //   //$httpBackend.flush();
    expect(scope.weatherCities.length).toBe(0);
    expect(scope.fudge).toBe(823);
  // });




//   it('should request getDegrees during grabDegree', function (){
//     spyOn(apiService, 'tDegree').andCallThrough();
//     scope.testdegree();
//     //deferred.resolve();
//     //scope.$root.$digest();
//     expect(apiService.tDegree).toHaveBeenCalled();
//   });
});







