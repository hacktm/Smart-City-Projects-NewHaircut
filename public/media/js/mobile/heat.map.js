var map, pointArray, heatmap;

window.coordinates = [];

function initialize() {
    // get current coordinates

    // get parties
    var postsRef = new Firebase("https://glaring-torch-3644.firebaseio.com/");
    var postsQuery = postsRef.limit(200);

    postsQuery.on('value', function (records) {
            records.forEach(function (element) {
                coordinatesSet = element.val();
                coordinates.push(new google.maps.LatLng(coordinatesSet.latitude, coordinatesSet.longitude));
            });

            generateMap();
        }
    );
}

function generateMap() {

    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng('45.755539', '21.237499'),
        mapTypeId: google.maps.MapTypeId.ROAD
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

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
                { color: '#292750' },

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
                { saturation: -100 },
                { invert_lightness: true }
            ]
        },
        {
            featureType: 'district',
            elementType: 'labels',
            stylers: [
                { saturation: -100 },
                { invert_lightness: true }
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

    pointArray = new google.maps.MVCArray(coordinates);

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray
    });

    heatmap.setMap(map);

    setGradient(heatmap);
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function setGradient(map) {
    var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function setRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 20);
}

function setOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}