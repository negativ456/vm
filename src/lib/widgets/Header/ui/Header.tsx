import { Logo, PrimaryBtn } from "@/lib/shared";
import { LocationUI } from "@/lib/shared";
import classes from "./Header.module.scss";
import { SearchField } from "@/lib/features";

export function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      <LocationUI />
      <SearchField />
      <PrimaryBtn text="Войти"/>
    </header>
  );
}
