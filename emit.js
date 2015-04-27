#!/usr/bin/env node

/*globals require, module*/

'use strict';

var EventEmitter = require('events').EventEmitter;
var clock = new EventEmitter();
var tic = true;

setInterval(function(){
	clock.emit(tic? 'tic':'toc', Date.now());
	tic = !tic;
}, 1e3);

module.exports = clock;

clock.on('tic', function(ts){
	console.log('tic:',ts);
});
clock.on('toc', function(ts){
	console.log('toc:',ts);
});