document.addEventListener("DOMContentLoaded", function() {

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {
            delay: 3000, // time between slides (in ms)
            disableOnInteraction: true // keep autoplay after clicking arrows
        },
        speed: 800 // smooth slide transition
    });

});
