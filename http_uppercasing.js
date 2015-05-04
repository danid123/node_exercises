#!/usr/bin/env node

/*globals require */

//to test: 
//run tcp_uppercasing_pipe_server and http_uppercasing in seperate terminal windows
//in a third window curl -d "abcd efg" localhost:8001

'use strict';

var http = require('http');
var server = http.createServer();




server.on('request', function(req, res) {
	//req is a stream from curl, res is to curl
	//s is a stream to and from tcp server
	//stdin read stdout write 
	var s = require('net').connect(8002);
	req.pipe(s);
	s.pipe(res);
	s.pipe(process.stdout);
  
  req.once('end', function() {
    console.log('request finished');
  });
});

server.listen(8001, function() {
  console.log('server listening on %j', server.address());
});
