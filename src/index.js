import './pages/index.scss';
import { buttonUp } from './scripts/constants';
import ButtonUpManager from './components/ButtonUpManager';
import FilterTag from "./scripts/filter-tags";
import Section from './scripts/section';
import Card from './scripts/Card';
import { dataPeterburgCards } from './scripts/dataPeterburgCards';
import popupCard from './scripts/PopupCard';
import { LocationPopover } from './scripts/Popover';
import { PhotoGallery } from './scripts/PhotoGallery';

/* карточки для слайдера */
const sliderContainerElement = document.querySelector('.slider__elements');
const cardPopup = new popupCard('.popup');
if (sliderContainerElement) {
     const CardforSlider = new Section({
          items: dataPeterburgCards,
          renderer: (item) => {
               const card = new Card({
                    item: item, handleLikeClick: (evt) => {
                         card.likeCard(evt)
                    }, handleCardClick: () => {
                         cardPopup.open(item)
                         cardPopup.setEventListeners()
                    }
               }, '#card')
               const cardElement = card.generate()
               CardforSlider.addItem(cardElement)
          }
     }, '.slider__elements')
     CardforSlider.renderItems()
}

// Выбор локации
const locationPopover = new LocationPopover('#location-popover', '.header__location');
locationPopover.setListItems(['Москва', 'Санкт-Петербург', 'Сочи', 'Калуга', 'Екатеринбург'], 'Санкт-Петербург');

/* фильтр-тэги */
const containerTags = document.querySelector(".container-tags");
if (containerTags) {
     const filterTagEvent = new FilterTag(".container-tags", ".filter-tag");
     filterTagEvent.setEventListeners();
}

if(buttonUp) {
  new ButtonUpManager(buttonUp).addEventListener();
}

// Слайдер для фото-галереи

const photoGallery = new PhotoGallery({
     rootSelector: '.gallery',
     imageClass: 'gallery__image',
     sliderSelector: '.gallery__slider',
     sliderItemClass: 'gallery__slider-item',
     activeImageClass: 'gallery__image_mobile_visible',
     activeSliderItemClass: 'gallery__slider-item_active'
});
photoGallery.setImages([
     { src: '../images/gallery/image-park.svg', alt: 'Парк' },
     { src: '../images/gallery/image-girl.svg', alt: 'Девушка' },
     { src: '../images/gallery/image-coctails.svg', alt: 'Коктели' },
     { src: '../images/gallery/image-exhibition.svg', alt: 'Выставка' },
     { src: '../images/gallery/image-party.svg', alt: 'Вечеринка' }
]);
