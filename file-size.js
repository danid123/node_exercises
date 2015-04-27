/*globals console, require, process*/
'use strict';

var fs = require('fs');
var path = process.argv[2];

console.log ('going to stat');

fs.stat(path, function(err, stat){
	console.log('filesize:'+stat.size);
});
	console.log('statted');