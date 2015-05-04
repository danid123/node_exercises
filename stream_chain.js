#!/usr/bin/env node

/*globals require*/

'use strict';

var fs = require('fs');
var zlib = require('zlib');
var split2 = require('split2');
var through2 = 	require('through2');

var source = fs.createReadStream('./registry.json.gz');
var unzip = zlib.createGunzip();

source.pipe(unzip)
	.pipe(split2())
	.pipe(through2.obj(function(obj, encoding, callback){
		// //add if comma logic
		// if (obj[obj.length - 1] === ',') {
  // 		var json = obj.trim().slice(0,-1);			
		// }
		//console.log(json+'\n');
		this.push(json);
		//process.exit();
		callback();		
	}))
	.pipe(through2.obj(function(obj, encoding, callback){
		var error;
		try {
			var parsed = JSON.parse(obj);
			this.push(parsed);
			//console.log(parsed);
		} catch(err) {
			error = err;
			console.log('error:', err, 'info:', parsed);
		}

		callback();

	}))
	.pipe(process.stdout);



// try{
// 	result = JSON.parse(chunk.toString());
// } catch {
// 	JSON.parse(chunk.toString());
// }

