var fireBaseRef = new Firebase('https://radiant-torch-4202.firebaseio.com/');
var currentLocation;
var markerMyLocation = null;
var map;
var heatMap;

$(document).ready(function () {

    if (!window.location.hash) {
        initializeTutorial();
    }

    initializeMap();
    initializeHeatMap();
    initializeCurrentLocation();

    initializeAwesomeButton();

    $('#map-canvas').mousedown(function () {
        $('#button-awesome').css('opacity', '0.4');
        $('.refresh-btn').css('opacity', '0.4');
    });

    $('#map-canvas').mouseup(function () {
        $('#button-awesome').css('opacity', '1.0');
        $('.refresh-btn').css('opacity', '1.0');

    });

});

function hideLoader() {
    $('#button-awesome').show();
    $('.refresh-btn-loading').show();
    $('.loading-screen').delay(2000).fadeOut(500);
}
