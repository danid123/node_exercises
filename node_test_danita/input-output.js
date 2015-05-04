#!/usr/bin/env node

/*globals require*/

'use strict';

var data = require('data');
var fs = require('fs');

var file = process.argv[2];

if (! file) {
  throw new Error('Need a filename');
}

data(fs.createReadStream(file), function(data) {
  data.pipe(process.stdout);
});
