/*
*Query the CKAN API in  https://smartstreets.sensetecnic.com/data/api/3/action/
*/
var http = require("http");
var https = require("https");
var fs = require('fs');
//var csv = require('csv');
//var async=require('async');

var API="6c05da93-c769-4781-a5cf-40361a8cecfe";

//Querying the Non-real Time data

//https://smartstreets.sensetecnic.com/data/api/3/action/
//group_list 
//package_list

var query_string="package_list";
var options = {
  hostname: 'smartstreets.sensetecnic.com'
  ,port: 80
  ,path: '/data/api/3/action/'+query_string
  ,method: 'Get'
  ,auth: API
};


var options_sensor = {
  hostname: 'smartstreets.sensetecnic.com',
  port: 80,
  path: '/wotkit/api/sensor/',
  method: 'Get',
  auth: API
};
var req = http.request(options, function(res) {
  //console.log('STATUS: ' + res.statusCode);
  //console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    //console.log('BODY: ' + chunk);
    
   var result=JSON.parse(chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.end();
