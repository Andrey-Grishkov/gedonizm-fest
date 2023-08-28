import './pages/index.scss';
import FilterTag from "./scripts/filter-tags";
import Section from './scripts/section';
import Card from './scripts/Card';
import { dataPeterburgCards } from './scripts/dataPeterburgCards';
import { LocationPopover } from './scripts/Popover';
/* карточки для слайдера */
const sliderContainerElement = document.querySelector('.slider__elements');
if(sliderContainerElement) {
const CardforSlider = new Section({items:dataPeterburgCards,
     renderer: (item) =>{
     const card = new Card(item,'#card')
     const cardElement = card.generate()
     CardforSlider.addItem(cardElement)
}}, '.slider__elements')
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
