function initializeHeatMap() {
    var postsRef = fireBaseRef;
    var postsQuery = postsRef.limit(200);

    heatMap = new google.maps.visualization.HeatmapLayer();


    postsQuery.on('value', function (records) {
            var heatMapPoints = [
                // Capitze Simulation
                new google.maps.LatLng(45.748192, 21.230400),
                new google.maps.LatLng(45.748237, 21.229971),
                new google.maps.LatLng(45.748274, 21.230185),
                new google.maps.LatLng(45.748080, 21.229949),
                new google.maps.LatLng(45.748237, 21.230110),

                new google.maps.LatLng(45.748312, 21.230261),
                new google.maps.LatLng(45.748259, 21.229982),


                new google.maps.LatLng(45.741263, 21.243883),
                new google.maps.LatLng(45.739608, 21.243604),
                new google.maps.LatLng(45.741263, 21.243883),
                new google.maps.LatLng(45.739608, 21.243604),
                new google.maps.LatLng(45.741263, 21.243883),
                new google.maps.LatLng(45.741273, 21.244463),
                new google.maps.LatLng(45.740203, 21.244399),
                new google.maps.LatLng(45.739394, 21.243820),
                new google.maps.LatLng(45.740203, 21.244399),

                new google.maps.LatLng(45.741113, 21.242896),
                new google.maps.LatLng(45.741113, 21.242896),
                new google.maps.LatLng(45.748194, 21.230389),
                new google.maps.LatLng(45.740203, 21.244399)


//



            ];
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
    hideLoader();
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
        'rgba(238, 48, 122, 1)',
        'rgba(244, 73, 98, 1)',
        'rgba(247, 93, 74, 1)',
        'rgba(249, 112, 49, 1)',
        'rgba(252, 132, 25, 1)'
    ];
    heatMap.set('gradient', heatMap.get('gradient') ? null : gradient);
}

function setHeatMapRadius() {
    heatMap.set('radius', heatMap.set('radius') ? null : 20);
}
