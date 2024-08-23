import { DesignedSelect } from "@/lib/shared";
import classes from "./RatingFilter.module.scss";

export function RatingFilter() {
  const ratings = ["1", "2", "3", "4", "5"];

  return (
    <div className={classes.wrapper}>
      <DesignedSelect options={ratings} description="Сортировать по рейтингу" />
    </div>
  );
}
