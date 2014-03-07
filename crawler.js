/*
*Query the CKAN API in  https://smartstreets.sensetecnic.com/data/api/3/action/
*/
var http = require("http");
var https = require("https");
var fs = require('fs');
//var csv = require('csv');
//var async=require('async');

var API="6c05da93-c769-4781-a5cf-40361a8cecfe";
var type="temperature";
//http://smartstreets.sensetecnic.com/wotkit/api/sensors/
var options_sensor = {
  hostname: 'smartstreets.sensetecnic.com',
  port: 80,
  path: '/wotkit/api/sensors?text='+type,
  method: 'Get',
  auth: {
  'x-api-key': API}
};
var req = http.request(options_sensor, function(res) {
  res.on('data', function (chunk) {
    var chunkjson=JSON.parse(chunk);
    
    for(var i=0;i<chunkjson.length;i++)
    {
      var obj=chunkjson[i];
      console.log(obj);
    }
  /* try{
    var chunkjson=JSON.parse(chunk);
    console.log(chunkjson.length);
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
