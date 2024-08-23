import Link from "next/link";
import classes from './Menu.module.scss'

export function Menu() {
    return (
      <nav className={classes.menu}>
        <Link href="/" className={classes.link}>
          Категории
        </Link>
        <Link href="/" className={classes.link}>
          Карта мероприятий
        </Link>
        <Link href="/" className={classes.link}>
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