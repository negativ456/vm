import classes from "./Logo.module.scss";
import Link from "next/link";

export function Logo() {
  return <Link href={"/"} className={classes.title}>вМесте</Link>;
}
