export class Banner {
  constructor({ selector, buttonSelector }) {
    this._banner = document.querySelector(selector);
    this._button = this._banner.querySelector(buttonSelector)
    this._handleHide = this.hide.bind(this);
  }

  setEventListeners() {
    this._button.addEventListener('click', this._handleHide)
  }

  show() {
    this._banner.classList.remove('hidden');
  }

  hide() {
    this._banner.classList.add('hidden');
  }
}
