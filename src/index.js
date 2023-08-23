import "./pages/index.scss";
import FilterTag from "./scripts/filter-tags";
const filterTagEvent = new FilterTag(
  ".container-tags",
  ".filter-tag",
  ".filter-tag__close"
);

filterTagEvent.setEventListeners();
