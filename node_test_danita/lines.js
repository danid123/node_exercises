#!/usr/bin/env node

/*globals require*/

'use strict';

var through2 = 	require('through2');

function uppercaseOdd(chunk) {
  var chunk_upper_odd = chunk.pipe(through2.obj(function (chunk) {
  	for (var count = 0; count < chunk.length; count++) {
  		if (count % 2==1){
  			return chunk.toString().toUpperCase();
  		} else {
  			return chunk.toString();
  		}
  	}
    
  }));

  return chunk_upper_odd;
}

module.exports = uppercaseOdd;