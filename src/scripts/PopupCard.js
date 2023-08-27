import Popup from "./popup";
export default class popupCard extends Popup{
    constructor(selector){
        super(selector)
    }
    open(data){
        super.open()
        this._popup.querySelector('.popup__content-card_img').src = data.img;
        this._popup.querySelector('.popup__content-card_img').alt = data.name
        this._popup.querySelector('.popup__content-card_type').textContent = data.type
        this._popup.querySelector('.popup__content-card_description').textContent = data.description
        this._popup.querySelector('#duration').textContent = data.duration
        this._popup.querySelector('#cost').textContent = data.cost
        this._popup.querySelector('#place').textContent = data.place
        if(data.adress.length>1){
            this._popup.querySelector('#adress').textContent = data.adress[0]
            this._popup.querySelector('.popup__content-card_adress-more').textContent  = ` смотреть ещё ${data.adress.length-1}`
        }else{
            this._popup.querySelector('#adress').textContent = data.adress[0]
            this._popup.querySelector('.popup__content-card_adress-more').textContent = ' '
        }
        this._popup.querySelector('#phone').textContent = data.phone
        this._popup.querySelector('#social').textContent = data.social
    }
}