var map = L.map('mapContainer').setView([-34.6071854,-58.4336955], 15);
var layer = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'png'
}).addTo(map);

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
}).addTo(map)})
