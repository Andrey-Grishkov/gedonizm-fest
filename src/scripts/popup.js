export default class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
    }

    open() {
        this._popup.classList.add('popup_opened');
    }

    close() {
        this._popup.classList.remove('popup_opened');
    }
    setEventListeners() {
        this._popup.querySelector('.popup__content-card_close-icon').addEventListener('click', ()=> {
            this.close();
        }) 
    }
}