#!/usr/bin/env node

/*globals require*/

'use strict';

var fs = require('fs');
//var join = require('path').join;
//var path = join(_dirname, 'registry.json'); //_dirname absolute path of the source file
var stream = fs.createReadStream('./registry.json');

stream.setEncoding('utf8');

stream.on('data', function(data) {
  console.log('data:', data);
});
