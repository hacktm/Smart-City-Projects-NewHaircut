var fireBaseRef = new Firebase('https://glaring-torch-3644.firebaseio.com/');
var currentLocation;
var heatMapPoints = new Array();
var map;
var heatMap;

// show loader

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


    //initializeMap();

    // 4. popup after awesome is hit


    // 5. set party markers


});

function hideLoader() {
    $('.loading-screen').delay(5000).fadeOut(500);

}