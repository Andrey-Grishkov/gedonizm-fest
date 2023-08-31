export class PhotoGallery {
  constructor({
    rootSelector,
    imageClass,
    sliderSelector,
    sliderItemClass,
    activeImageClass,
    activeSliderItemClass
  }) {
    this._rootElement = document.querySelector(rootSelector);
    this._sliderElement = document.querySelector(sliderSelector);
    this._classes = { imageClass, sliderItemClass, activeImageClass, activeSliderItemClass }
    this._handleSliderItemClick = this._changeActiveImage.bind(this);
  }

  setImages(images) {
    this.images = images;
    this.activeImage = 0;
    images.forEach(({ src, alt }, index) => {
      this._addImageElement(src, alt, index);
      this._addSliderItemElement(index);
    });
  }

  _addImageElement(src, alt, index) {
    const image = document.createElement('img');
    image.classList.add(this._classes.imageClass);
    image.classList.add(`${this._classes.imageClass}${index + 1}`);
    if (index === this.activeImage) {
      image.classList.add(this._classes.activeImageClass);
    }
    image.alt = alt;
    image.src = src;
    this._rootElement.prepend(image);
  }

  _addSliderItemElement(index) {
    const item = document.createElement('div');
    item.classList.add(this._classes.sliderItemClass);
    item.setAttribute('data-index', index);
    if (index === this.activeImage) {
      item.classList.add(this._classes.activeSliderItemClass);
    }
    item.addEventListener('click', this._handleSliderItemClick);
    this._sliderElement.append(item);
  }

  _changeActiveImage(event) {
    const item = event.target;
    const index = Number(item.getAttribute('data-index'));
    if (index !== this.activeImage) {
      const currentActiveImage = this._rootElement.querySelector(`.${this._classes.activeImageClass}`);
      if (currentActiveImage) {
        currentActiveImage.classList.remove(this._classes.activeImageClass);
      }
      const newActiveImage = this._rootElement.querySelector(`.${this._classes.imageClass}${index + 1}`);
      if (newActiveImage) {
        newActiveImage.classList.add(this._classes.activeImageClass);
      }

      const currentSliderItem = this._sliderElement.querySelector(`.${this._classes.activeSliderItemClass}`);
      if (currentSliderItem) {
        currentSliderItem.classList.remove(this._classes.activeSliderItemClass);
      }

      item.classList.add(this._classes.activeSliderItemClass);
      this.activeImage = index;
    }
  }
}