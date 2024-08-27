"use client";

import Image from "next/image";
import classes from "./DesignedSelect.module.scss";
import ChevronDown from "./chevron_down.svg";
import { useState } from "react";

export function DesignedSelect({
  options,
  description,
}: {
  options: string[];
  description: string;
}) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.selectInfo} onClick={() => setIsShow(!isShow)}>
        <span>{description}</span>
        <Image src={ChevronDown} alt="" />
      </div>
      {isShow && (
        <ul className={classes.options}>
          {options.map((option, index) => (
            <li className={classes.option} key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
