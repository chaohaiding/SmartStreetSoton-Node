/*var edge = require('edge');

var retrieve = edge.func('py','./python/retrieve.py');

hello(54.7833333333,-127.177222222, function (error, result) {
    if (error) throw error;
    console.log(result);
});
var hello = edge.func('py', 'hello.py');

hello('Node.js', function (error, result) {
    if (error) throw error;
    console.log(result);
});*/

module.exports = function (app) {
// home route
app.get('/', function(req, res){
  res.render('index', { title: 'Home-SmartStreet'});
});
app.get('/home',function(req, res){
  res.render('index', { title: 'Home-SmartStreet', pageName:'Home'});
});

var vehicles=require('../app/controllers/vehicles')
app.get('/accidentmap',vehicles.index);
app.get('/cyclespot',function(req, res){
  res.render('safemap', { title: 'SafeMap-SmartStreet',pageName:'Demon' });
});
app.get('/contact', function(req, res){
  res.render('contact', { title: 'Contact-SmartStreet',pageName:'Contact' });
});
app.get('/about', function(req, res){
  res.render('about', { title: 'About-SmartStreet',pageName:'About' });
});
}
