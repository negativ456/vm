import { DesignedSelect } from "@/lib/shared";
import classes from "./CategoryFilter.module.scss";

export function CategoryFilter() {
  const categories = [
    "Культурные",
    "Культурные",
    "Культурные",
    "Культурные",
    "Культурные",
    "Культурные",
    "Культурные",
    "Культурные",
  ];
  // @ts-ignore
  return <DesignedSelect options={categories} description="Категория" width="128px"/>;
}
