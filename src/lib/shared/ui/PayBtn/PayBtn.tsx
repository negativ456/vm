import Image from "next/image";
import classes from "./PayBtn.module.scss";
import NewCardSVG from "./icons/Card.svg";
import SBPSVG from "./icons/SBP.svg";

export function PayBtn({ type }: { type: "SBP" | "New card" }) {
  let svg = "";
  let alt = "";

  switch (type) {
    case "SBP":
      svg = SBPSVG;
      alt = "Оплата по СБП";
      break
    case "New card":
      svg = NewCardSVG;
      alt = "Добавить новую карту";
      break
    default:
      break;
  }

  return (
    <button className={classes.btn} type="submit">
      <Image src={svg} alt={alt} />
    </button>
  );
}
