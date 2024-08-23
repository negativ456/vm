import Image from "next/image";
import { CategoryType } from "../model/CategoryTypes";
import classes from "./Category.module.scss";
import CategoryImg from "./CategoryImg.jpg";

export function Category({ category }: { category: CategoryType }) {
  return (
    <article className={classes.wrapper}>
      <Image src={CategoryImg} alt="Фотография категории" className={classes.img} />
      <div className={classes.desc}>
        <h3>{category.title}</h3>
        <p>{category.description}</p>
        <span>{category.quantity} события</span>
      </div>
    </article>
  );
}
