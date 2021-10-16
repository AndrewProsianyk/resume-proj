const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    speed: 400,
    spaceBetween: 40,
    loop: true,
    slidesPerView: 3,

});