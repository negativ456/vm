import Image from "next/image";
import classes from "./ShortAvatar.module.scss";
import Avatar from "./images/avatar.png";
import Avatar40 from './images/avatar40.png'
import Link from "next/link";
import { CSSProperties } from "react";

export function ShortAvatar({ type = "basic" }: { type?: "basic" | "bold" }) {
  const pStyles: CSSProperties = {
    fontFeatureSettings: "'liga' off",
    fontSize: "32px",
    fontWeight: "600",
    lineHeight: "40px" /* 125% */,
    letterSpacing: "-0.32px",
  };

  return (
    <Link href="/profile?profile=org">
      <div className={classes.wrapper} style={{
        gap: type === 'bold' ? '16px' : '8px'
      }}>
        {type === "bold" ? (
          <Image src={Avatar40} alt="Фото профиля"/>
        ) : (
          <Image src={Avatar} alt="Фото профиля" />
        )}
        <p style={type === "bold" ? pStyles : {}}>Игорь Соколов</p>
      </div>
    </Link>
  );
}
