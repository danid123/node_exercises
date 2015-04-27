#!/usr/bin/env node

/*globals require */

'use strict';

var myAsync = require ('./asyncWaterfall.js');
myAsync('http://www.google.com', 'testfile.txt', function(err){
	if (err){
		throw err;
	}
});
