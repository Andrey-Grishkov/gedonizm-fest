//const

export {
  dataFilterTagsTypeEvent,
  dataFilterTagsDays,
  containerTagsTypeDays,
  containerTagsTypeEvt,
};

//переместить массивы в константы
const dataFilterTagsTypeEvent = [
  "все",
  "хочу пойти",
  "разное",
  "лекции",
  "мастер-классы",
  "кафе",
  "музеи",
  "экскурсии",
  "доставка",
  "магазины",
];
const dataFilterTagsDays = [
  "все",
  "сегодня",
  "завтра",
  "послезавтра",
  "чт, 09 сен.",
  "пт, 10 сен.",
  "сб, 11 сен.",
  "вс, 12 сен.",
];
const containerTagsTypeDays = document.querySelector(
  ".container-tags_type_days"
);
const containerTagsTypeEvt = document.querySelector(".container-tags_type_evt");
