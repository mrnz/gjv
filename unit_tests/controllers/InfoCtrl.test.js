describe('InfoCtrl test', function () {

    var scope, state, $cordovaGoogleAnalytics;

    beforeEach(module('starter'));

    beforeEach(inject(function($rootScope, $controller, $q, $state, _$cordovaGoogleAnalytics_) {
 
        scope = $rootScope.$new();
        state = $state;
        $cordovaGoogleAnalytics = _$cordovaGoogleAnalytics_;

        state.params.brandName = 'Opel'
        state.params.modelName = 'Corsa'
        state.params.volumeName = '1999'
        
        ad = {
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

        spyOn(ad, 'info').and.callThrough(); 
        
        var options = { $scope: scope, 
                        $state: state, 
                        dataFactory: ad, 
                        Settings: {appName: 'abc'}
                      };
        spyOn($cordovaGoogleAnalytics, 'trackView').and.returnValue(true);  
        spyOn(ionic.Platform, 'isWebView').and.returnValue(true)
     
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
        expect(scope.title).toEqual('Opel');
      });
      
    });

    describe('Functions test', function () {
    
      it('after get data from server success cb should be call', function () {

        ad.info(); 
        scope.$digest();

        expect(ad.info).toHaveBeenCalled();
        expect(scope.ready).toBe(true);

        expect(scope.items[0].src).toBe('http://www.gdziejestvin.pl/file/src1');

      });      

    });
    describe('google analytics test', function () {
    
      it('google factory should be called', function () {        

        expect($cordovaGoogleAnalytics.trackView).toHaveBeenCalled();

      });      

    });
});