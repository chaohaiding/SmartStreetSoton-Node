function markerrender(center,zoomview,myVehicle){
 var map = L.map('map').setView(center, zoomview);
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {maxZoom:19,attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  L.tileLayer('http://{s}.tile.cloudmade.com/70146506bc514228adc1756788c730d3/997/256/{z}/{x}/{y}.png', {
            maxZoom: 18, attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Imagery &copy; <a href="http://cloudmade.com">CloudMade</a>'}).addTo(map);
 var markers=new L.markerClusterGroup();
 var Marker = L.AwesomeMarkers.icon({
         prefix:'fa',
         markerColor: 'blue',
         iconColor: 'white',
         spin: false
          });
   for(var i in myVehicle)
   {
       var vehicle=myVehicle[i];
       if(vehicle.Accident_Severity==1)
       {
         Marker=L.AwesomeMarkers.icon({
            icon:"plus-circle",
            prefix:'fa',
            markerColor: 'red',
            iconColor: 'white',
            spin: false
       });
       }
       else if(vehicle.Accident_Severity==2)
       {
        Marker=L.AwesomeMarkers.icon({
            icon:"frown-o",
            prefix:'fa',
            markerColor: 'orange',
            iconColor: 'white',
            spin: false
       });
       }
       else
       {
        Marker=L.AwesomeMarkers.icon({
            icon:"meh-o",
            prefix:'fa',
            markerColor: 'blue',
            iconColor: 'white',
            spin: false
       });
       }
       var marker=L.marker([vehicle.Latitude, vehicle.Longitude],{icon:Marker}).bindPopup('Date:'+vehicle.Date+'. <br /> Time:'+vehicle.Time+'. <br /> Accident Severity:'+vehicle.Accident_Severity);
       markers.addLayer(marker);
    }
     map.addLayer(markers);
    
}


