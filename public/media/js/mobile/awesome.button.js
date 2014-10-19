function initializeAwesomeButton() {
    var myDataRef = fireBaseRef;

    $('#button-awesome').click(function () {
        myDataRef.push({latitude: currentLocation.latitude, longitude: currentLocation.longitude, dateAdded: Date.now()});
        $(".popup-window").show();
        $(".refresh-btn").hide();
        $(this).text('THANK YOU!');
        $(this).css('box-shadow','none')
    });
    $('.close-popup-window').click(function() {
        $(".popup-window").hide();
        $(".refresh-btn").show();
        $('#button-awesome').text('AWESOME');
        $('#button-awesome').css('box-shadow','');
    });
}