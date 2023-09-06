import Popup from "./popup";
export default class popupSupport extends Popup{
    constructor(selector) {
        super(selector)
    }
    _clear(buttons){
        buttons.forEach((element) => {
            element.classList.remove('button_type_primary')
            element.classList.add('button_type_secondary')
        })
    }
    setEventListeners(){
        super.setEventListeners()
        const buttons = this._popup.querySelectorAll('.button')
        buttons.forEach((element) => {
            element.addEventListener('click', () => {
                this._clear(buttons)
                element.classList.remove('button_type_secondary')
                element.classList.add('button_type_primary');
            })
        });
        this._popup.querySelector('.popup-support__input-num').addEventListener('input',()=>{
            this._clear(buttons)
            if(this._popup.querySelector('.popup-support__input-num').value ==''){
                this._popup.querySelector('.button').classList.remove('button_type_secondary')
                this._popup.querySelector('.button').classList.add('button_type_primary')
            }
        })
        this._popup.querySelector('.popup-support__button').addEventListener('click',()=>{
            this.close()
            document.location='index.html'
            buttons.forEach((element) => {
                if(element.classList.contains('button_type_primary')){
                    let sum = element.value
                    console.log(`Спасибо. Вы пожертвовали ${sum} р.`)
                }})
                if(!this._popup.querySelector('.popup-support__input-num').value ==''){
                    let sum = this._popup.querySelector('.popup-support__input-num').value
                    console.log(`Спасибо. Вы пожертвовали ${sum} р.`)
                }
           
        })
    }
}