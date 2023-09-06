import {Popover} from './Popover.js';

export class Form {
  constructor() {
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

      this._partyType = document.querySelector('.form__radio_party-type');https://www.youtube.com/watch?v=-Y42ihl5Kyc
      this._stepFirstData = document.querySelector('.form__step-radiobutton_checked').querySelectorAll('.form__step-caption');

      this._dropZone = document.querySelector('.form__foto');
      this._fotoIcon = document.querySelector('.form__foto-icon');
      this._fotoImage = document.querySelector('.form__foto-image');
      this._fotoClose = document.querySelector('.form__foto-close');
      this._fotoLabel = document.querySelector('.form__foto-label');
      this._fotoInput = document.querySelector('.form__input-file');

      this._cityEventPopover = new Popover('#action-location', '.field__input_city', this._handleLocationSelect);
      this._cityEventPopover.setListItems(['Москва', 'Санкт-Петербург', 'Сочи', 'Калуга', 'Екатеринбург']);
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

    let dataTotal = {};
    dataTotal["мероприятие"] = this._getEventName.call(this);
    dataTotal["тип мероприятия"] = this._typeEvent;

    if (this._partyType.dataset.categoryId === this._nameCategory) {
      dataTotal['тип вечеринки'] = this._getTypeParty(this._partyType);
    };
    dataTotal = this._getInputsData(dataTotal);
    console.log(dataTotal);
  }

  _handleCategory(event) {
    this._nameCategory = event.target.id;
    if (event.target.dataset.categoryTypeEvent) {
      this._typeEvent = event.target.dataset.categoryTypeEvent;
    };
  }

  _handleDragover(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  _handleDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    let file = fileList[0];
    this._loadImage(file);
  }

  _handleImageClick(event) {
    this._fotoInput.click();
    this._fotoInput.onchange = e => {
      let file = e.target.files[0];
      if (file) {
        this._loadImage(file);
      }
   }
   this._fotoInput.value = '';
  }

  _loadImage(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this._fotoImage.src = reader.result;
      this._fotoImage.classList.remove('hidden');
      this._fotoLabel.classList.add('hidden');
      this._fotoIcon.classList.add('hidden');
      this._fotoClose.classList.remove('hidden');
    };
  }

  _handleTypeEvent(event) {
    this._typeEvent = event.target.value;
  }

  _handleCloseFoto(event) {
    this._fotoImage.src = "#";
    this._fotoImage.classList.add('hidden');
    this._fotoLabel.classList.remove('hidden');
    this._fotoIcon.classList.remove('hidden');
    this._fotoClose.classList.add('hidden');
    event.stopPropagation();
  }

  _getEventName() {
    let result='';
    this._stepFirstData.forEach((data) => {
      if (!data.classList.contains('hidden')) {
        result = data.textContent;
        return result;
      }
    });
    return result;
  }

  _getTypeParty(partyType) {
    let result = '';
    const partyTypeItems = partyType.querySelectorAll('.form__step-checkbox');
    partyTypeItems.forEach((item) => {
      if (item.checked === true) {
        if (item.parentNode) {
          let siblingLabel = item.parentNode.querySelector('.form__step-radiogroup');
          result = siblingLabel.textContent;
          return result;
        }
      }
    });
    return result;
  }

  _getInputsData(data) {
    let result = data;
    let inputs = document.querySelectorAll('.field');
    inputs.forEach((input) => {
      let inputName = input.querySelector('.field__title').textContent;
      let inputValue = input.querySelector('.field__input').value;
      if (!inputValue) {
        inputValue = input.querySelector('.field__input').textContent;
      }
      result[inputName] = inputValue;
    })
    return result;
  }

  _handleLocationSelect(name) {
    let actionLocation = document.querySelector('.field_type_icon');
    actionLocation.textContent = name;
    actionLocation.classList.add('field_type_icon_defined');
    console.log(actionLocation.color);
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

    this._dropZone.addEventListener('dragover', (event) => this._handleDragover(event));

    this._dropZone.addEventListener('drop', (event) => this._handleDrop.call(this, event));

    this._dropZone.addEventListener('click', (event) => this._handleImageClick.call(this, event));

    this._fotoClose.addEventListener('click', (event) => this._handleCloseFoto.call(this, event));

  }

}
