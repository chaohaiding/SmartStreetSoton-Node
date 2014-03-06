var edge = require('edge');


/*
var retrieve = edge.func('py','./python/retrieve.py');

hello(54.7833333333,-127.177222222, function (error, result) {
    if (error) throw error;
    console.log(result);
});*/

/*var hello = edge.func('py', 'hello.py');

hello('Node.js', function (error, result) {
    if (error) throw error;
    console.log(result);
});*/
module.exports = function (app) {
  // user routes
  var users = require('../app/controllers/users')
  app.get('/login', users.login)
  app.get('/signup', users.signup)
  app.get('/logout', users.logout)
  app.post('/users', users.create)
  app.get('/users/:userId', users.show)
  app.param('userId', users.user)

// home route
app.get('/', function(req, res){
  res.render('index', { title: 'Home-SmartStreet'});
});
app.get('/home',function(req, res){
  res.render('index', { title: 'Home-SmartStreet', pageName:'Home'});
});
app.get('/map',function(req, res){
 
  res.render('map', { title: 'Map-SmartStreet', pageName:'Map'});
  
  
});

app.get('/contact', function(req, res){
  res.render('contact', { title: 'Contact-SmartStreet',pageName:'Contact' });
});
app.get('/about', function(req, res){
  res.render('about', { title: 'About-SmartStreet',pageName:'About' });
});
}
