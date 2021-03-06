function initializeMap() {
    var mapOptions = {
        zoom: 2,
        center: new google.maps.LatLng(null, null),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    map.set('styles', [
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
                { color: '#48447c' },
                { weight: 1 }
            ]
        },
        {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
                { saturation: -100 },
                { invert_lightness: true }
            ]
        },
        {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
                { color: '#292750' }

            ]
        },
        {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [
                { visibility: 'off' }
            ]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
                { color: '#292750' }
            ]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
                { color: '#3c3767' }
            ]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [
                { visibility: 'off' }
            ]
        },
        {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [
                { color:'#82819b' }
            ]
        },
        {
            featureType: 'district',
            elementType: 'labels.text',
            stylers: [
                { color:'#82819b' }
            ]
        },
        {
            featureType: 'district',
            elementType: 'labels.text.stroke',
            stylers: [
                { visibility:'off' }
            ]
        },
        {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [
                { color: '#1849ad' }
            ]
        }
    ]);
}

function updateMyLocationMarker() {
    var myLatlng = new google.maps.LatLng(currentLocation.latitude, currentLocation.longitude);

    if (markerMyLocation == null) {
        markerMyLocation = new google.maps.Marker();
    }

    markerMyLocation.setPosition(myLatlng);
    markerMyLocation.setIcon('/media/images/mobile/me-pin.png');
    markerMyLocation.setMap(map);

    map.panTo(myLatlng);
    map.setZoom(15);
}