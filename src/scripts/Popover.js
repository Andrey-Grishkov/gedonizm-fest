export class Popover {
  constructor(popoverSelector, elementSelector, onSelect = () => {}) {
    this.onSelect = onSelect;
    console.log('popoverSelector - '+popoverSelector)
    this.popover = document.querySelector(popoverSelector);
    console.log('this.popover - '+this.popover);
    this.popoverList = this.popover.querySelector('.popover__list');
    this.button = document.querySelector(elementSelector);
    this.button.addEventListener('click', () => this._open());
    this._escClose = this._handleEscClose.bind(this);
    this._handleClose = this._close.bind(this);
  }

  setListItems(items = []) {
    items.forEach(name => {
      const item = document.createElement('li');
      item.className = 'popover__list-item';
      item.setAttribute('data-name', name);
      item.innerHTML = `
        ${name}
        <span class="popover__list-icon"></span>
      `;
      item.addEventListener('click', () => this._handleItemClick(name));
      this.popoverList.append(item);
    });
  }

  _handleItemClick(name) {
    this.onSelect(name);
  }

  _open() {
    this.popover.style.top = `${this.button.offsetHeight + this.button.offsetTop + 4}px`;
    this.popover.style.left = `${this.button.offsetLeft}px`;
    this.popover.classList.add('popover_visible');
    window.addEventListener('keydown', this._escClose);
    setTimeout(() => {
      document.body.addEventListener('click', this._handleClose);
    }, 10);
  }

  _close() {
    this.popover.classList.remove('popover_visible');
    window.removeEventListener('keydown', this._escClose);
    document.body.removeEventListener('click', this._handleClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this._close();
    }
  }
}

export class LocationPopover extends Popover {
  constructor(popoverSelector, elementSelector, onSelect) {
    super(popoverSelector, elementSelector,onSelect);
    this.selected = localStorage.getItem('selected-location');
  }

  setListItems(items, defaultSelected) {
    super.setListItems(items);
    const currentSelected = items.find(name => name === this.selected) ? this.selected : defaultSelected;
    this._setSelectedListItem(currentSelected);
    this.button.querySelector('.button__text').textContent = currentSelected
  }

  _setSelectedListItem(currentSelected) {
    Array.from(this.popoverList.children).forEach(item => {
      item.classList.remove('popover__list-item_selected');
      if (item.getAttribute('data-name') === currentSelected) {
        item.classList.add('popover__list-item_selected');
      }
    });
  }

  _handleItemClick(name) {
    super._handleItemClick(name);
    localStorage.setItem('selected-location', name);
    this.button.querySelector('.button__text').textContent = name;
    this._setSelectedListItem(name);
  }
}
