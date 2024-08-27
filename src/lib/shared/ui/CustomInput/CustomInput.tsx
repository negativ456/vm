"use client";

import { useRef, useState } from "react";
import classes from "./CustomInput.module.scss";

export function CustomInput({ type }: { type: "email" | "tel" }) {
  let desc = type === "email" ? "Почта" : "Телефон";
  const inputEl = useRef<HTMLInputElement>(null);

  function focusOnInput() {
    if (inputEl?.current) {
      inputEl.current.focus();
    }
  }

  /*   switch (type) {
    case "email":
      desc = "Почта";
      break;
    case "tel":
      desc = "Телефон";
    default:
      desc = "";
      break;
  } */

  return (
    <div className={classes.wrapper} onClick={focusOnInput}>
      <span>{desc}</span>
      <input type={type} ref={inputEl} />
    </div>
  );
}
