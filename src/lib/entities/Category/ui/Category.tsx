import Image, {StaticImageData} from "next/image";
import { CategoryType } from "../model/CategoryTypes";
import classes from "./Category.module.scss";
import Photo1 from './photos/1.png'
import Photo2 from './photos/2.png'
import Photo3 from "./photos/3.png";
import Photo4 from "./photos/4.png";
import Photo5 from "./photos/5.png";
import Photo6 from "./photos/6.png";
import Photo7 from "./photos/7.png";
import Photo8 from "./photos/8.png";


export function Category({ category, hardcodeIndex }: { category: CategoryType, hardcodeIndex: number }) {
  let photo: StaticImageData | string = ''
  let text = ''

  switch (hardcodeIndex) {
    case 0:
      photo = Photo1;
      text = 'Общественно-социальные'
      break;
    case 1:
      photo = Photo2;
      text = "Общественно-социальные";
      break;
    case 2:
      photo = Photo3;
      text = "Общественно-социальные";
      break;
    case 3:
      photo = Photo4;
      text = "Общественно-социальные";
      break;
    case 4:
      photo = Photo5;
      text = "Общественно-социальные";
      break;
    case 5:
      photo = Photo6;
      text = "Общественно-социальные";
      break;
    case 6:
      photo = Photo7;
      text = "Общественно-социальные";
      break;
    case 7:
      photo = Photo8;
      text = "Общественно-социальные";
      break;
    default:
      break;
  }

  return (
    <article className={classes.wrapper}>
      <Image src={photo} alt="Фотография категории" className={classes.img} />
      <div className={classes.desc}>
        <h3>{category.title}</h3>
        <p>{category.description}</p>
        <span>{category.quantity} события</span>
      </div>
    </article>
  );
}
