import classes from "./EventCard.module.scss";
import Image, {StaticImageData} from "next/image";
import { EventType } from "../../model";
import { FavouriteBtn, Price, Rating } from "@/lib/shared";
import Link from "next/link";
import Photo1 from "./photos/1.webp";
import Photo2 from "./photos/2.webp";
import Photo3 from "./photos/3.jpg";
import Photo4 from "./photos/4.jpeg";
import Photo5 from "./photos/5.webp";

export function EventCard({ event }: { event: EventType }) {
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
        <div className={classes.imgWrapper}>
          <Image
            src={image}
            alt={`${event.type}. ${event.title}`}
            className={classes.background}
          />
          <div className={classes.priceFav}>
            <Price price={event.price} />
            <FavouriteBtn />
          </div>
        </div>
        <div className={classes.desc}>
          <h4>{event.title}</h4>
          <div className={classes.userRating}>
            <span>{event.creator.fullname}</span>
            <Rating rating={event.rating} />
          </div>
          <div>{event.location}</div>
          <div>{event.datetime.toLocaleDateString()}</div>
        </div>
      </article>
    </Link>
  );
}
