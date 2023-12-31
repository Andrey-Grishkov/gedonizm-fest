import { Form } from '../scripts/Form.js';
import './index.scss';
import {
  dataFilterTagsTypeEvent,
  dataFilterTagsDays,
  containerTagsTypeDays,
  containerTagsTypeEvt,
} from "../scripts/constants.js";
import { buttonUp, configPhotoGallery, initialPhotoGalleryImages, buttonSupport, buttonCardLikes,buyButton, likeButton, thanksMessage, requestMessage } from '../scripts/constants.js';
import ButtonUpManager from '../components/ButtonUpManager.js';
import FilterTag from "../scripts/filter-tags.js";
import Section from '../scripts/section.js';
import Card from '../scripts/Card.js';
import { dataPeterburgCards } from '../scripts/dataPeterburgCards.js';
import popupCard from '../scripts/PopupCard.js';
import { LocationPopover } from '../scripts/Popover.js';
import popupLikesCard from '../scripts/popupLikesCards.js';
import popupSupport from '../scripts/popupSupport.js';
import { PhotoGallery } from '../scripts/PhotoGallery.js';
import Popup from '../scripts/popup.js';
import popupBuy from '../scripts/popupBuy.js';
import { Banner } from '../scripts/Banner.js';

const formContainer = document.querySelector('.form');
if (formContainer) {
  const form = new Form();
  form.setEventListener();
}

// let forms = new Form(['cafe', 'lekture', 'party', 'other']);
if(localStorage.getItem('buy') === 'true'){
  thanksMessage.classList.remove('hidden')
  localStorage.setItem("buy",false)
  function hidemessege(){
    thanksMessage.classList.add('hidden')
  }
  setTimeout(hidemessege,10000)
}

if (localStorage.getItem('request') === 'true') {
  requestMessage.classList.remove('hidden');
  localStorage.setItem('request', false);
}

/* карточки для слайдера */
const sliderContainerElement = document.querySelector('.slider__elements');
const cardPopup = new popupCard('.Card-popup');
const supportPopup = new popupSupport('.popup_type_support');
const buyPopup = new popupBuy('.popup_type_buy');
const cardlikePopup = new popupLikesCard('.Likescard-popup',cardPopup)
if (sliderContainerElement) {

  const CardforSlider = new Section({
    items: dataPeterburgCards,
    renderer: (item) => {
      const card = new Card({
        item: item, handleLikeClick: (evt) => {
          card.likeCard(evt, item.id)
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

if(buttonCardLikes) {
  buttonCardLikes.addEventListener('click',function(){
    cardlikePopup.open()
    cardlikePopup.setEventListeners()
  })
}

// Выбор локации
const locationPopover = new LocationPopover('#location-popover', '.header__location');
locationPopover.setListItems(['Москва', 'Санкт-Петербург', 'Сочи', 'Калуга', 'Екатеринбург'], 'Санкт-Петербург');

if (buttonUp) {
  new ButtonUpManager(buttonUp).addEventListener();
}

// Слайдер для фото-галереи

const galleryContainerElement = document.querySelector(configPhotoGallery.rootSelector);
if (galleryContainerElement) {
  const photoGallery = new PhotoGallery(configPhotoGallery);
  photoGallery.setImages(initialPhotoGalleryImages);
}

// попап с пожертвованием
if (buttonSupport) {
  buttonSupport.addEventListener('click', function () {
    supportPopup.open()
    supportPopup.setEventListeners()
  })
}
/* фильтр-тэги */
const containerTags = document.querySelector(".container-tags");

// if (containerTags) {
//   const filterTagEvent = new FilterTag(".container-tags", ".filter-tag");
//   filterTagEvent.setEventListeners();
// }

// добавляем фильтр-теги для секции "тип события"
if (containerTagsTypeEvt) {
  const tagForContainer = new Section(
    {
      items: dataFilterTagsTypeEvent,
      renderer: (item) => {
        const filterTag = new FilterTag(
          ".container-tags_type_evt",
          ".filter-tag",
          item,
          "#filter-tag"
        );
        const tagElement = filterTag.generate();
        tagForContainer.addItem(tagElement);
      },
    },
    ".container-tags_type_evt"
  );
  tagForContainer.renderItems();
}

// добавляем фильтр-теги для секции "дни"
if (containerTagsTypeDays) {
  const tagForContainer = new Section(
    {
      items: dataFilterTagsDays,
      renderer: (item) => {
        const filterTag = new FilterTag(
          ".container-tags_type_days",
          ".filter-tag",
          item,
          "#filter-tag"
        );
        const tagElement = filterTag.generate();
        tagForContainer.addItem(tagElement);
      },
    },
    ".container-tags_type_days"
  );
  tagForContainer.renderItems();
}

/* popup покупки билета */
if(buyButton){
  buyButton.addEventListener('click',function(){
    cardPopup.close()
    buyPopup.open()
    buyPopup.setEventListeners()
  })
}
/* попуп с лайкнутыми карточками  из попупа карточки */
if(likeButton){
  likeButton.addEventListener('click',function(){
    cardPopup.close()
    cardlikePopup.open()
    cardlikePopup.setEventListeners()
  })
}
// Установка слушателей на кнопку банера
const bannerElements = document.querySelectorAll('.banner');
bannerElements.forEach(element => {
  const banner = new Banner({ selector: `#${element.id}`, buttonSelector: '.banner__button' });
  banner.setEventListeners();
});
