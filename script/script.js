window.addEventListener('DOMContentLoaded', (event) => {
    $('nav.navbar#my-nav').css("background-color", "transparent");
    $('nav.navbar#my-nav li a').css("color", "white");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            console.log('in here');
            $('nav.navbar#my-nav').css("background-color", "white");
            $('nav.navbar#my-nav li a').css("color", "black");
        } else {
            $('nav.navbar#my-nav').css("background-color", "transparent");
            $('nav.navbar#my-nav li a').css("color", "white");
        }
    });
}); 