import { CategoryFilter, DateFilter } from "../../Filters";
import { SearchField } from "../../SearchField";
import classes from "./MapFilter.module.scss";

export function MapFilter() {
  return (
    <div className={classes.wrapper}>
      <DateFilter />
      <CategoryFilter />
      <SearchField height="32px" />
    </div>
  );
}
