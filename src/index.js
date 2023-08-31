import {Form} from './scripts/Form.js';

import './pages/index.scss';


const formContainer = document.querySelector('.form');

if(formContainer) {
  const form = new Form();
  form.setEventListener();
}

import { buttonUp, configPhotoGallery, initialPhotoGalleryImages } from './scripts/constants';
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

if (buttonUp) {
     new ButtonUpManager(buttonUp).addEventListener();
}

// Слайдер для фото-галереи

const galleryContainerElement = document.querySelector(configPhotoGallery.rootSelector);
if (galleryContainerElement) {
     const photoGallery = new PhotoGallery(configPhotoGallery);
     photoGallery.setImages(initialPhotoGalleryImages);
}
