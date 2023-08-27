import './pages/index.scss';
import Section from './scripts/section';
import Card from './scripts/Card';
import { dataPeterburgCards } from './scripts/dataPeterburgCards';
import popupCard from './scripts/PopupCard';
/* карточки для слайдера */
const sliderContainerElement = document.querySelector('.slider__elements');
const cardPopup= new popupCard('#popup-card');
cardPopup.setEventListeners()
if(sliderContainerElement) {
const CardforSlider = new Section({items:dataPeterburgCards,
     renderer: (item) =>{
     const card = new Card({item:item,handleLikeClick:(evt)=>{
          card.likeCard(evt)
     },handleCardClick: ()=>{
          cardPopup.open(item)
     }},'#card')
     const cardElement = card.generate()
     CardforSlider.addItem(cardElement)
}}, '.slider__elements')
CardforSlider.renderItems()
}