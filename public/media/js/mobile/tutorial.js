function initializeTutorial() {
    $('.tutorial').show();
    $('.bxslider').bxSlider({
            controls: false,
            adaptiveHeight: false
        }
    );
    $('.close-tutorial-button').click(function () {
        $('.bxslider').fadeOut(1000)
    });
}