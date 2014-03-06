//using node-csv to process the accesstogether data into mongodb;
var fs = require('fs');
var csv = require('csv');
var mongoose = require('mongoose');
var env=process.env.NODE_ENV||'development'
  , config=require('./config/config')[env];
var Schema = mongoose.Schema;
var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file)
});
var Accident=mongoose.model('Accident');
mongoose.connect(config.db);
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
 console.log("DB connected!");
 parsingcsv();
});

function parsingcsv(){
csv()
.from.path(__dirname+'/data/Accidents0512.csv', { delimiter: ',', escape: '"' })
.to.stream(fs.createWriteStream(__dirname+'/Accident.txt'))
.on('record', function(row,index){
  if(index!=0)
 {  
  //console.log('#'+index+' '+row[1]);
  new Accident({
    "Accident_Index": row[0],
	"Location_Easting_OSGR": row[1],
	"Location_Northing_OSGR": row[2],
	"Longitude": row[3],
	"Latitude": row[4],
	"Police_Force": row[5],
	"Accident_Severity":row[6],
    "Number_of_Vehicles":row[7],
	"Number_of_Casualties":row[8],
	"Date": row[9],
	"Day_of_Week":row[10],
	"Time": row[11],	
    "Local_Authority_District": row[12],
	"Local_Authority_Highway": row[13],
	"1st_Road_Class":	row[14],
    "1st_Road_Number": row[15],
	"Road_Type": row[16],
	"Speed_limit": row[17],
	"Junction_Detail":row[18],
	"Junction_Control":row[19],
	"2nd_Road_Class":row[20],
	"2nd_Road_Number":row[21],	
    "Pedestrian_CrossingHuman_Control":row[22],
	"Pedestrian_Crossing-Physical_Facilities":row[23],
	"Light_Conditions":row[24],
    "Weather_Conditions":row[25],
	"Road_Surface_Conditions":row[26],	
    "Special_Conditions_at_Site":row[27],
	"Carriageway_Hazards":row[28],
	"Urban_or_Rural_Area":row[29],
	"Did_Police_Officer_Attend_Scene_of_Accident":row[30],
	"LSOA_of_Accident_Location": row[31]
    }).save(function(err,accidentnew)
	{
	    if(err) { console.log(err); return handleError(err);}
        console.log(accidentnew.Accident_Index);
    });
}
})
.on('close', function(count){
  console.log('Number of lines: '+count);
})
.on('error', function(error){
  console.log(error.message);
});
}