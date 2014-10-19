function initializeHeatMap() {
    var postsRef = fireBaseRef;
    var postsQuery = postsRef.limit(200);

    heatMapPoints = [
        new google.maps.LatLng(45.746062, 21.240365),
        new google.maps.LatLng(45.745920, 21.240080),
        new google.maps.LatLng(45.745527, 21.240359),
        new google.maps.LatLng(45.745759, 21.240338),
        new google.maps.LatLng(45.745901, 21.239968),
        new google.maps.LatLng(45.745428, 21.240268),
        new google.maps.LatLng(45.745582, 21.240401),
        new google.maps.LatLng(45.745502, 21.240463),
        new google.maps.LatLng(45.745562, 21.240629),
        new google.maps.LatLng(45.745458, 21.240653),
        new google.maps.LatLng(45.745277, 21.240365),
        new google.maps.LatLng(45.745594, 21.240194),
        new google.maps.LatLng(45.745668, 21.240612),
        new google.maps.LatLng(45.745547, 21.240553),
        new google.maps.LatLng(45.745766, 21.240083)
    ];

    postsQuery.on('value', function (records) {
            records.forEach(function (element) {
                coordinatesSet = element.val();
                heatMapPoints.push(new google.maps.LatLng(coordinatesSet.latitude, coordinatesSet.longitude));
            });

            var pointArray = new google.maps.MVCArray(heatMapPoints);

            heatMap = new google.maps.visualization.HeatmapLayer({
                data: pointArray
            });

            heatMap.setMap(map);
            setHeatMapGradient();
            setHeatMapRadius();
        }
    );
}

function setHeatMapGradient() {
    var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(106, 89, 171, 1)',
        'rgba(122, 84, 165, 1)',
        'rgba(138, 79, 159, 1)',
        'rgba(155, 74, 153, 1)',
        'rgba(172, 69, 147, 1)',
        'rgba(188, 64, 141, 1)',
        'rgba(205, 59, 134, 1)',
        'rgba(222, 53, 128, 1)',
        'rgba(238, 48, 122, 1)'
    ];
    heatMap.set('gradient', heatMap.get('gradient') ? null : gradient);
}

function setHeatMapRadius() {
    heatMap.set('radius', heatMap.set('radius') ? null : 20);
}
