#!/usr/bin/env node

/*globals require, module */

'use strict';
var waterfall = require('async-waterfall');
var async = require('async');
var fs = require('fs');
var http = require('http');



module.exports = function exportModule(url, path, cb){
	var file;
	if (!url) {
  	throw new Error('Need an URL');
	}

	function open(cb){
		fs.open(path, 'a', function(err,fd){
			console.log(arguments);
			file = fd;
			cb(err);
		});
	}

	function close(cb){
		fs.close(file, cb);
	}

	function getHeaders(cb){
		http.get(url, function(res) {
			cb(null, res.headers);			
		});
	}

	function writeHeaders(headers){
		var keys = Object.keys(headers);
		keys.forEach(function (key) {
			fs.write(file, headers[key], cb);
		}); 
	}

/*	//same as fs.writeFile.bind(fs,path)
	function (headers, cb){
		fs.writeFile(path, headers, cb)
	}*/

waterfall([
		open,
		getHeaders,
		writeHeaders,
		close
	], cb);
};