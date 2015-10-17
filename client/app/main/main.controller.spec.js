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
  var Degree;
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


  it('should attach a list of things to the controller', function() {
    expect(scope.weatherCities.length).toBe(0);
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
            expect(scope.weather).not.toBe([]);
        });
});








  // Initialize the controller and a mock scope
  // beforeEach(inject(function($controller, $rootScope, $q) {
  //   q=$q;
  //   scope = $rootScope.$new();
  //   MainCtrl = $controller('MainController', {
  //     $scope: scope,
  //     Degree: apiService
  //   });
  // }));
//