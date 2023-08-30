export default class FilterTag {
  constructor(selectorContainerTags, selectorFilterTag, selectorTagClose) {
    this.containerTags = document.querySelector(selectorContainerTags);
    this.filterTags = this.containerTags.querySelectorAll(selectorFilterTag);
  }
  //метод меняет стиль тэгов (колбэк слушателя событий)
  _togglTagStyle(evt) {
    const filterTag = evt.target.closest(".filter-tag");
    if (filterTag.classList.contains("filter-tag_type_off")) {
      //если тег неактивный
      filterTag.classList.replace("filter-tag_type_off", "filter-tag_type_on"); // то делаем его активным
      if (filterTag.classList.contains("filter-tag_close_yes")) {
        //если тег должен содержать крестик при активации, то меняем класс крестика с невидимого на видимый
        filterTag
          .querySelector(".filter-tag__close")
          .classList.replace(
            "filter-tag__close_state_invisible",
            "filter-tag__close_state_visible"
          );
      }
    } else {
      filterTag.classList.replace("filter-tag_type_on", "filter-tag_type_off");
      filterTag
        .querySelector(".filter-tag__close")
        .classList.replace(
          "filter-tag__close_state_visible",
          "filter-tag__close_state_invisible"
        );
    }
  }
  //метод снимает активность со всех тегов в контейнере, если активен тег "все" (есть класс .filter-tag_close_no)
  //метод снимает активность с тега "все", в случае, если делаем активным любой другой тег
  _disableOtherTags(evt) {
    const filterTag = evt.target.closest(".filter-tag");
    const filterTagParentElement = filterTag.parentElement;
    if (
      //если активен тег "все",
      filterTag.classList.contains("filter-tag_type_on") &
      filterTag.classList.contains("filter-tag_close_no")
    ) {
      //то остальные тега становятся неактивными
      const filterTagCloseYes = filterTagParentElement.querySelectorAll(
        ".filter-tag_type_on"
      );
      filterTagCloseYes.forEach((close, index) => {
        if (index === 0) return;
        close.classList.replace("filter-tag_type_on", "filter-tag_type_off");
        close
          .querySelector(".filter-tag__close")
          .classList.replace(
            "filter-tag__close_state_visible",
            "filter-tag__close_state_invisible"
          );
      });
    }
    if (
      // если становится активным любой тег, кроме "все"
      filterTag.classList.contains("filter-tag_type_on") &
      filterTag.classList.contains("filter-tag_close_yes")
    ) {
      //то тег "все" становится неактивным
      filterTagParentElement
        .querySelector(".filter-tag_close_no")
        .classList.replace("filter-tag_type_on", "filter-tag_type_off");
    }
  }
  //метод - набор слушателей
  setEventListeners() {
    this.filterTags.forEach((tag) => {
      tag.addEventListener("click", (evt) => {
        this._togglTagStyle(evt);
        this._disableOtherTags(evt);
      });
    });
  }
}
