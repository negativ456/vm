import Image from "next/image";
import classes from "./PayBtn.module.scss";
import NewCardSVG from "./icons/Card.svg";
import SBPSVG from "./icons/SBP.svg";

export function PayBtn({
  type,
  active,
  onClick,
}: {
  type: "SBP" | "New card";
  active: boolean;
  onClick: () => void;
}) {
  let svg = "";
  let alt = "";

  switch (type) {
    case "SBP":
      svg = SBPSVG;
      alt = "Оплата по СБП";
      break;
    case "New card":
      svg = NewCardSVG;
      alt = "Добавить новую карту";
      break;
    default:
      break;
  }

  return (
    <button
      onClick={onClick}
      className={classes.btn}
      type="submit"
      style={{
        borderColor: active ? "#0181ef" : "#CCC",
      }}
    >
      <Image src={svg} alt={alt} />
    </button>
  );
}
