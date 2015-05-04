#!/usr/bin/env node

/*globals require*/
'use strict';

var through2 = 	require('through2');

function uppercase(chunk) {
  var chunk_upper = chunk.pipe(through2.obj(function (chunk) {
    return chunk.toString().toUpperCase();
  }));

  return chunk_upper;
}

module.exports = uppercase;