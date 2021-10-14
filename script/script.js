// MODAL

const backdropEl = document.querySelector('.js-backdrop')

const modalFirstEl = document.querySelector('.js-modal-first')
const modalSecondEl = document.querySelector('.js-modal-second')

const openFirstModalButton = document.querySelector('.open-first-modal-button')
const openSecondModalButton = document.querySelector('.open-second-modal-button')

const closeFirstModalButton = document.querySelector('.close-first-modal-button')
const closeSecondModalButton = document.querySelector('.close-second-modal-button')

const bodyEl = document.querySelector('body')


openFirstModalButton.addEventListener('click', firstModalOpen)
openSecondModalButton.addEventListener('click', secondModalOpen)





function firstModalOpen() {
    backdropEl.classList.add('is-open')
    backdropEl.addEventListener('click', onModalBackdropClick)
    closeFirstModalButton.addEventListener('click', onCloseFirstModalBtnClick);
    window.addEventListener('keydown', onEscPress)
    bodyEl.classList.add('backdrop-open')
    modalFirstEl.classList.add('modal-open')
}
function secondModalOpen() {
    backdropEl.classList.add('is-open')
    backdropEl.addEventListener('click', onModalBackdropClick)
    closeSecondModalButton.addEventListener('click', onCloseSecondModalBtnClick);
    window.addEventListener('keydown', onEscPress)
    bodyEl.classList.add('backdrop-open')
    modalSecondEl.classList.add('modal-open')
}

function onCloseFirstModalBtnClick() {
    window.removeEventListener('keydown', onEscPress)
    backdropEl.classList.remove('is-open')
    bodyEl.classList.remove('backdrop-open')
    modalFirstEl.classList.remove('modal-open')
};

function onCloseSecondModalBtnClick() {
    window.removeEventListener('keydown', onEscPress)
    backdropEl.classList.remove('is-open')
    bodyEl.classList.remove('backdrop-open')
    modalSecondEl.classList.remove('modal-open')
};

function onModalBackdropClick(event) {
    if (event.currentTarget === event.target) {
        onCloseFirstModalBtnClick() || onCloseSecondModalBtnClick()
    }
};

function onEscPress(event) {
    const ESC_KEY_CODE = 'Escape'
    if (event.code === ESC_KEY_CODE) {
        onCloseFirstModalBtnClick() || onCloseSecondModalBtnClick()
    }
}