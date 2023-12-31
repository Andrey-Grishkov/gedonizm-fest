//const

export const buttonCardLikes = document.querySelector('.button-likeCards');
export const buyButton = document.querySelector('.popup-card__button-buy');
export const likeButton = document.querySelector('.popup-card__button-like');
export const thanksMessage = document.querySelector('#banner_type_thanks');
export const requestMessage = document.querySelector('#banner_type_success');
export {
  dataFilterTagsTypeEvent,
  dataFilterTagsDays,
  containerTagsTypeDays,
  containerTagsTypeEvt,
};

//переместить массивы в константы
const dataFilterTagsTypeEvent = [
  "все",
  "хочу пойти",
  "разное",
  "лекции",
  "мастер-классы",
  "кафе",
  "музеи",
  "экскурсии",
  "доставка",
  "магазины",
];
const dataFilterTagsDays = [
  "все",
  "сегодня",
  "завтра",
  "послезавтра",
  "чт, 09 сен.",
  "пт, 10 сен.",
  "сб, 11 сен.",
  "вс, 12 сен.",
];
const containerTagsTypeDays = document.querySelector(
  ".container-tags_type_days"
);
const containerTagsTypeEvt = document.querySelector(".container-tags_type_evt");

export const buttonUp = document.querySelector('.button_type_up');
export const buttonSupport = document.querySelector('.header__actions_hidden_small')
export const configPhotoGallery = {
  rootSelector: '.gallery',
  imageClass: 'gallery__image',
  sliderSelector: '.gallery__slider',
  sliderItemClass: 'gallery__slider-item',
  activeImageClass: 'gallery__image_mobile_visible',
  activeSliderItemClass: 'gallery__slider-item_active'
};

export const initialPhotoGalleryImages = [
  { src: './images/gallery/image-park.svg', alt: 'Парк' },
  { src: './images/gallery/image-girl.svg', alt: 'Девушка' },
  { src: './images/gallery/image-coctails.svg', alt: 'Коктели' },
  { src: './images/gallery/image-exhibition.svg', alt: 'Выставка' },
  { src: './images/gallery/image-party.svg', alt: 'Вечеринка' }
];
