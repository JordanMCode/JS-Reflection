

// Pushy Functions


$('.menu').click(function () {
    $(this).toggleClass('is-active');
    // $('.body').toggleClass('open');
    $('#scrollbar').toggleClass('sb-class');
    $('#stop-scroll').toggleClass('stop-scroll');
})



$('#stop-scroll').click(function () {
    $(this).toggleClass('stop-scroll');
    $('.menu').toggleClass('is-active');
    // $('.body').toggleClass('open');
    $('#scrollbar').toggleClass('sb-class');
})




$('.pushy-content').click(function () {
    $(this).toggleClass('is-active');
    // $('.body').toggleClass('open');
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



let header_Height = 100

let scrollHeight = 0
window.addEventListener("scroll", () => {
    if (window.scrollY > header_Height) {
        if (window.scrollY < scrollHeight) {
            headerElement.classList.remove("sticky_header")

        } else {
            headerElement.classList.add("sticky_header")
        }

        scrollHeight = window.scrollY
    }
    if (window.scrollY < header_Height) {
        headerElement.classList.remove("sticky_header")
    }
});