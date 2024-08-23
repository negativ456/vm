import classes from "./EventCard.module.scss";
import concertPhoto from "./concert.webp";
import Image from "next/image";
import { EventType } from "../../model";
import { FavouriteBtn, Price, Rating } from "@/lib/shared";

export function EventCard({ event }: { event: EventType }) {
  return (
    <article className={classes.wrapper}>
      <div className={classes.imgWrapper}>
        <Image
          src={concertPhoto}
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
          <Rating rating={event.rating}/>
        </div>
        <span>{event.location}</span>
        <span>{event.datetime.toString()}</span>
      </div>
    </article>
  );
}
