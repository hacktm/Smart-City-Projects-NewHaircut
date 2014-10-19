function initializeHeatMap() {
    var postsRef = fireBaseRef;
    var postsQuery = postsRef.limit(200);

    heatMap = new google.maps.visualization.HeatmapLayer();

    postsQuery.on('value', function (records) {
            var heatMapPoints = new Array();
            records.forEach(function (element) {
                coordinatesSet = element.val();
                heatMapPoints.push(new google.maps.LatLng(coordinatesSet.latitude, coordinatesSet.longitude));
            });

            var pointArray = new google.maps.MVCArray(heatMapPoints);
            heatMap.setData(pointArray);
        }
    );

    heatMap.setMap(map);
    setHeatMapGradient();
    setHeatMapRadius();
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
