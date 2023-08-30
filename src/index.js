import "./pages/index.scss";
import FilterTag from "./scripts/filter-tags";
import Section from "./scripts/section";
import Card from "./scripts/Card";
import { dataPeterburgCards } from "./scripts/dataPeterburgCards";
import {
  dataFilterTagsTypeEvent,
  dataFilterTagsDays,
  containerTagsTypeDays,
  containerTagsTypeEvt,
} from "./scripts/constants";

/* карточки для слайдера */
const sliderContainerElement = document.querySelector(".slider__elements");
if (sliderContainerElement) {
  const CardforSlider = new Section(
    {
      items: dataPeterburgCards,
      renderer: (item) => {
        const card = new Card(item, "#card");
        const cardElement = card.generate();
        CardforSlider.addItem(cardElement);
      },
    },
    ".slider__elements"
  );
  CardforSlider.renderItems();
}

// добавляем фильтр-теги для секции "тип события"
if (containerTagsTypeEvt) {
  const tagForContainer = new Section(
    {
      items: dataFilterTagsTypeEvent,
      renderer: (item) => {
        const filterTag = new FilterTag(
          ".container-tags_type_evt",
          ".filter-tag",
          item,
          "#filter-tag"
        );
        const tagElement = filterTag.generate();
        tagForContainer.addItem(tagElement);
      },
    },
    ".container-tags_type_evt"
  );
  tagForContainer.renderItems();
}
// добавляем фильтр-теги для секции "дни"
if (containerTagsTypeDays) {
  const tagForContainer = new Section(
    {
      items: dataFilterTagsDays,
      renderer: (item) => {
        const filterTag = new FilterTag(
          ".container-tags_type_days",
          ".filter-tag",
          item,
          "#filter-tag"
        );
        const tagElement = filterTag.generate();
        tagForContainer.addItem(tagElement);
      },
    },
    ".container-tags_type_days"
  );
  tagForContainer.renderItems();
}
