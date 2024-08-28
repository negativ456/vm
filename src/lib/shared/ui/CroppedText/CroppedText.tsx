"use client";

import { useState } from "react";
import classes from "./CroppedText.module.scss";

export function CroppedText({
  text,
  length,
}: {
  text: string;
  length: number;
}) {
  const croppedText = text.slice(0, length);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <p className={classes.wrapper}>
      {isExpanded ? text : croppedText}...{" "}
      <span onClick={() => setIsExpanded((current) => !current)}>
        {isExpanded ? "Свернуть описание" : "Развернуть описание"}
      </span>
    </p>
  );
}
