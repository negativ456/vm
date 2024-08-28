import { CSSProperties } from "react";
import classes from "./PrimaryBtn.module.scss";

export function PrimaryBtn({
  text,
  fullWidth,
  padding,
  onClick,
  type = "primary",
  toRightSide,
}: {
  text: string;
  fullWidth?: boolean;
  padding?: string;
  onClick?: () => void;
  type?: "primary" | "secondary";
  toRightSide?: boolean;
}) {
  let btnStyles: CSSProperties = {};

  switch (type) {
    case "primary":
      btnStyles = {
        color: "#FFF",
        backgroundColor: "#0181EF",
      };
      break;
    case "secondary":
      btnStyles = {
        color: "#0181EF",
        backgroundColor: "#E6F2FD",
      };
      break;
    default:
      break;
  }

  return (
    <button
      className={classes.btn}
      style={{
        width: fullWidth ? "100%" : "auto",
        padding: padding || "10px 16px",
        margin: toRightSide ? "0 0 0 auto" : "",
        ...btnStyles,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
