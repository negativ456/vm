"use client";

import Link from "next/link";
import classes from "./Menu.module.scss";
import { usePathname } from "next/navigation";

export function Menu() {
  const marginBottom = usePathname() === "/events-map" ? "16px" : "32px";

  return (
    <nav className={classes.menu} style={{ marginBottom }}>
      <Link href="/#categories" className={classes.link}>
        Категории
      </Link>
      <Link href="/events-map" className={classes.link}>
        Карта мероприятий
      </Link>
      <Link href="/" className={classes.link}>
        Торговая площадка
      </Link>
      <Link href="/" className={classes.link}>
        Создать мероприятие
      </Link>
      <Link href="/" className={classes.link}>
        Soon
      </Link>
    </nav>
  );
}
