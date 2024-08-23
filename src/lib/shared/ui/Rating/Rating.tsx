import classes from "./Rating.module.scss";
import StarSVG from "./Star.svg";
import Image from "next/image";

export function Rating({ rating }: { rating: number }) {
  return (
    <div className={classes.wrapper}>
      <Image src={StarSVG} alt="Рейтинг мероприятия" />
      <span>{rating}</span>
    </div>
  );
}
