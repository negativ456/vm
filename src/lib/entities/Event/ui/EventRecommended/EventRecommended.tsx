import Image, { StaticImageData } from "next/image";
import { EventType } from "../../model";
import classes from "./EventRecommended.module.scss";
import { FavouriteBtn, Price } from "@/lib/shared";
import Link from "next/link";
import Photo1 from "./photos/1.webp";
import Photo2 from "./photos/2.webp";
import Photo3 from "./photos/3.webp";
import Photo4 from "./photos/4.webp";
import Photo5 from "./photos/5.jpg";

export function EventRecommended({ event }: { event: EventType }) {
  let image: StaticImageData | string = "";

  switch (Math.floor(Math.random() * 5) + 1) {
    case 1:
      image = Photo1;
      break;
    case 2:
      image = Photo2;
      break;
    case 3:
      image = Photo3;
      break;
    case 4:
      image = Photo4;
      break;
    case 5:
      image = Photo5;
      break;
    default:
      image = "";
      break;
  }

  return (
    <Link href={"/event"}>
      <article className={classes.wrapper}>
        <Image
          src={image}
          alt={`${event.type}. ${event.title}`}
          className={classes.background}
        />
        <div>
          <p>{event.type}</p>
          <h3>{event.title}</h3>
        </div>
        <div className={classes.priceFav}>
          <Price price={event.price} />
          <FavouriteBtn />
        </div>
      </article>
    </Link>
  );
}
