"use client";

import { PrimaryBtn, SignUpInput } from "@/lib/shared";
import classes from "./LoginPage.module.scss";
import Link from "next/link";
import { RefObject, useEffect, useRef, useState } from "react";

export default function LoginPage() {
  const [activeBtn, setActiveBtn] = useState<'user' | 'organizer'>('user')

  return (
    <div className={classes.wrapper}>
      <h1>Создание профиля</h1>
      <div className={classes.profileToggle}>
        <button type="button"
          className={activeBtn === 'user' ? classes.active : ''}
          onClick={() => setActiveBtn('user')}
        >
          Пользователь
        </button>
        <button
          type="button"
          className={activeBtn === 'organizer' ? classes.active : ''}
          onClick={() => setActiveBtn('organizer')}
        >
          Организация
        </button>
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
