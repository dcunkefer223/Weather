'use strict';

describe('Controller: MainController', function() {

  // load the controller's module
  //beforeEach(module('socketMock'));

  var scope;
  var MainCtrl;
  //var $httpBackend;
  //var settings;
  var city;
  var q;
  var deferred;
  var back;
  var apiService;
  var city = 'Dallas'

  beforeEach(function() {
      module('sq1WeatherApp')
        apiService = {
            data: [{
                city: "Dallas",
                temp: 286
                }],

            grabDegree: function() {
                deferred = q.defer();
                return deferred.promise;
            }
        };
  });

  beforeEach(inject(function($controller, $rootScope, $q) {

      scope = $rootScope.$new();
      // apiService = _apiService_;
      q= $q;
      MainCtrl = $controller('MainController', {
        $scope: scope,
        Degree: apiService
        });
    }));

  it('should make a Request ', function() {
    //spyOn(back, 'testDegree').andCallThrough();
    scope.testMe();
    // deferred.resolve();
    // scope.$root.$digest();
    expect(apiService.grabDegree).toHaveBeenCalled();
    
  });

  it('should request getDegrees during grabDegree', function (){
    spyOn(apiService, 'grabDegree').and.callThrough();
    scope.grabDegree(city);
    deferred.resolve();
    scope.$root.$digest();
    expect(apiService.grabDegree).toHaveBeenCalled();
  });

  it('should populate the scope.weather when scope.degree() is called', function() {
     scope.grabDegree(city);
     deferred.resolve();
     scope.$root.$digest();
     console.log("scope . weather", apiService.data);
     expect(scope.weather).not.toBe([]);
   });
});


