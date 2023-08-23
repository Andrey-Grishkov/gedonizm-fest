import './pages/index.scss';
import Section from './scripts/section';
import Card from './scripts/Card';
import { DataCards } from './scripts/DataCards';
/* карточки для слайдера */
const CardforSlider = new Section({items:DataCards,
     renderer: (item) =>{
     const card = new Card(item,'#card')
     const cardElement = card.generate()
     CardforSlider.addItem(cardElement)
}}, '.slider__elements')
CardforSlider.renderItems()