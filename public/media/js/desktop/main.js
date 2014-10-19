var fireBaseRef = new Firebase('https://radiant-torch-4202.firebaseio.com/');
var currentLocation;
var markerMyLocation = null;
var map;
var heatMap;

$(document).ready(function () {
    initializeMap();
    initializeHeatMap();
    initializeCurrentLocation();
});