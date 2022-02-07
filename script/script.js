// MODAL

const backdropEl = document.querySelector('.js-backdrop')

const modalFirstEl = document.querySelector('.js-modal-first')
const modalSecondEl = document.querySelector('.js-modal-second')

const openFirstModalButton = document.querySelector('.open-first-modal-button')
const openSecondModalButton = document.querySelector('.open-second-modal-button')

const closeFirstModalButton = document.querySelector('.close-first-modal-button')
const closeSecondModalButton = document.querySelector('.close-second-modal-button')

const bodyEl = document.querySelector('body')

const openOverlayBtn = document.querySelector('.open-overlay-btn')
const closeOverlayBtn = document.querySelector('.close-overlay-btn')
const overlayEl = document.querySelector('.js-card-overlay')

const sliderContainer = document.querySelector('.swiper')

sliderContainer.addEventListener('click', onSliderClick)
openFirstModalButton.addEventListener('click', firstModalOpen)
openSecondModalButton.addEventListener('click', secondModalOpen)


function firstModalOpen() {
    backdropEl.classList.add('is-open')
    backdropEl.addEventListener('click', onModalBackdropClick)
    closeFirstModalButton.addEventListener('click', onCloseModalBtnClick);
    window.addEventListener('keydown', onEscPress)
    bodyEl.classList.add('backdrop-open')
    modalFirstEl.classList.add('modal-open')
}
function secondModalOpen() {
    backdropEl.classList.add('is-open')
    backdropEl.addEventListener('click', onModalBackdropClick)
    closeSecondModalButton.addEventListener('click', onCloseModalBtnClick);
    window.addEventListener('keydown', onEscPress)
    bodyEl.classList.add('backdrop-open')
    modalSecondEl.classList.add('modal-open')
}

function onCloseModalBtnClick() {
    window.removeEventListener('keydown', onEscPress)
    backdropEl.classList.remove('is-open')
    bodyEl.classList.remove('backdrop-open')
    modalFirstEl.classList.remove('modal-open')
};

function onModalBackdropClick(event) {
    if (event.currentTarget === event.target) {
        onCloseModalBtnClick()
    }
};

function onEscPress(event) {
    const ESC_KEY_CODE = 'Escape'
    if (event.code === ESC_KEY_CODE) {
        onCloseModalBtnClick()
    }
}

function onSliderClick(event) {
    if (!event.target.classList.contains('slide-btn')) {
        return
    };
    event.preventDefault();
    const sliderCardEl = event.target.closest('.slider-card').querySelector('.card-overlay')
    sliderCardEl.classList.add('open')

    const currentCloseOverlayBtn = sliderCardEl.querySelector('.close-overlay-btn')
    currentCloseOverlayBtn.addEventListener('click', () => {
        sliderCardEl.classList.remove('open')
    })
};