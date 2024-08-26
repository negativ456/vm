import Image from "next/image";
import classes from "./DesignedSelect.module.scss";
import ChevronDown from "./chevron_down.svg";

export function DesignedSelect({
  options,
  description,
}: {
  options: string[];
  description: string;
}) {
  return (
    <div className={classes.pseudoWrapper}>
      <select
        name="select"
        id="select"
        defaultValue=""
        className={classes.select}
      >
        <option value="" disabled hidden>
          {description}
        </option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
      <Image src={ChevronDown} alt="" className={classes.chevron} />
    </div>
  );
}
