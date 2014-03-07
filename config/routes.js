
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
app.get('/cyclespot',vehicles.cyclesafe);

app.get('/contact', function(req, res){
  res.render('contact', { title: 'Contact-SmartStreet',pageName:'Contact' });
});
app.get('/about', function(req, res){
  res.render('about', { title: 'About-SmartStreet',pageName:'About' });
});
}
