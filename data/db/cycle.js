var Vcursor=db.vehicles.find();
Vcursor.forEach(function(doc){
        var index=doc.Acc_Index;
        var Acursor=db.accidents.find({"Accident_Index":index});
        var accident=Acursor[0];
        print(JSON.stringify(accident.Accident_Index));
        if(accident.Latitude!=null&accident.Longitude!=null)
       {
        db.vehicles.update({_id:doc._id}, 
        { $set: {
         "Location_Easting_OSGR":accident.Location_Easting_OSGR,
         "Location_Northing_OSGR":accident.Location_Northing_OSGR,
         "Latitude":accident.Latitude,
         "Longitude":accident.Longitude,
        "Accident_Severity":accident.Accident_Severity,
        "Number_of_Vehicles":accident.Number_of_Vehicles,
        "Number_of_Casualties":accident.Number_of_Casualties,
        "Date": accident.Date,
        "Day_of_Week":accident.Day_of_Week,
        "Time": accident.Time,
        "Local_Authority_District": accident.Local_Authority_District,
        "Local_Authority_Highway": accident.Local_Authority_Highway,
        "Road_Type": accident.Road_Type,
        "Speed_limit": accident.Speed_limit,
        "Junction_Detail":accident.Junction_Detail,
        "Junction_Control":accident.Junction_Control,
        "Pedestrian_Crossing_Human_Control":accident.Pedestrian_Crossing_Human_Control,
        "Light_Conditions":accident.Light_Conditions,
        "Weather_Conditions":accident.Weather_Conditions,
        "Road_Surface_Conditions":accident.Road_Surface_Conditions,	
        "Special_Conditions_at_Site":accident.Special_Conditions_at_Site,
        "Carriageway_Hazards":accident.Carriageway_Hazards,
        "Urban_or_Rural_Area":accident.Urban_or_Rural_Area,
        "Did_Police_Officer_Attend_Scene_of_Accident":accident.Did_Police_Officer_Attend_Scene_of_Accident,
        loc :{ type : "Point" ,
            coordinates : [ accident.Longitude, accident.Latitude ]} 
          }});
        }
    });
 //db.vehicles.ensureIndex({loc:"2dsphere"});