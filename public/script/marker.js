function markerrender(center,zoomview,mynodes){
 var fa_type_match={
 "bicycle_rental":"",
 "boatyard":"",
 "bus_station":"",
 "bus_stop":"",
 "car_rental":"",
 "car_sharing":"",
 "ferry_terminal":"anchor",
 "fuel":"",
 "halt":"",
 "parking":"",
 "platform":"",
 "station":"exchange", //train
 "subway_entrance":"sign-in",
 "terminal":"plane",//airport_terminal
 "tram_stop":"",
 "cable_car":"",
 
 "cafe":"coffee",
 "bar":"beer",
 "drinking_water":"",
 "fast_food":"",
 "pub":"glass",
 "restaurant":"",
 "biergarten":"",
 "drinking_water":"tint",
 "fast_food":"cutlery",
 "pub":"glass",
 "restaurant":"cutlery",
 "biergarten":"beer",
 "theatre":"",
 "zoo":"",
 "brothel":"",
 "community_center":"comments",
 "stripclub":"",
 "playground":"",
 
 "cinema":"film",
 "gallery":"camera-retro",
 "nightclub":"",
 "atm":"credit-card",
 "bureau_de_change":"euro",
 "bank":"money",
 "post_office":"envelope",
 "college":"book",
 
 
 
 "law":"legal",
 "pharmacy":"plus-square",
 "supermarket":"shopping-cart",


 "convenience":"shopping-cart",

 "fast_food":"",
 "car_repair":"wrench",
 "dentist":""

 };
 var map = L.map('map').setView(center, zoomview);
 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {maxZoom:19,attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
 var markers=new L.markerClusterGroup();
 var Marker = L.AwesomeMarkers.icon({
     prefix:'fa',
     markerColor: 'blue',
     iconColor: 'white',
     spin: false
      });
  var greenMarker = L.AwesomeMarkers.icon({
     icon: 'coffee',
     prefix:'fa',
     markerColor: 'green',
     iconColor: 'white',
     spin: false
      });
  for(var i in mynodes)
     {
       var node=mynodes[i];
       var type=node.type.wheelmap_identifier;
       Marker=L.AwesomeMarkers.icon({
            icon:fa_type_match[type],
            prefix:'fa',
            markerColor: 'blue',
            iconColor: 'white',
            spin: false
      });
       var marker=L.marker([node.lat, node.lon],{icon:Marker}).bindPopup('Name: <a href=/data/nodes/'+node.id+'>'+node.name+'</a>.<br /> Type:'+ node.type.wheelmap_identifier+'.<br /> Accessibility:'+node.accessibility);
       markers.addLayer(marker);
     }
     map.addLayer(markers);

}


