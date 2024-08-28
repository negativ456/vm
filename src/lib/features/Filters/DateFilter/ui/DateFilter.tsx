import { DesignedSelect } from "@/lib/shared";
import classes from "./DateFilter.module.scss";

export function DateFilter() {
  const dates = [
    "1 сентября",
    "2 сентября",
    "3 сентября",
    "4 сентября",
    "5 сентября",
    "6 сентября",
  ];

  return <DesignedSelect options={dates} description="Дата"/>;
}
