describe('AddVehiculeCtrl', function () {

    var scope;

    // load the controller's module
    beforeEach(module('starter'));

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('AddVehiculeCtrl', {$scope: scope});
    }));
  
  describe('Constructor', function () {

    it('assigns a name', function () {
      expect(scope.a).toEqual('test;');
    });
    
  });

});