export class Form {
    constructor() {
        this._form = document.querySelector('.form');

        this._nameCategory = '';
        this._typeEvent = 'offline';

        this._buttonsNext = document.querySelectorAll('.button_direction_next');
        this._buttonsBack = document.querySelectorAll('.button_direction_back');
        this._checkboxesOnline = document.querySelectorAll('.form__step-checkbox_type-event');

        this._checkboxesCategory = document.querySelectorAll('.form__step-checkbox_category');
        this._checkboxesTypeEvent = document.querySelectorAll('.form__step-checkbox_type-event');
        this._blocksCategory = document.querySelectorAll('[data-category-id]');
        this._blocksOnline = document.querySelectorAll('[data-type-event]');
    }

    setEventListener() {
      this._buttonsNext.forEach((button) => {
        button.addEventListener('click', (event) => {
          this._handleNext(event);
          this._setVisibleInputs();
        });
      });

      this._buttonsBack.forEach((button) => {
        button.addEventListener('click', this._handleBack)
      });

      this._form.addEventListener('submit', this._handleSubmitForm);

      this._checkboxesCategory.forEach((checkbox) => {
        checkbox.addEventListener('click', (event) => {this._handleCategory(event)});
      });

      this._checkboxesTypeEvent.forEach((checkbox) => {
        checkbox.addEventListener('click', (event) => {
          this._handleTypeEvent(event);
          this._setVisibleInputs();
        });
      });
    }

    _setVisibleInputs() {
      this._blocksCategory.forEach((element) => {
        const categoryAttr = element.dataset.categoryId.split(',');
        if (categoryAttr.includes(this._nameCategory)){
          element.classList.remove('hidden');
        } else {
          element.classList.add('hidden');
        };
      });

      this._blocksOnline.forEach((element) => {
        if (element.dataset.typeEvent !== this._typeEvent) {
          element.classList.add('hidden');
        } else {
          element.classList.remove('hidden');
        }
      });

      this._checkboxesOnline.forEach((checkbox) => {
        if (checkbox.value === this._typeEvent) {
          checkbox.checked = true;
          return;
        }
      })
  }

    _handleNext(event) {
      const fieldset = event.target.closest('fieldset');
      const nextFieldset = fieldset.nextElementSibling;
      fieldset.classList.add('hidden');
      nextFieldset.classList.remove('hidden');
    }

    _handleBack(event) {
      const fieldset = event.target.closest('fieldset');
      const previousFieldset = fieldset.previousElementSibling;
      fieldset.classList.add('hidden');
      previousFieldset.classList.remove('hidden');
    }

    _handleSubmitForm(event) {
       event.preventDefault();

      }

    _handleCategory(event) {
      this._nameCategory = event.target.id;
      if (event.target.dataset.categoryTypeEvent) {
        this._typeEvent = event.target.dataset.categoryTypeEvent;
      };
      const classes=event.target.closest('fieldset').querySelector('.button_direction_next').classList;
      console.log()
      if (this._nameCategory === '') {
        classes.add('button__hiden-button_state-disabled');
      } else {
        classes.remove('button__hiden-button_state-disabled');
      }
    }

    _handleTypeEvent(event) {
      this._typeEvent = event.target.value;
    }
}
