import { Category } from "@/lib/entities";
import classes from "./CategoryList.module.scss";
import { categoryDB } from "../model/categoryDB";

export function CategoryList() {
  return (
    <section className={classes.wrapper} id="categories">
      <h2>Категории</h2>
      <div className={classes.list}>
        {categoryDB.map((category, index) => (
          <Category hardcodeIndex={index} category={category} key={index} />
        ))}
      </div>
    </section>
  );
}
