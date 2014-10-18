<!DOCTYPE html>
<html>
<head>
    <meta charset = "utf-8">
    <title>Where's the party ?</title>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=visualization"></script>
    <script src='https://cdn.firebase.com/js/client/1.1.1/firebase.js'></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src = "/js/map.js"></script>
    <script src = "/js/location.js"></script>

    <link rel = "stylesheet" type = "text/css" href = "css/main.css" media = "screen"/>
</head>

<body>

<div class = "wrapper">
    <div class = "navigation">
        <a href = "index.html">Rate</a>
        <a href = "map.html">Map</a>
    </div>
    <div class = "row">
        <button id = "add-location">Awesome!</button>
    </div>
    <div class = "row">
        <div id = "current-location"></div>
    </div>
    <div class = "row">
        <div class = "debug"></div>
    </div>
</div>
<script>

    $(document).ready(function () {

        if (navigator.geolocation) {
            getLocation();
        }

        var myDataRef = new Firebase('https://glaring-torch-3644.firebaseio.com/');

        $('#add-location').click(function () {
            var latitude = $(this).data('latitude');
            var longitude = $(this).data('longitude');
            myDataRef.push({latitude: latitude, longitude: longitude, dateAdded: Date.now()});
            $('.debug').append("<div>latitude: " + latitude + " /longitude: " + longitude + "</div>");

        });

    });


</script>
</body>
</html>