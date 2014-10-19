function initializeCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initialPosition);
    }
}

function initialPosition(position) {
    updatePosition(position);
    updateMapCenter();
}

function updatePosition(position) {
    currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };
}