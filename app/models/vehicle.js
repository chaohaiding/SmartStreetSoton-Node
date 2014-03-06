/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , env = process.env.NODE_ENV || 'development'
  , Schema = mongoose.Schema;

var VehicleSchema = new Schema({
    "Acc_Index": String,
	"Vehicle_Reference": Number,
	"Vehicle_Type":Number,
	"Towing_and_Articulation":Number,
	"Vehicle_Manoeuvre":Number,	
    "Vehicle_Location-Restricted_Lane":Number,	
    "Junction_Location":Number,
	"Skidding_and_Overturning":Number,
	"Hit_Object_in_Carriageway":Number,
	"Vehicle_Leaving_Carriageway":Number,
	"Hit_Object_off_Carriageway":Number,
	"1st_Point_of_Impact":Number,
	"Was_Vehicle_Left_Hand_Drive":Number,
	"Journey_Purpose_of_Driver":Number,
	"Sex_of_Driver":Number,
	"Age_Band_of_Driver":Number,
	"Engine_Capacity_CC":Number,
	"Propulsion_Code":Number,
	"Age_of_Vehicle":Number,
	"Driver_IMD_Decile":Number,
	"Driver_Home_Area_Type":Number
    }
 );
mongoose.model('Vehicle', VehicleSchema);