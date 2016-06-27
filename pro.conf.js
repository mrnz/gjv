var exac = require('child_process').exec;

exports.config = {
  specs: ['./e2e/*_spec.js'],

  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
  	browserName: 'chrome'
  },
  directConnect: true,

  onPrepare: function(){
  	console.log('TEST Preparation');
  }
};