describe('User factory test', function () {

    var scope, $q, state, $timeout, $auth, $ionicLoading, $cordovaToast, messageFactory, userFactory;

    beforeEach(module('starter'));
 
    beforeEach(inject(function( _$q_, _$state_, _$rootScope_, _$timeout_, _$auth_, _$state_, _TokenFactory_, _messageFactory_, _userFactory_) {
        
        $q = _$q_;
        $state = _$state_;
        scope = _$rootScope_.$new();
        $timeout = _$timeout_;
        $auth = _$auth_;
        $ionicLoading = $ionicLoading;
        TokenFactory =  _TokenFactory_;
        messageFactory = _messageFactory_;
        userFactory = _userFactory_;

        var defer = $q.defer(); 
        defer.resolve(true);

    }));

    describe('Authenticate test', function () {
      it('When NETWORK is false Authenticate should return false', function () {

        spyOn(userFactory,'satellizer').and.callFake(function() {
          var defer = $q.defer();
          defer.resolve();
          return defer.promise;
        });
        spyOn(userFactory,'postActionSuccess').and.callFake(function() {
          var defer = $q.defer();
          defer.resolve();
          return defer.promise;
        });


        NETWORK = false;
        var result;
        userFactory.authenticate('email').then(function(r) {result = r;});
        scope.$digest();
        NETWORK = true;
        expect(result).toBe(false);

      });

      it('When autentificate resolve promise it should return true', function () {
        spyOn(userFactory,'satellizer').and.callFake(function() {
          var defer = $q.defer();
          defer.resolve();
          return defer.promise;
        });
        spyOn(userFactory,'postActionSuccess').and.callFake(function() {
          var defer = $q.defer();
          defer.resolve();
          return defer.promise;
        });
        
        var result;
        userFactory.authenticate().then(function(r) {result = r;});
        scope.$digest();
        expect(userFactory.postActionSuccess).toHaveBeenCalled();
        expect(result).toBe(true);
        
      });

      it('When autentificate reject promise it should return false', function () {
        spyOn(userFactory,'satellizer').and.callFake(function() {
          var defer = $q.defer();
          defer.reject();
          return defer.promise;
        });
        spyOn(userFactory,'postActionError').and.callFake(function() {
          var defer = $q.defer();
          defer.resolve();
          return defer.promise;
        });
        
        var result;
        userFactory.authenticate().then(function(r) {result = r;});
        scope.$digest();
        expect(userFactory.postActionError).toHaveBeenCalled();
        expect(result).toBe(false);
      });

    });
    
    describe('satellizer test', function () {

      it('When called with "email" $auth.login should be called', function () {
        spyOn($auth,'login').and.callFake(function() {
          var defer = $q.defer();
          defer.reject();
          return defer.promise;
        });
        userFactory.satellizer('email');
        scope.$digest();
        expect($auth.login).toHaveBeenCalled();
      });

      it('When called with "emailRegister" $auth.signup should be called', function () {
        spyOn($auth,'signup').and.callFake(function() {
          var defer = $q.defer();
          defer.reject();
          return defer.promise;
        });
        userFactory.satellizer('emailRegister');
        scope.$digest();
        expect($auth.signup).toHaveBeenCalled();
      });  
      
      it('When called with something else $auth.authenticate should be called', function () {
        spyOn($auth,'authenticate').and.callFake(function() {
          var defer = $q.defer();
          defer.reject();
          return defer.promise;
        });
        userFactory.satellizer('else');
        scope.$digest();
        expect($auth.authenticate).toHaveBeenCalled();
      });  

    });

    describe('postActionSuccess test', function () {

      it('When result status is 200 it TokenFactory.setUserToken should be called', function () {
        spyOn(TokenFactory,'setUserToken');
        userFactory.postActionSuccess({status:200});
        scope.$digest();
        expect(TokenFactory.setUserToken).toHaveBeenCalled();
      });

      it('When result status is 201 it TokenFactory.setUserToken should be called', function () {
        spyOn(TokenFactory,'setUserToken');
        userFactory.postActionSuccess({status:201});
        scope.$digest();
        expect(TokenFactory.setUserToken).toHaveBeenCalled();
      });

      it('When result status is 202 it $state.go should be called', function () {
        spyOn(messageFactory,'showLoading');
        spyOn($state,'go');

        userFactory.postActionSuccess({status:202, data:{message:'test'}});
        scope.$digest();
        expect(messageFactory.showLoading).toHaveBeenCalled();
        $timeout.flush();
        expect($state.go).toHaveBeenCalled();

      });     

    });    
    describe('postActionError test', function () {
      
      it('When data object with message object is passed essageFactory.showLoading should be called ', function () {
        spyOn(messageFactory,'showLoading');
        userFactory.postActionError({data:{message:201}});
        
        expect(messageFactory.showLoading).toHaveBeenCalled();
      });

      it('When message object is passed essageFactory.showLoading should be called', function () {
        
        spyOn(messageFactory,'showLoading');
        userFactory.postActionError({message:201});
        expect(messageFactory.showLoading).toHaveBeenCalled();

      });      

    });  
});