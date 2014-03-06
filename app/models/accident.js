/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , Schema = mongoose.Schema;

var AccidentSchema = new Schema({
	"Accident_Index": String,
	"Location_Easting_OSGR": Number,
	"Location_Northing_OSGR": Number,
	"Longitude": Number,
	"Latitude": Number,
	"Police_Force": Number,
	"Accident_Severity":Number,
    "Number_of_Vehicles":Number,
	"Number_of_Casualties":Number,
	"Date": String,
	"Day_of_Week":Number,
	"Time": String,	
    "Local_Authority_District": Number,
	"Local_Authority_Highway": String,
	"1st_Road_Class":	Number,
    "1st_Road_Number": Number,
	"Road_Type": Number,
	"Speed_limit": Number,
	"Junction_Detail":Number,
	"Junction_Control":Number,
	"2nd_Road_Class":Number,
	"2nd_Road_Number":Number,	
    "Pedestrian_CrossingHuman_Control":Number,
	"Pedestrian_Crossing-Physical_Facilities":Number,
	"Light_Conditions":Number,	
    "Weather_Conditions":Number,
	"Road_Surface_Conditions":Number,	
    "Special_Conditions_at_Site":Number,
	"Carriageway_Hazards":Number,
	"Urban_or_Rural_Area":Number,
	"Did_Police_Officer_Attend_Scene_of_Accident":Number,
	"LSOA_of_Accident_Location": String
    }
 );
mongoose.model('Accident', AccidentSchema);