export default class FilterTag {
  constructor(selectorContainerTags, selectorFilterTag, selectorTagClose) {
    this.containerTags = document.querySelector(selectorContainerTags);
    this.filterTags = this.containerTags.querySelectorAll(selectorFilterTag);
    this.selectorTagClose = selectorTagClose;
  }
  //метод меняет стиль тэгов (колбэк слушателя событий)
  _togglTagStyle(evt) {
    const filterTag = evt.target.closest(".filter-tag");
    if (filterTag.classList.contains("filter-tag_type_off")) {
      filterTag.classList.replace("filter-tag_type_off", "filter-tag_type_on");
      if (filterTag.classList.contains("filter-tag_close_yes")) {
        const filterTagClose = document.createElement("div");
        filterTagClose.classList.add("filter-tag__close");
        filterTag.append(filterTagClose);
      }
    } else {
      filterTag.classList.replace("filter-tag_type_on", "filter-tag_type_off");
      if (filterTag.querySelector(".filter-tag__close")) {
        const filterTag = evt.target.closest(".filter-tag");
        filterTag.querySelector(".filter-tag__close").remove();
      }
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
      for (let i = 1; i < filterTagCloseYes.length; i++) {
        filterTagCloseYes[i].classList.replace(
          "filter-tag_type_on",
          "filter-tag_type_off"
        );
        filterTagCloseYes[i].querySelector(".filter-tag__close").remove();
      }
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
      tag.addEventListener("click", this._togglTagStyle);
      tag.addEventListener("click", this._disableOtherTags);
    });
  }
}
