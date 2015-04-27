#!/usr/bin/env node
/*globals console, require, process*/

'use strict';

var http = require('http');
var url = process.argv[2];

if (!url) {
  throw new Error('Need an URL');
}

http.get(url, function(res) {
	// get keys for res.headers
	// loop over keys, passing each one to our object
	var keys = Object.keys(res.headers);
	keys.forEach(function (key) {
		console.log(key + ': ' + res.headers[key]);
	});


	var allChunks = '';

	res.on('data', function (chunk){
		allChunks += chunk;
	});

	res.on('end', function () {
		console.log('body: '+allChunks);
	});

});
