export  default class Card{
    constructor({item ,handleLikeClick,handleCardClick}, selector){
        this._selector = selector
        this._img = item.img
        this._name = item.name
        this._type = item.type
        this._shortDescription = item.shortDescription
        this._time = item.time
        this._adress = item.adress
        this._more = item.more
        this._handleLikeClick = handleLikeClick;
        this._handleCardClick =handleCardClick;
        this._id=item.id
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
        let LikedCards = JSON.parse(localStorage.getItem("LikedCards"));
        if(LikedCards){
        for( let i=0;i<=LikedCards.length;i++){
            if(LikedCards[i]== this._id){
                this._element.querySelector(".card__like-icon").classList.add('card__like-icon_active')
            }
        }
    }
        this._element.querySelector(".card__img").src =this._img;
        this._element.querySelector(".card__img").alt =this._name;
        this._element.querySelector(".card__type").textContent =this._type;
        this._element.querySelector(".card__time").textContent = this._time;
        this._element.querySelector(".card__title").textContent = this._name;
        this._element.querySelector(".card__description").textContent = this._shortDescription;    
        this._element.querySelector(".card__adress").textContent = this._adress[0];
        this._element.querySelector(".card__more").textContent = this._more;
        this._setEventListeners()
        return this._element
    }
    likeCard(evt,id){
        if (evt.target.classList.contains('card__like-icon_active')) {
           let LikedCards = JSON.parse(localStorage.getItem("LikedCards"));
            for( let i=0;i<=LikedCards.length;i++){
                if(LikedCards[i]==id){
                    LikedCards = LikedCards.filter(card=> card !==id)
                    localStorage.setItem("LikedCards",JSON.stringify(LikedCards))
                }
            }
            evt.target.classList.remove('card__like-icon_active');
        } else {
           let LikedCards = JSON.parse(localStorage.getItem("LikedCards"));
            if(LikedCards == null){
                LikedCards= []
           }
            LikedCards.push(id)
            localStorage.setItem("LikedCards",JSON.stringify(LikedCards))
            evt.target.classList.add('card__like-icon_active');
        }
        if(JSON.parse(localStorage.getItem("LikedCards")).length>0){
            document.querySelector('.button__icon_type_like').classList.add('card__like-icon_active')
          }else if(JSON.parse(localStorage.getItem("LikedCards")).length<=0){
            document.querySelector('.button__icon_type_like').classList.remove('card__like-icon_active')
          }
    }
    _setEventListeners() {
   this._element.querySelector('.card__like-icon').addEventListener('click', (evt) => {
    this._handleLikeClick(evt)
   })
   this._element.querySelector('.card__title').addEventListener('click', () => {
    this._handleCardClick()
   })
   this._element.querySelector('.card__img').addEventListener('click', () => {
    this._handleCardClick()
   })
    }
}
