describe('VolumesCtrl', function () {

    var scope, state;

    beforeEach(module('starter'));

    beforeEach(inject(function($rootScope, $controller, $q, $state) {
 
        scope = $rootScope.$new();
        state = $state;
        state.params.brandName = 'Opel'
        state.params.modelName = 'Corsa'
        dataFactory = {
          volumes: function() {
            var defer = $q.defer();
            defer.resolve('result');
            return defer.promise;
          },
          formatListData: function() {
            return 'result';
          }
        };

        spyOn(dataFactory, 'volumes').and.callThrough(); 
        spyOn(dataFactory, 'formatListData').and.callThrough(); 

        var options = { $scope: scope, 
                        $state: state, 
                        dataFactory: dataFactory, 
                        Settings: {appName: 'abc'}
                      };
        
    
     
        $controller('VolumesCtrl', options);
    }));
  
    describe('init values', function () {

      it('listEmpty should be true', function () {
        expect(scope.listEmpty).toEqual(true);
      });

      it('items length should be 0', function () {
        expect(scope.items.length).toEqual(0);

      });

      it('title should be Opel', function () {
        expect(scope.title).toEqual('Corsa');
      });
      
    });

    describe('VolumesCtrl functions test', function () {
    
      it('after get data from server success cb should be call', function () {

        dataFactory.volumes(); 
        scope.$digest();

        expect(dataFactory.volumes).toHaveBeenCalled();
        expect(dataFactory.formatListData).toHaveBeenCalled();
        expect(scope.listEmpty).toBe(false);

        expect(scope.items).toBe('result');

      });      
      
      it('selectItem should change a state', function () {
        scope.selectItem('','Opel');
        scope.$apply();
        expect(state.current.views.menuContent.controller).toEqual('InfoCtrl');
        expect(state.params.volumeName).toEqual('Opel');
      });      

             
    });

});