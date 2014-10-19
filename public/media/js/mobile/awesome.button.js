var funnyQuoutes = [
    {
        message: 'A day without sunshine is like, you know, night.',
        author: 'Steve Martin'
    },
    {
        message: 'You\'re only as good as your last haircut.',
        author: 'Fran Lebowitz'
    },
    {
        message: 'Law of Logical Argument – Anything is possible if you don’t know what you are talking about.',
        author: ''
    },
    {
        message: 'Don\'t cry because it\'s over, smile because it happened.',
        author: 'Dr. Seuss'
    },
    {
        message: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wilde'
    }
];

function initializeAwesomeButton() {
    var myDataRef = fireBaseRef;

    $('#button-awesome').click(function () {
        myDataRef.push({latitude: currentLocation.latitude, longitude: currentLocation.longitude, dateAdded: Date.now()});

        var randomQuoute = funnyQuoutes[Math.floor(Math.random() * funnyQuoutes.length)];
        $('.quoute-message').text(randomQuoute.message);
        $('.quoute-author').text(randomQuoute.author);

        $(".popup-window").show();
        $(".refresh-btn").hide();
        $(this).hide();
    });
    $('.close-popup-window').click(function() {
        $(".popup-window").hide();
        $(".refresh-btn").show();
        $('#button-awesome').show();
    });
}