#!/usr/bin/env node

/*globals require */

'use strict';

var net = require('net');

var server = net.createServer();

server.on('request', function(req, res) {
  var interval = setInterval(function() {
    res.write('a chunk of data\n');
    conn.setEncoding('utf8');
  	conn.on('data', function(d){
  		net.connect(8002, server.address);
  	});
  }, 1e3);

  setTimeout(function() {
    clearInterval(interval);
    res.end();
  }, 6e3);
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});
