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

    setGradient();
    setRadius();
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function setGradient() {
    var gradient = [
        'rgba(255, 151, 0, 0)',
        'rgba(254, 144, 11, 1)',
        'rgba(253, 137, 21, 1)',
        'rgba(252, 130, 32, 1)',
        'rgba(251, 123, 42, 1)',
        'rgba(250, 116, 53, 1)',
        'rgba(249, 109, 63, 1)',
        'rgba(249, 103, 74, 1)',
        'rgba(248, 96, 84, 1)',
        'rgba(247, 89, 94, 1)',
        'rgba(246, 82, 105, 1)',
        'rgba(245, 75, 115, 1)',
        'rgba(244, 68, 126, 1)',
        'rgba(243, 61, 136, 1)',
        'rgba(242, 54, 147, 1)',
        'rgba(241, 54, 123, 1)',
        'rgba(241, 54, 100, 1)',
        'rgba(240, 53, 77, 1)',
        'rgba(239, 53, 53, 1)'
    ];
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function setRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 10);
}

function setOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}