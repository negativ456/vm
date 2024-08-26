import Image from "next/image";
import { EventType } from "../../model";
import classes from "./EventRecommended.module.scss";
import concertPhoto from "./concert.jpg";
import { FavouriteBtn, Price } from "@/lib/shared";
import Link from "next/link";

export function EventRecommended({ event }: { event: EventType }) {
  return (
      <Link href={"/event"}>
          <article className={classes.wrapper}>
              <Image
                  src={concertPhoto}
                  alt={`${event.type}. ${event.title}`}
                  className={classes.background}
              />
              <div>
                  <p>{event.type}</p>
                  <h3>{event.title}</h3>
              </div>
              <div className={classes.priceFav}>
                  <Price price={event.price}/>
                  <FavouriteBtn/>
              </div>
          </article>
      </Link>
  );
}
