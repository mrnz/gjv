describe('ModelsCtrl', function () {

    var scope, state;

    beforeEach(module('starter'));

    beforeEach(inject(function($rootScope, $controller, $q, $state) {
 
        scope = $rootScope.$new();
        state = $state;
        state.params.brandName = 'Opel'
        
        dataFactory = {
          models: function() {
            var defer = $q.defer();
            defer.resolve('result');
            return defer.promise;
          },
          formatListData: function() {
            return 'result';
          }
        };

        spyOn(dataFactory, 'models').and.callThrough(); 
        spyOn(dataFactory, 'formatListData').and.callThrough(); 

        var options = { $scope: scope, 
                        $state: state, 
                        dataFactory: dataFactory, 
                        Settings: {appName: 'abc'}
                      };
        
    
     
        $controller('ModelsCtrl', options);
    }));
  
    describe('ModelsCtrl init values', function () {

      it('listEmpty should be true', function () {
        expect(scope.listEmpty).toEqual(true);
      });

      it('items length should be 0', function () {
        expect(scope.items.length).toEqual(0);

      });

      it('title should be Opel', function () {
        expect(scope.title).toEqual('Opel');
      });
    
    });

    describe('ModelsCtrl functions test', function () {
    
      it('after get data from server success cb should be call', function () {

        dataFactory.models(); 
        scope.$digest();

        expect(dataFactory.models).toHaveBeenCalled();
        expect(dataFactory.formatListData).toHaveBeenCalled();
        expect(scope.listEmpty).toBe(false);

        expect(scope.items).toBe('result');

      });      
      
      it('selectItem should change a state', function () {
        scope.selectItem('','Corsa');
        scope.$apply();
        expect(state.current.views.menuContent.controller).toEqual('VolumesCtrl');
        expect(state.params.modelName).toEqual('Corsa');
      });      

             
    });

});