angular.module('starter')
.config(['ionGalleryConfigProvider',function(ionGalleryConfigProvider) {
  
  ionGalleryConfigProvider.setGalleryConfig({
  	action_label: 'Close',
    template_gallery: 'gallery.html',
    template_slider: 'slider.html',
    toggle: false,
    row_size: 3,
    fixed_row_size: true
  });

}]);

