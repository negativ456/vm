import { CSSProperties } from "react";
import classes from "./PrimaryBtn.module.scss";

export function PrimaryBtn({
  text,
  fullWidth,
  padding,
}: {
  text: string;
  fullWidth?: boolean;
  padding?: string;
}) {
  return (
    <button
      className={classes.btn}
      style={{
        width: fullWidth ? "100%" : "auto",
        padding: padding || "10px 16px",
      }}
    >
      {text}
    </button>
  );
}
