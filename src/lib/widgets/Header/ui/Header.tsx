import { Logo, PrimaryBtn } from "@/lib/shared";
import { LocationUI } from "@/lib/shared";
import classes from "./Header.module.scss";
import { SearchField } from "@/lib/features";
import Link from "next/link";

export function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      <LocationUI />
      <SearchField height="44px"/>
        <Link href={"/profile"}>
            <PrimaryBtn text="Войти"/>
        </Link>
    </header>
  );
}
