import { dataPeterburgCards } from "./dataPeterburgCards";
import Popup from "./popup";
import Section from "./section";
import Card from "./Card";
export default class popupLikesCard extends Popup {
    constructor(selector,cardPopup) {
        super(selector)
        this._buttonMap = this._popup.querySelector('.popup-likesCard__map')
        this._buttonlist = this._popup.querySelector('.popup-likesCard__list')
        this._cardPopup = cardPopup;

    }
    open() {
        super.open()
        document.querySelector('.page').classList.add('page_hidden')
        const cardforLikeContainer = new Section({
            items: dataPeterburgCards,
            renderer: (item) => {
                const LikedCards = JSON.parse(localStorage.getItem("LikedCards"));
                for (let i = 0; i <= LikedCards.length; i++) {
                    if (LikedCards[i] == item.id) {
                        const card = new Card({
                            item: item, handleLikeClick: (evt) => {
                                card.likeCard(evt, item.id)
                            }, handleCardClick: () => {
                                this._cardPopup.open(item)
                                this.close()
                                this._cardPopup.setEventListeners()
                            }
                        }, '#card')
                        const cardElement = card.generate()
                        cardElement.classList.add('card_type-popup')
                        cardElement.classList.add('card__no-margin')
                        cardforLikeContainer.addItem(cardElement)
                    }
                }
            }
        },'.popup-likesCard__elements')
        cardforLikeContainer.renderItems()
    }
    setEventListeners(){
        super.setEventListeners()
        this._popup.querySelector('.popup-likesCard__button-back').addEventListener('click', () => {
            this.close();
        })
        this._buttonMap.addEventListener('click',()=>{
            this._buttonMap.classList.add('popup-likesCard__button-on');
            this._buttonlist.classList.remove('popup-likesCard__button-on');
            this._popup.querySelector('.popup-likesCard__elements').classList.remove('popup-likesCard__elements_opened')
            this._popup.querySelector('.popup-map').classList.add('popup-map_opened')
        })
        this._buttonlist.addEventListener('click',()=>{
            this._buttonMap.classList.remove('popup-likesCard__button-on');
            this._buttonlist.classList.add('popup-likesCard__button-on');
            this._popup.querySelector('.popup-likesCard__elements').classList.add('popup-likesCard__elements_opened')
            this._popup.querySelector('.popup-map').classList.remove('popup-map_opened')
        })
    }
} 