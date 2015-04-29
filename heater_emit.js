#!/usr/bin/env node

/*globals require, module*/

'use strict';

var thermometer = require('./thermometer2.js');
var temp = 0;

setInterval(function(){
	temp -= 0.5;
}, 1e3);
 
var Heater = function (thermometer) {
	// we do this to access the instance inside the methods,
	// because javascript dynamically binds "this" to whatever object
	// invokes the method
	var that = this;
	var on = false;
	var tempId;
	var target = 80;
	var margin = 10;

	this.thermometer = thermometer;
	this.thermometer.setTemp(20);


	this.ignite = function(){
		on = true;
		tempId = setInterval(function(){
			temp += 0.5;
		}, 1e3);
	};

	this.off = function(){
		clearInterval(tempId);
		on = false;
	};
	
	this.thermometer.on('temp', function (temp){
		if (temp < target) {
			that.ignite();
		} else if (temp >= target && temp <= (target+margin)){
			that.ignite();
		} else {
			that.off();
		}
	});
};

var heater = new Heater(thermometer);

module.exports = heater;