var fireBaseRef = new Firebase('https://radiant-torch-4202.firebaseio.com/');
var currentLocation;
var markerMyLocation = null;
var map;
var heatMap;

$(document).ready(function () {

    // 1. loading screen (get location!!!!! + get current parties coordinates)
    initializeMap();
    initializeHeatMap();
    initializeCurrentLocation();

    // 2. tutorial slider
    if (!window.location.hash) {
        initializeTutorial();
    }

    // 3. main screen (current location + button awesome)
    initializeAwesomeButton();




    // 4. fancy stuff

    $('#map-canvas').mousedown(function(){
            $('#button-awesome').css('opacity','0.4');
        $('.refresh-btn').css('opacity','0.4');
    });

    $('#map-canvas').mouseup(function(){
        $('#button-awesome').css('opacity','1.0');
        $('.refresh-btn').css('opacity','1.0');

    });

});

function hideLoader() {
    $('.loading-screen').delay(5000).fadeOut(500);
}
