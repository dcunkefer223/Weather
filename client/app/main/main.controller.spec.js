'use strict';

describe('Controller: MainController', function() {

  // load the controller's module
  beforeEach(module('sq1WeatherApp'));
  beforeEach(module('socketMock'));

  var scope;
  var MainCtrl;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/weatherCity')
      .respond(['Dallas', 'Austin', 'San Diego', 'Houston']);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainController', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the controller', function() {
    //$httpBackend.flush();
    expect(scope.weatherCities.length).toBe(3);
  });
});