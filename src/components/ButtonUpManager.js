export default class ButtonUpManager {
  constructor(buttonSelector) {
    this.buttonSelector = buttonSelector;
  }

  show() {
    this.buttonSelector.classList.remove('button_state_hidden');
  }

  hide() {
    this.buttonSelector.classList.add('button_state_hidden');
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