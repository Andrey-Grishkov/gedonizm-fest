import Popup from "./popup";
export default class popupBuy extends Popup{
    constructor(selector) {
        super(selector)
    }
    setEventListeners(){
        super.setEventListeners();
        this._popup.querySelector('.popup-buy__minus').addEventListener('click', ()=>{
            this._popup.querySelector('.popup-buy__quantity').value--;
            if(this._popup.querySelector('.popup-buy__quantity').value<0){
                this._popup.querySelector('.popup-buy__quantity').value=0;
                this._popup.querySelector('.popup-buy__quantity').placeholder= 0;
            }
            this._popup.querySelector('.popup-buy__cost').textContent = `${this._popup.querySelector('.popup-buy__quantity').value *500} ₽`;  
        })
        this._popup.querySelector('.popup-buy__plus').addEventListener('click',()=>{
            this._popup.querySelector('.popup-buy__quantity').value++;
            this._popup.querySelector('.popup-buy__cost').textContent = `${this._popup.querySelector('.popup-buy__quantity').value *500} ₽`;  
        })
        this._popup.querySelector('.popup-buy__quantity').addEventListener('input',()=>{
            this._popup.querySelector('.popup-buy__cost').textContent = `${this._popup.querySelector('.popup-buy__quantity').value *500} ₽`;  
        })
        this._popup.querySelector('.popup-support__button').addEventListener('click',()=>{
            this.close() 
            localStorage.setItem("buy",true)
            document.location='index.html'
        })
    }
}