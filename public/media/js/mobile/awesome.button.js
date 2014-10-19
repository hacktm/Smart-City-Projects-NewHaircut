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
    },
    {
        message: 'Everywhere is within walking distance if you have the time.',
        author: 'Steven Wright'
    },
    {
        message: 'I\'m an idealist. I don\'t know where I\'m going, but I\'m on my way.',
        author: 'Carl Sandburg'
    },
    {
        message: 'Laugh and the world laughs with you, snore and you sleep alone.',
        author: 'Anthony Burgess'
    },
    {
        message: 'Is a hippopotamus a hippopotamus, or just a really cool Opotamus?',
        author: 'Mitch Hedberg'
    },
    {
        message: 'I distrust camels, and anyone else who can go a week without a drink.',
        author: 'Joe E. Lewis'
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