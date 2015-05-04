#!/usr/bin/env node

/*globals require*/

'use strict';

var fs = require('fs');
var through2 = 	require('through2');
var source = fs.createReadStream('./colors.json');

function uppercase(chunk) {
  var chunk_upper = chunk.pipe(through2.obj(function (chunk) {
    return chunk.toString().toUpperCase();
  }));

  return chunk_upper;
}


source.pipe(source).pipe(process.stdout);
