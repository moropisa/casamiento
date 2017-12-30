var mapFiesta = L.map('mapContainerFiesta').setView([-34.637084, -58.648875], 11);
var layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapFiesta);

// se pueden buscar otros aca
//http://leaflet-extras.github.io/leaflet-providers/preview/

var geojsonMarkerOptions = {
	radius: 8,
	fillColor: "#ff7800",
	color: "#000",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
};

   var marker;
   var grafitis;


$.getJSON("https://raw.githubusercontent.com/moropisa/casamiento/master/data.geojson",function(data){
	grafitis = L.geoJson(data, {pointToLayer: function(feature, latlng){
		//marker = L.marker(latlng);
		marker = L.circleMarker(latlng, geojsonMarkerOptions);
		marker.bindPopup(feature.properties.popUpContent);
		return marker
	}
}).addTo(mapFiesta)})


