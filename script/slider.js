const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    speed: 400,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 3,

            spaceBetween: 25,
        },
        1440: {
            slidesPerView: 3.3,
        }
    }

});
