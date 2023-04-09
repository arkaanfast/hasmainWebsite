window.addEventListener('DOMContentLoaded', (event) => {
    var newWindowWidth = $(window).width();
    $('nav.navbar#my-nav').css("background-color", "transparent");
    $('nav.navbar#my-nav li a').css("color", "white");
    $('.navbar-nav .active a').css("color", "#f1ab3d");
    $('#nav-dropdown li a').css("color", "black");
    $('nav.navbar.navbar-toggler').css("color", "white");
    if (newWindowWidth < 768) {
        $('.navbar-collapse').css("background-color", "black");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            console.log('in here');
            $('nav.navbar#my-nav').css("background-color", "white");
            $('nav.navbar#my-nav li a').css("color", "black");
            $('.navbar-nav .active a').css("color", "#f1ab3d");
            $('#nav-dropdown li a').css("color", "black");
            $('nav.navbar.navbar-toggler').css("color", "white");
            if (newWindowWidth < 768) {
                $('.navbar-collapse').css("background-color", "white");
            }
        } else {
            $('nav.navbar#my-nav').css("background-color", "transparent");
            $('nav.navbar#my-nav li a').css("color", "white");
            $('.navbar-nav .active a').css("color", "#f1ab3d");
            $('#nav-dropdown li a').css("color", "black");
            $('nav.navbar.navbar-toggler').css("color", "white");
            $('nav.navbar#my-nav').css("background-color", "transparent");
            $('#nav-dropdown li a').css("color", "black");
            if (newWindowWidth < 768) {
                $('.navbar-collapse').css("background-color", "black");
            } else {
                $('.navbar-collapse').css("background-color", "transparent");
            }
        }
    });
});

$('#myCarousel').on('slide', function () {
    $('.carousel-caption').fadeOut(300);
})
$('#myCarousel').on('slid', function () {
    $('.carousel-caption').fadeIn(600);
})