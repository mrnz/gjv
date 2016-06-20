#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var ncp = require('ncp').ncp;

var foldersToDelete = [
    "css",
    "fonts",
    "img",
    "js",
    "lib",
    "templates"
];
var fs = require('fs');
var path = require('path');

var deleteFolderRecursive = function(removePath) {
  if( fs.existsSync(removePath) ) {
    fs.readdirSync(removePath).forEach(function(file,index){
      var curPath = path.join(removePath, file);
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(removePath);
  }
};

var deleteFile = function(removePath) {
  if( fs.existsSync(removePath) ) {
		fs.unlinkSync(removePath);
	}
};

foldersToDelete.forEach(function(folderName) {
	var iosPlatformsDir = path.resolve(__dirname, '../../platforms/ios/www/'+folderName);
	var androidPlatformsDir = path.resolve(__dirname, '../../platforms/android/assets/www/'+folderName);
	deleteFolderRecursive(iosPlatformsDir);
	deleteFolderRecursive(androidPlatformsDir);
});

	var iosPlatformsDir = path.resolve(__dirname, '../../platforms/ios/www/');
	var androidPlatformsDir = path.resolve(__dirname, '../../platforms/android/assets/www/');

deleteFile(iosPlatformsDir+'/app.js');
deleteFile(androidPlatformsDir+'/app.js');

deleteFile(iosPlatformsDir+'/all.js');
deleteFile(androidPlatformsDir+'/all.js');

deleteFile(iosPlatformsDir+'/templates.js');
deleteFile(androidPlatformsDir+'/templates.js');

deleteFile(iosPlatformsDir+'/index.html');
deleteFile(androidPlatformsDir+'/index.html');

ncp.limit = 16;
 
ncp(androidPlatformsDir+'/dist/', androidPlatformsDir+'/', function (err) {
 	if (err) {
  	return console.error(err);
 	}
 	var iosPlatformsDir = path.resolve(__dirname, '../../platforms/ios/www/dist/');
	var androidPlatformsDir = path.resolve(__dirname, '../../platforms/android/assets/www/dist/');
	deleteFolderRecursive(iosPlatformsDir)
	deleteFolderRecursive(androidPlatformsDir)
});

