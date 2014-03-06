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
var Vehicle=mongoose.model('Vehicle');
mongoose.connect(config.db);
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
 console.log("DB connected!");
 parsingcsv();
});

function parsingcsv(){
var i=0;
csv()
.from.path(__dirname+'/data/Vehicles0512.csv', { delimiter: ',', escape: '"' })
.to.stream(fs.createWriteStream(__dirname+'/Vehicle.txt'))
.on('record', function(row,index){
  if(index!=0)
 { 
  if(row[2]==1){
  new Vehcile({
    "Acc_Index": row[0],
	"Vehicle_Reference": row[1],
	"Vehicle_Type":row[2],
	"Towing_and_Articulation":row[3],
	"Vehicle_Manoeuvre":row[4],
    "Vehicle_Location-Restricted_Lane":row[5],
    "Junction_Location":row[6],
	"Skidding_and_Overturning":row[7],
	"Hit_Object_in_Carriageway":row[8],
	"Vehicle_Leaving_Carriageway":row[9],
	"Hit_Object_off_Carriageway":row[10],
	"1st_Point_of_Impact":row[11],
	"Was_Vehicle_Left_Hand_Drive":row[12],
	"Journey_Purpose_of_Driver":row[13],
	"Sex_of_Driver":row[14]
    }).save(function(err,vehiclenew)
	{
	    if(err) { console.log(err); return handleError(err);}
        console.log(vehcilenew.Acc_Index);
        i++;
    });
    }
   }
})
.on('close', function(i){
  console.log('Number of lines: '+i);
})
.on('error', function(error){
  console.log(error.message);
});
}