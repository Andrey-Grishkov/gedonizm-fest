export class formRegister {
    constructor(categories) {
        this._forms = document.querySelectorAll("fieldset.form__main");
        this._formMain = document.querySelector('#formMain');
        this._form = document.querySelector('.form');

        this._numStep = 0;
        this._numCategory = 0;
        this._categories = categories;

        this._buttonsNext = document.querySelectorAll('#next');
        this._buttonsBack = document.querySelectorAll('#back');
        
        if (this._form) {
            this._setEventListener();
        };
    }

    _setEventListener() {
        this._buttonsNext.forEach((button) => {
            button.addEventListener('click', (e) => {
                if (e.target.parentNode) {
                    let form = e.target.parentNode.parentNode;
                    if (form) {
                        form.classList.add('hidden');
                        switch(this._numStep) {
                            case 0:
                                this._setVisible('formCategory');
                                break;
                            case 1:
                                this._numCategory = this._categories.indexOf(document.querySelector('input[name="category"]:checked').id)+1;
                                switch (this._numCategory) {
                                    case 1: 
                                        this._setVisible('formRegisterCafe');
                                        break;
                                    case 2: 
                                        this._setVisible('formRegisterLekture');
                                        break;
                                    case 3: 
                                        this._setVisible('formRegisterParty');
                                        break;
                                    case 4: 
                                        this._setVisible('formRegisterOther');
                                        break;
                                };
                                break;
                            case 2:
                                switch (this._numCategory) {
                                    case 1: 
                                        this._setVisible('formContactsCafe');
                                        break;
                                    case 2: 
                                        this._setVisible('formContactsLekture');
                                        break;
                                    case 3: 
                                        this._setVisible('formContactsParty');
                                        break;
                                    case 4: 
                                        this._setVisible('formContactsOther');
                                        break;
                                };
                                break;
                            case 3:
                                this._setVisible('formFoto');
                                break;
                            };
                        this._numStep++;
                    }
                }
            });
        });

        this._buttonsBack.forEach((button) => {
            button.addEventListener('click', (e) => {
                if (e.target.parentNode) {
                    let form = e.target.parentNode.parentNode;
                    if (form) {
                        form.classList.add('hidden');
                        switch(this._numStep) {
                            case 1:
                                this._setVisible('formMain');
                                break;
                            case 2:
                                this._setVisible('formCategory');
                                break;
                            case 3:
                                switch (this._numCategory) {
                                    case 1: 
                                        this._setVisible('formRegisterCafe');
                                        break;
                                    case 2: 
                                        this._setVisible('formRegisterLekture');
                                        break;
                                    case 3: 
                                        this._setVisible('formRegisterParty');
                                        break;
                                    case 4: 
                                        this._setVisible('formRegisterOther');
                                        break;
                                };
                                break;
                            case 4:
                                switch (this._numCategory) {
                                    case 1: 
                                        this._setVisible('formContactsCafe');
                                        break;
                                    case 2: 
                                        this._setVisible('formContactsLekture');
                                        break;
                                    case 3: 
                                        this._setVisible('formContactsParty');
                                        break;
                                    case 4: 
                                        this._setVisible('formContactsOther');
                                        break;
                                };
                                break;
                            };
                        this._numStep--;
                    }
                }
            });
        });

        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            this._outputData();
            document.location.href="/";
        });
    }

    _setVisible (formId) {
        this._forms.forEach((f) => {
            if (f.id === formId) {
                f.classList.remove('hidden');
                return;
            }
        });        
    }

    _outputData() {
        console.log(this._categories[this._numCategory]);
    }
}
