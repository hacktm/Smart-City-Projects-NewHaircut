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

    // 4. popup after awesome is hit


    // 5. set party markers


    lockOrientation();
});

function hideLoader() {
    $('.loading-screen').delay(5000).fadeOut(500);
}

function lockOrientation() {
    var lockOrientation = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;
    lockOrientation('portrait');
}