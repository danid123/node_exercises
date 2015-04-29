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
	.pipe(through2(function(chunk, encoding, callback){
		var json = chunk.toString().trim().slice(0,-1);
		console.log(json+'\n');
		//process.exit();
		callback();		
	}))
	.pipe(process.stdout);



// try{
// 	result = JSON.parse(chunk.toString());
// } catch {
// 	JSON.parse(chunk.toString());
// }

