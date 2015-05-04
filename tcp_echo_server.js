#!/usr/bin/env node

/*globals require*/

'use strict';

var net = require('net');
var server = net.createServer();

server.on('connection', function(conn) {
  conn.setEncoding('utf8');
  //a.pipe(b).pipe(a) duplex stream
  conn.
  	pipe(conn).
  	pipe(process.stdout);
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});

