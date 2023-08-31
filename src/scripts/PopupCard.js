import Popup from "./popup";
export default class popupCard extends Popup{
    constructor(selector){
        super(selector)
    }
    open(data){
        super.open()
        document.querySelector('.page').classList.add('page_hidden')
        this._popup.querySelector('.popup-card__img').src = data.img;
        this._popup.querySelector('.popup-card__img').alt = data.name
        this._popup.querySelector('.popup-card__type').textContent = data.type
        this._popup.querySelector('.popup-card__time').textContent =data.time
        this._popup.querySelector('.popup-card__description').textContent = data.description
        this._popup.querySelector('.popup-card__title').textContent= data.name
        this._popup.querySelector('#duration').textContent = data.duration
        this._popup.querySelector('#cost').textContent = data.cost
        this._popup.querySelector('#place').textContent = data.place
        if(data.adress.length>1){
            this._popup.querySelector('#adress').textContent = data.adress[0]
            this._popup.querySelector('.popup-card__adress-more').textContent  = ` смотреть ещё ${data.adress.length-1}`
        }else{
            this._popup.querySelector('#adress').textContent = data.adress[0]
            this._popup.querySelector('.popup-card__adress-more').textContent = ' '
        }
        this._popup.querySelector('#phone').textContent = data.phone
        this._popup.querySelector('#social').textContent = data.social
    }
}