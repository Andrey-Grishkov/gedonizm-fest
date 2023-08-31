import { dataPeterburgCards } from "./dataPeterburgCards";
import Popup from "./popup";
import Section from "./section";
import Card from "./Card";
export default class popupLikesCard extends Popup {
    constructor(selector) {
        super(selector)
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
                                cardPopup.open(item)
                                cardPopup.setEventListeners()
                            }
                        }, '#card')
                        const cardElement = card.generate()
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
    }
} 