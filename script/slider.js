const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 400,
    spaceBetween: 40,
    loop: true,
    slidesPerView: 3,
});