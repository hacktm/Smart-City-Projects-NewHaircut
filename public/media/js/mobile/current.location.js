function initializeCurrentLocation() {
    $('.refresh-btn').hide();
    $('.refresh-btn-loading').show();
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
    $('.refresh-btn-loading').fadeOut(600, function() {
        $('.refresh-btn').show();
    });
}

function updatePosition(position) {
    currentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };
}