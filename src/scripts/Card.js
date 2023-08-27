export  default class Card{
    constructor(item, selector){
        this._selector = selector
        this._img = item.img
        this._name = item.name
        this._type = item.type
        this._description = item.description
        this._time = item.time
        this._adress = item.adress
        this._more = item.more
    }
    _getElement() {
        const cardElement = document.
            querySelector(this._selector)
            .content
            .querySelector('.card')
            .cloneNode(true)
        return cardElement
    }
    generate(){
        this._element = this._getElement();
        this._element.querySelector(".card__img").src =this._img;
        this._element.querySelector(".card__img").alt =this._name;
        this._element.querySelector(".card__type").textContent =this._type;
        this._element.querySelector(".card__time").textContent = this._time;
        this._element.querySelector(".card__title").textContent = this._name;
        this._element.querySelector(".card__description").textContent = this._description;
        this._element.querySelector(".card__adress").textContent = this._adress;
        this._element.querySelector(".card__more").textContent = this._more;
        return this._element
    }
}