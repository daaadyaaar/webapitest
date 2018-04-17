//
var http = require('http');
var fabcoin = require('bitcoin');
var sudo = require('sudo-js');
var fabcoin1 = require('bitcoinjs-lib');
var express = require('express');
var test=require('simplepublishproject');
var fs = require('fs');
//
http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  //res.write('This is a first page\n');
  res.end();
}).listen(7011, 'localhost');
//
test.printMsg();
console.log('Test core is running at 7011');
