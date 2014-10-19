function initializeHeatMap() {
    var postsRef = fireBaseRef;
    var postsQuery = postsRef.limit(200);

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
        }
    );
}

function setHeatMapGradient() {
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
    heatMap.set('gradient', heatMap.get('gradient') ? null : gradient);
}

