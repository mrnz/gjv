describe('StartCtrl test', function (){ 
	
	beforeEach(module('starter'));
	
	beforeEach(inject(function( _$rootScope_, _$compile_) {
		var $compile = _$compile_;
		var scope = _$rootScope_.$new();

		element = angular.element('<img ng-src="123.jpg" image-on-load class=""></img>');
		
		$compile(element)(scope);
		
		scope.$digest();

		console.log()
	
	}));

	it('should display correct text in the DOM', function() {
		element.triggerHandler('load');
		expect(element.hasClass('showImage')).toBe(true);
	});
});