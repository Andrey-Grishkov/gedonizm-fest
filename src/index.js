import "./pages/index.scss";
import FilterTag from "./scripts/filter-tags";

const containerTags = document.querySelector(".container-tags");
if (containerTags) {
  const filterTagEvent = new FilterTag(".container-tags", ".filter-tag");
  filterTagEvent.setEventListeners();
}
