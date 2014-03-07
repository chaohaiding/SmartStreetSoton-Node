
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
        pageName:'Map'
      });
    });
  });
}
