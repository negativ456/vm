import { useRouter } from "nextjs-toploader/app";
import classes from "./Logo.module.scss";
import Link from "next/link";

export function Logo() {
  const router = useRouter();

  return (
    <Link href={"/"} className={classes.title}>
      вМесте
    </Link>
  );
}
