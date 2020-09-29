

// Pushy Functions


$('.menu').click(function () {
    $(this).toggleClass('is-active');
    $('.body').toggleClass('open');
    $('#scrollbar').toggleClass('sb-class');
    $('#stop-scroll').toggleClass('stop-scroll');
})



$('#stop-scroll').click(function () {
    $(this).toggleClass('stop-scroll');
    $('.menu').toggleClass('is-active');
    $('.body').toggleClass('open');
    $('#scrollbar').toggleClass('sb-class');
})



$('.pushy-content').click(function () {
    $(this).toggleClass('is-active');
    $('.body').toggleClass('open');
    $('#scrollbar').toggleClass('sb-class');
    $('#stop-scroll').toggleClass('stop-scroll');
})


// Slick Carousel

$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,
        appenddots: $()
    });
});