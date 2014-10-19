function initializeTutorial() {
    $('.tutorial').show();
    $('.bxslider').bxSlider({
            controls: false,
            adaptiveHeight: false
        }
    );
    $('.close-tutorial-button').click(function () {
        $('.tutorial').fadeOut(1000);
    });
}