angular.module('gjvShare', [])

.config(function($stateProvider) {

  $stateProvider

  .state('menu.share', {
    url: "/share",
    cache: false,
    views: {
      'menuContent': {
        templateUrl: "modules/gjvShare/templates/share.html",
        controller: 'ShareCtrl'
      }
    },
    data: {
      stateName: 'SHARE',
      googleAnalyticsName: '',
      activeTab: 0
    }
  })

})

.factory('$cordovaSocialSharing', ['$q', '$window',
  function($q, $window) {
    return {
      share: function(message, subject, file, link) {
        var q = $q.defer();
        subject = subject || null;
        file = file || null;
        link = link || null;
        $window.plugins.socialsharing.share(message, subject, file, link, function() {
          q.resolve(true);
        }, function() {
          q.reject(false);
        });
        return q.promise;
      },

      shareViaTwitter: function(message, file, link) {
        var q = $q.defer();
        file = file || null;
        link = link || null;
        $window.plugins.socialsharing.shareViaTwitter(message, file, link, function() {
          q.resolve(true);
        }, function(err) {
          q.reject(err);
        });
        return q.promise;
      },

      shareViaWhatsApp: function(message, file, link) {
        var q = $q.defer();
        file = file || null;
        link = link || null;
        $window.plugins.socialsharing.shareViaWhatsApp(message, file, link, function() {
          q.resolve(true);
        }, function() {
          q.reject(false);
        });
        return q.promise;
      },

      shareViaFacebook: function(message, file, link) {
        var q = $q.defer();
        message = message || null;
        file = file || null;
        link = link || null;
        $window.plugins.socialsharing.shareViaFacebook(message, file, link, function() {
          q.resolve(true);
        }, function() {
          q.reject(false);
        });
        return q.promise;
      },

      shareViaFacebookWithPasteMessageHint: function(message, file, link, pasteMessageHint) {
        var q = $q.defer();
        file = file || null;
        link = link || null;
        $window.plugins.socialsharing.shareViaFacebookWithPasteMessageHint(message, file, link, pasteMessageHint, function() {
          q.resolve(true);
        }, function() {
          q.reject(false);
        });
        return q.promise;
      },

      shareViaSMS: function(message, commaSeparatedPhoneNumbers) {
        var q = $q.defer();
        $window.plugins.socialsharing.shareViaSMS(message, commaSeparatedPhoneNumbers, function() {
          q.resolve(true);
        }, function() {
          q.reject(false);
        });
        return q.promise;
      },

      shareViaEmail: function(message, subject, toArr, ccArr, bccArr, fileArr) {
        var q = $q.defer();
        toArr = toArr || null;
        ccArr = ccArr || null;
        bccArr = bccArr || null;
        fileArr = fileArr || null;
        $window.plugins.socialsharing.shareViaEmail(message, subject, toArr, ccArr, bccArr, fileArr, function() {
          q.resolve(true);
        }, function() {
          q.reject(false);
        });
        return q.promise;
      },

      shareVia: function(via, message, subject, file, link) {
        var q = $q.defer();
        message = message || null;
        subject = subject || null;
        file = file || null;
        link = link || null;
        $window.plugins.socialsharing.shareVia(via, message, subject, file, link, function() {
          q.resolve(true);
        }, function() {
          q.reject(false);
        });
        return q.promise;
      },

      canShareViaEmail: function() {
        var q = $q.defer();
        $window.plugins.socialsharing.canShareViaEmail(function() {
          q.resolve(true);
        }, function() {
          q.reject(false);
        });
        return q.promise;
      },

      canShareVia: function(via, message, subject, file, link) {
        var q = $q.defer();
        $window.plugins.socialsharing.canShareVia(via, message, subject, file, link, function(success) {
          q.resolve(success);
        }, function(error) {
          q.reject(error);
        });
        return q.promise;
      },

      available: function() {
        var q = $q.defer();
        window.plugins.socialsharing.available(function(isAvailable) {
          if (isAvailable) {
            q.resolve();
          } else {
            q.reject();
          }
        });
      }
    };
  }
])
  .controller('ShareCtrl', ['$scope', '$cordovaSocialSharing',function($scope, $cordovaSocialSharing) {      
      var message = 'Oto wiadomosc - co za cudna appka';
      var link =  'http://wp.pl';
      var subject = "subject";
      var image = '../img/vin_152.png';
      var number	= '';
      var toArr = '';
      var ccArr = '';
      var bccArr = '';

      var successCallback = function(result) {
      	console.log(result);
      };
      var errorCallback = function(err) {
      	console.log(err);
      };

      $scope.title = 'Share';

      $scope.share = function(provider) {
        console.log('provider: ' + provider)
        switch (provider) {
			    case 'fb':
						$cordovaSocialSharing.shareViaFacebook(message, image, link).then(function(result) {successCallback(result)}, function(err) {errorCallback(err)});
			      break;
			    case 'twitter':
			      $cordovaSocialSharing.shareViaTwitter(message, image, link).then(function(result) {successCallback(result)}, function(err) {errorCallback(err)});
			      break;
			    case 'sms':
			      $cordovaSocialSharing.shareViaSMS(message, number).then(function(result) {successCallback(result)}, function(err) {errorCallback(err)});
			      break;
			    case 'email':
			      $cordovaSocialSharing.shareViaEmail(message, subject, toArr, ccArr, bccArr, image).then(function(result) {successCallback(result)}, function(err) {errorCallback(err)});
			      break;
			    case 'whatsapp':
			      $cordovaSocialSharing.shareViaWhatsApp(message, image, link).then(function(result) {successCallback(result)}, function(err) {errorCallback(err)});
			      break;
				}
    	}
  }]);