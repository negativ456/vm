import { PrimaryBtn, SignUpInput } from "@/lib/shared";
import classes from "./LoginPage.module.scss";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className={classes.wrapper}>
      <h1>Создание профиля</h1>
      <div className={classes.profileToggle}>
        <button type="button">Пользователь</button>
        <button type="button">Организация</button>
      </div>
      <div className={classes.inputs}>
        <SignUpInput type="Имя" />
        <SignUpInput type="Фамилия" />
        <SignUpInput type="Город проживания" />
        <SignUpInput type="Адрес" />
      </div>
      <Link className={classes.btnWrapper} href="/login/hobbies">
        <PrimaryBtn text="Далее" />
      </Link>
    </div>
  );
}
