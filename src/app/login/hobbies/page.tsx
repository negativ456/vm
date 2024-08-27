"use client";

import classes from "./page.module.scss";
import CrossSVG from "./cross.svg";
import { useState } from "react";
import Image from "next/image";

const hobbies = [
  "Бизнес",
  "Стартапы",
  "Футбол",
  "Детские праздники",
  "Фестивали",
  "Фитнес-занятия",
  "Йога",
  "Походы",
  "Экскурсии",
  "Ярмарки вакансий",
  "Волонтерские акции",
  "Концерты",
  "Фестивали",
  "Марафоны",
  "Мастер-классы",
  "Семинары",
  "Театры",
  "Спектакли",
  "Кинопоказы",
  "Технологии",
  "Футбол",
  "Искусство",
  "IT",
];

export default function HobbiesPage() {
  const [activeHobbies, setActiveHobbies] = useState<Array<number>>([]);

    function deleteHobbie(index: number) {
    setActiveHobbies((current) => current.filter((hobbie) => hobbie !== index));
    }
    function addHobbie(index: number) {
        if (!activeHobbies.includes(index)) {
            setActiveHobbies([...activeHobbies, index])
        }
    }

  return (
    <div className={classes.wrapper}>
      <h1>Укажите свои интересы</h1>
      <div className={classes.hobbies}>
        {hobbies.map((hobbie, index) => (
          <button
            key={index}
            className={`${classes.hobbie} ${
              activeHobbies.includes(index) ? classes.active : ""
            }`}
            onClick={() => addHobbie(index)}
          >
            {hobbie}
            {activeHobbies.includes(index) && (
              <Image
                src={CrossSVG}
                alt=""
                onClick={() => deleteHobbie(index)}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
