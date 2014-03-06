
/**
 * Module dependencies.
 */
var express = require('express');
var fs=require('fs');


// all environments
var env=process.env.NODE_ENV||'development'
  , config=require('./config/config')[env]
  , mongoose = require('mongoose');
//DB connect
mongoose.connect(config.db);
var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path+'/'+file)
});
var app = express();
// express settings
require('./config/express')(app, config);
// Bootstrap routes
require('./config/routes')(app);
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express server listening on port ' + port);
// expose app
exports = module.exports = app