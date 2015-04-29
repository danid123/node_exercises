#!/usr/bin/env node

/*globals require*/

'use strict';

var fs = require('fs');
var zlib = require('zlib');

var source = fs.createReadStream('./registry.json.gz');
var unzip = zlib.createGunzip();

source.pipe(unzip).pipe(process.stdout);


