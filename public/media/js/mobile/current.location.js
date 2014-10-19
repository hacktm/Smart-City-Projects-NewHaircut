function initializeCurrentLocation() {
    getCurrentLocation();
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position);
    }
}

function position(position) {
    currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };

    setCurrentPostion();
}