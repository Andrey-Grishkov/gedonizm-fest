import './pages/index.scss';
import FilterTag from "./scripts/filter-tags";
import Section from './scripts/section';
import Card from './scripts/Card';
import { dataPeterburgCards } from './scripts/dataPeterburgCards';
import popupCard from './scripts/PopupCard';
import { LocationPopover } from './scripts/Popover';
import popupLikesCard from './scripts/popupLikesCards';
import { buttonCardLikes } from './scripts/constants';
/* карточки для слайдера */
const sliderContainerElement = document.querySelector('.slider__elements');
const cardPopup = new popupCard('#Card-popup');
const cardlikePopup = new popupLikesCard('#Likescard-popup')
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
if(buttonCardLikes){
buttonCardLikes.addEventListener('click',function(){
     cardlikePopup.open()
     cardlikePopup.setEventListeners()
})

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
