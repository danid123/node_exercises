#!/usr/bin/env node

/*globals require, module */

'use strict';
var async = require('async');
var fs = require('fs');

	function wait(cb){
		setTimeout(cb,1e3);
	}

module.exports = function exportModule(path, cb){
	var file;

	function writeTime(cb){
		fs.write(file, Date.now() + '\n', cb);
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

	async.series([
		open,
		wait,
		writeTime,
		wait,
		writeTime,
		close
	], cb);
};

