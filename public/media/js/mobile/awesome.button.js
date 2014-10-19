function initializeAwesomeButton() {
    var myDataRef = fireBaseRef;

    $('#button-awesome').click(function () {
        myDataRef.push({latitude: currentLocation.latitude, longitude: currentLocation.longitude, dateAdded: Date.now()});
        $(".popup-window").show();
        $(".refresh-btn").hide();
        $(this).hide()
    });
    $('.close-popup-window').click(function() {
        $(".popup-window").hide();
        $(".refresh-btn").show();
        $('#button-awesome').show()
    });
}