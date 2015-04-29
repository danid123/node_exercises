#!/usr/bin/env node

/*globals require, module*/

'use strict';

var EventEmitter = require('events').EventEmitter;
var thermometer = new EventEmitter();
thermometer.temp = 20;

thermometer.setTemp = function(val){
	thermometer.temp = val;
};

setInterval(function(){
	thermometer.emit('temp', thermometer.temp);
}, 1e3);

module.exports = thermometer;