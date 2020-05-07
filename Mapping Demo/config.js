// MAPBOX API KEY
const API_KEY = "pk.eyJ1IjoiY2FybGFpciIsImEiOiJjazFja3JjYncwMTJlM2xteWl2czY4aWg0In0.gxpkCgiMg1Fo7voVsLNlHw";

// Add the map to the webpage by using a tile layer
var streets = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

// create a light map view
var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});

// create a dark map view
var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// create a pirates view
var pirate = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.pirates",
  accessToken: API_KEY
});

var marker = L.marker([34.9249, -81.0251], {
	title: "My First Marker is in Rock Hill, SC"
});

var marker2 = L.marker([34.9351, -80.9953], {
	title: "My Second Marker is at York Technical College"
});

var marker3 = L.marker([35.1065, -80.6939], {
	title: "My Third Marker is at Central Piedmont Community College"
});

var marker4 = L.marker([35.2271, -80.8431], {
	title: "My Fourth Marker is in Charlotte, NC"
});

marker.bindPopup("Hello from Rock Hill!!");
marker2.bindPopup("Hello from York Technical College!!");
marker3.bindPopup("Hello from CPCC!!");
marker3.bindPopup("Hello from Charlotte, NC!!");

// array that will all of the markers that we have created so far
var markers = [];
markers.push(marker);
markers.push(marker2);
markers.push(marker3);
markers.push(marker4);

// layer of markers
var markerLayer = L.layerGroup(markers);

// layers of maps (only one map layer can be shown at a time
var baseMaps = {
	Streets: streets,
	Light: light,
	Dark: dark,
	Pirate: pirate
};

// overlay using the layers of markers (will be able to be toggled on and off)
var overlayMaps = {
	Locations: markerLayer
}

// MAP that is centered on Rock Hill, SC
var myMap = L.map("map", {
	center: [34.9249, -81.0251],
	zoom: 10,
	layers: [streets, markerLayer]
});

// pass our map layers into the layer controllers
// add the layer controller to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);