function initializeCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initialPosition);
    }
}

function updateCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updatePosition);
    }
}

function initialPosition(position) {
    updatePosition(position);
    updateMyLocationMarker();
}

function updatePosition(position) {
    currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };
}