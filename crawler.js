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

var query_string="package_search?q=london-transport"; //package_search?q=spending

var options = {
  hostname: 'smartstreets.sensetecnic.com'
  ,port: 80
  ,path: '/data/api/3/action/'+query_string
  ,method: 'Get'
  //,auth: API
};

var sensor_id="";
//http://smartstreets.sensetecnic.com/wotkit/api/sensors/
var options_sensor = {
  hostname: 'smartstreets.sensetecnic.com',
  port: 80,
  path: '/wotkit/api/sensors/'+sensor_id,
  method: 'Get',
  auth: {
  'x-api-key': API}
};
var req = http.request(options_sensor, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
   /*try{
    var chunkjson=JSON.parse(chunk);
    var result=chunkjson.result;
    console.log(result);
   }
   catch(err)
   {
    console.log(err);
   }*/
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.end();
