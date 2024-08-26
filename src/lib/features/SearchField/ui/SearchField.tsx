import Image from "next/image";
import classes from "./SearchField.module.scss";
import SearchIcon from "./search.svg";

export function SearchField({ height }: { height: string }) {
  return (
    <div className={classes.wrapper} style={{ height }}>
      <Image src={SearchIcon} alt="" className={classes.searchIcon} />
      <input type="search" placeholder="Поиск мероприятий" />
    </div>
  );
}
