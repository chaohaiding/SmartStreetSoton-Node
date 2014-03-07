
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , async = require('async')
  , Vehicle = mongoose.model('Vehicle')
  , _ = require('underscore')
  , url = require('url');


/**
 * Find Node  by id
 */

exports.Vehicle  = function(req, res, next, id){

  Vehicle.load(id, function (err, Vehicle) {
    if (err) return next(err)
    if (!Vehicle) return next(new Error('Failed to load Vehicle:' + id))
    req.Vehicle = Vehicle
    next()
  })
}


/**
 * View a Vehicle
 */
exports.show = function(req, res){
    res.render('show', {
    Vehicle: req.Vehicle
  });  
}
  
/**
 * List of Nodes
 */

exports.index = function(req, res){
  var options = {
    option:"listbyDate"
  }
  Vehicle.list(options, function(err, Vehicles) {
    if (err){ console.log(err.message); return res.render('500')}
   Vehicle.count().exec(function (err, count) {
      res.render('map', {
        Vehicles: JSON.stringify(Vehicles),
        pageName:'Demon'
      });
    });
  });
}

/*
exports.cyclesafe = function(req, res){

var API="6c05da93-c769-4781-a5cf-40361a8cecfe";


  var options = {
    option:"listbyDate"
  }
  Vehicle.list(options, function(err, Vehicles) {
    if (err){ console.log(err.message); return res.render('500')}
   Vehicle.count().exec(function (err, count) {
      res.render('map', {
        Vehicles: JSON.stringify(Vehicles),
        pageName:'Map'
      });
    });
  });
}

function getNearestSensorOLD(exclude,type){
 var distance = 999999999999;
 var sensorID=0;
 
 var options_sensor = {
  hostname: 'smartstreets.sensetecnic.com',
  port: 80,
  path: '/wotkit/api/sensors?text='+type,
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
    try{
    var chunkjson=JSON.parse(chunk);
    
    }
   catch(err)
   {
    console.log(err);
   }
   
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.end();

 var tempData =
}
        d
        sensorID = 0
        tempData = json.load(urllib2.urlopen('https://smartstreets.sensetecnic.com/wotkit/api/sensors?text=%s' % type))
        for item in tempData:
            if not self.isIdBanned(exclude,item["id"]):
                sLat = item["latitude"]
                sLon = item["longitude"]
                sDist = self.calculateDistance(sLat, sLon)
                if sDist<distance:
                    distance = sDist
                    sensorID = item["id"]
                
        return [sensorID,distance]
        
        */