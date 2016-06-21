describe('BrandsCtrl', function () {

    var scope, state;

    beforeEach(module('starter'));

    beforeEach(inject(function($rootScope, $controller, $q, $state) {
 
        scope = $rootScope.$new();
        state = $state;
        
        dataFactory = {
          brands: function() {
            var defer = $q.defer();
            defer.resolve('result');
            return defer.promise;
          },
          formatListData: function() {
            return 'result';
          }
        };

        spyOn(dataFactory, 'brands').and.callThrough(); 
        spyOn(dataFactory, 'formatListData').and.callThrough(); 

        var options = { $scope: scope, 
                        $state: state, 
                        dataFactory: dataFactory, 
                        Settings: {appName: 'abc'}
                      };
        
    
     
        $controller('BrandsCtrl', options);
    }));
  
    describe('BrandsCtrl init values', function () {

      it('listEmpty should be true', function () {
        expect(scope.listEmpty).toEqual(true);
      });

      it('items length should be 0', function () {
        expect(scope.items.length).toEqual(0);

      });

      it('title should be abc', function () {
        expect(scope.title).toEqual('abc');
      });
      
      it('after get data from server success cb should be call', function () {

        dataFactory.brands(); 
        scope.$digest();

        expect(dataFactory.brands).toHaveBeenCalled();
        expect(dataFactory.formatListData).toHaveBeenCalled();
        expect(scope.listEmpty).toBe(false);

        expect(scope.items).toBe('result');

      });      
      
      it('selectItem should change a state', function () {
        scope.selectItem('','Opel');
        scope.$apply();
        expect(state.current.views.menuContent.controller).toEqual('ModelsCtrl');
        expect(state.params.brandName).toEqual('Opel');
      });      

             
    });

});