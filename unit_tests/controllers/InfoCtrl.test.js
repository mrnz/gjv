describe('InfoCtrl test', function () {

    var scope, state;

    beforeEach(module('starter'));

    beforeEach(inject(function($rootScope, $controller, $q, $state) {
 
        scope = $rootScope.$new();
        state = $state;
        state.params.brandName = 'Opel'
        state.params.modelName = 'Corsa'
        state.params.volumeName = '1999'
        dataFactory = {
          info: function() {
            var defer = $q.defer();
            defer.resolve({
            	info:{
            		foto1: 'src1',
            		foto2: 'src2'
            	}
            });
            return defer.promise;
          }
        };

        spyOn(dataFactory, 'info').and.callThrough(); 
 

        var options = { $scope: scope, 
                        $state: state, 
                        dataFactory: dataFactory, 
                        Settings: {appName: 'abc'}
                      };
        
    
     
        $controller('InfoCtrl', options);
    }));
  
    describe('init values', function () {

      it('ready should be true', function () {
        expect(scope.ready).toEqual(false);
      });

      it('info length should be 0', function () {
        expect(scope.info.length).toEqual(0);
      });

      it('items length should be 0', function () {
        expect(scope.items.length).toEqual(0);
      });

      it('title should be Opel', function () {
        expect(scope.title).toEqual('1999');
      });
      
    });

    describe('VolumesCtrl functions test', function () {
    
      it('after get data from server success cb should be call', function () {

        dataFactory.info(); 
        scope.$digest();

        expect(dataFactory.info).toHaveBeenCalled();
        expect(scope.ready).toBe(true);

        expect(scope.items[0].src).toBe('http://www.gdziejestvin.pl/file/src1');

      });      

    });

});