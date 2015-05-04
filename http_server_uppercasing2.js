#!/usr/bin/env node

/*globals require */

'use strict';

var net = require('net');

var server = net.createServer();

server.on('connection', function(conn) {
	console.log('I have a connection');
  conn.setEncoding('utf8');
  conn.on('data', function(d){
  	net.connect(8002, server.address);
  });
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});

