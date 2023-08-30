//const
export const buttonUp = document.querySelector('.button_type_up');

export const configPhotoGallery = {
  rootSelector: '.gallery',
  imageClass: 'gallery__image',
  sliderSelector: '.gallery__slider',
  sliderItemClass: 'gallery__slider-item',
  activeImageClass: 'gallery__image_mobile_visible',
  activeSliderItemClass: 'gallery__slider-item_active'
};

export const initialPhotoGalleryImages = [
  { src: '../images/gallery/image-park.svg', alt: 'Парк' },
  { src: '../images/gallery/image-girl.svg', alt: 'Девушка' },
  { src: '../images/gallery/image-coctails.svg', alt: 'Коктели' },
  { src: '../images/gallery/image-exhibition.svg', alt: 'Выставка' },
  { src: '../images/gallery/image-party.svg', alt: 'Вечеринка' }
];