import classes from "./EventsFilter.module.scss";
import {
  CategoryFilter,
  DateFilter,
  RatingFilter,
  VenueFilter,
} from "../../Filters";

export function EventsFilter() {
  return (
    <div className={classes.wrapper}>
      <DateFilter />
      <CategoryFilter />
      <VenueFilter />
      <RatingFilter />
    </div>
  );
}
