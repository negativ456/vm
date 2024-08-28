"use client";

import {
  Cashback,
  DesignedSelect,
  Logo,
  PrimaryBtn,
  UserBtn,
} from "@/lib/shared";
import classes from "./Header.module.scss";
import { SearchField } from "@/lib/features";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SignInUpModal } from "../../SignInUpModal/ui/SignInUpModal";
import { useAppSelector } from "@/hooks";
import { Provider } from "react-redux";
import store from "@/redux";
import Image from "next/image";
import Avatar from "./icons/avatar.png";

export function Header() {
  const isSearchShow = usePathname() !== "/events-map";
  const [isShowModal, setIsShowModal] = useState(false);

  const isAuth = useAppSelector((state) => state.globalSlice.user.isAuth);

  const showModal = () => setIsShowModal(true);
  const closeModal = () => setIsShowModal(false);

  return (
    <header className={classes.header}>
      <SignInUpModal isOpen={isShowModal} onRequestClose={closeModal} />
      <Logo />
      <DesignedSelect
        description="Саратов"
        options={[
          "Москва",
          "Челябинск",
          "Ростов-на-Дону",
          "Волгоград",
          "Рио-де-Жанейро",
          "Сомали",
        ]}
        isBorder={false}
      />
      {isSearchShow && <SearchField height="44px" />}
      {isAuth ? (
        <div className={classes.auth}>
          <UserBtn type="chat" />
          <UserBtn type="fav" />
          <UserBtn type="tickets" />
          <Cashback plus={0} />
          <Link href={"/profile"}>
            <Image src={Avatar} alt="" style={{ cursor: "pointer" }} />
          </Link>
        </div>
      ) : (
        <PrimaryBtn text="Войти" onClick={showModal} toRightSide />
      )}
    </header>
  );
}
