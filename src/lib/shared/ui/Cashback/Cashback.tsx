import classes from "./Cashback.module.scss";
import TollSVG from "./icons/toll.svg";
import Image from "next/image";

export function Cashback({ plus }: { plus: number }) {
  return (
    <div className={classes.wrapper}>
      <Image src={TollSVG} alt="Кэшбек!" />
      <span>+{plus}</span>
    </div>
  );
}
