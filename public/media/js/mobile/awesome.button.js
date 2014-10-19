function initializeAwesomeButton() {
    var myDataRef = fireBaseRef;

    $('#button-awesome').click(function () {
        myDataRef.push({latitude: currentLocation.latitude, longitude: currentLocation.longitude, dateAdded: Date.now()});
    });
}