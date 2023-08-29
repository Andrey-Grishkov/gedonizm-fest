export class formRegister {
    constructor() {
        this._forms = document.querySelectorAll("fieldset.form__main");
        this._formMain = document.querySelector('#formMain');
        // this._formCategory = document.getElementById('formCategory');
        // this._formRegisterCafe = document.getElementById('formRegisterCafe');
        // this._formRegisterLekture = document.getElementById('formRegisterLekture');
        // this._formRegisterParty = document.getElementById('formRegisterParty');
        // this._formRegisterOther = document.getElementById('formRegisterOther');
        // this._formContactsCafe = document.getElementById('formContactsCafe');
        // this._formContactsLekture = document.getElementById('formContactsLekture');
        // this._formContactsParty = document.getElementById('formContactsParty');
        // this._formContactsOther = document.getElementById('formContactsOther');
        // this._formFoto = document.getElementById('formFoto');
        this._buttonsNext = document.querySelectorAll('#next');
        
        this._setEventListener();
    }

    _setEventListener() {
        this._buttonsNext.forEach((button) => {
            button.addEventListener('click', (e) => {
                if (e.target.parentNode) {
                    let form = e.target.parentNode.parentNode;
                    if (form) {
                        form.classList.add('hidden');
                        if (form.id === 'formMain') {
                            this._forms.forEach((f) => {
                                if (f.id === 'formCategory') {
                                    f.classList.remove('hidden');
                                    return;
                                }
                            })
                        };
                    }
                }
            });
        });
    }
}
