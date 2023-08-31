export class Form {
  constructor() {
      console.log('createForm');
      this._form = document.querySelector('.form');

      this._nameCategory = 'cafe';
      this._typeEvent = 'offline';

      this._buttonsNext = document.querySelectorAll('.button_direction_next');
      this._buttonsBack = document.querySelectorAll('.button_direction_back');
      this._checkboxesOnline = document.querySelectorAll('.form__step-checkbox_type-event');

      this._checkboxesCategory = document.querySelectorAll('.form__step-checkbox_category');
      this._checkboxesTypeEvent = document.querySelectorAll('.form__step-checkbox_type-event');
      this._blocksCategory = document.querySelectorAll('[data-category-id]');
      this._blocksOnline = document.querySelectorAll('[data-type-event]');
      console.log('end_createForm');
  }

  setEventListener() {
    console.log('Start setEventListener');

    this._buttonsNext.forEach((button) => {
      button.addEventListener('click', (event) => {
        this._handleNext(event);
        this._setVisibleInputs();
      });
    });

    this._buttonsBack.forEach((button) => {
      button.addEventListener('click', this._handleBack)
    });

    this._form.addEventListener('submit', (event) => this._handleSubmitForm(event));

    this._checkboxesCategory.forEach((checkbox) => {
      checkbox.addEventListener('click', (event) => {this._handleCategory(event)});
    });

    this._checkboxesTypeEvent.forEach((checkbox) => {
      checkbox.addEventListener('click', (event) => {
        this._handleTypeEvent(event);
        this._setVisibleInputs();
      });
    });

    console.log('End setEventListener');
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

    const dataTotal = {};
    dataTotal["мероприятие"] = this._getEventName();
    dataTotal["тип мероприятия"] = this._typeEvent;


    console.log(dataTotal);
  }

  _handleCategory(event) {
    this._nameCategory = event.target.id;
    if (event.target.dataset.categoryTypeEvent) {
      this._typeEvent = event.target.dataset.categoryTypeEvent;
    };
  }

  _handleTypeEvent(event) {
    this._typeEvent = event.target.value;
  }

  _getEventName() {
    let result='';
    const stepFirstData = document.querySelector('.form__step-radiobutton_checked').querySelectorAll('.form__step-caption');
    stepFirstData.forEach((data) => {
      if (!data.classList.contains('hidden')) {
        result = data.textContent;
        return result;
      }
    });
    return result;
  }
}
