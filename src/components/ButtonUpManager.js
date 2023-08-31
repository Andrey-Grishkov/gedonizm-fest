export default class ButtonUpManager {
  constructor(buttonSelector) {
    this.buttonSelector = buttonSelector;
  }

  show() {
    this.buttonSelector.classList.remove('button__hiden-button_state-hidden');
  }

  hide() {
    this.buttonSelector.classList.add('button__hiden-button_state-hidden');
  }

  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    this.buttonSelector.onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}