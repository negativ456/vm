"use client";

import { Logo, PrimaryBtn } from "@/lib/shared";
import { LocationUI } from "@/lib/shared";
import classes from "./Header.module.scss";
import { SearchField } from "@/lib/features";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SignInUpModal } from "../../SignInUpModal/ui/SignInUpModal";

export function Header() {
  const isSearchShow = usePathname() !== "/events-map";
  const [isShowModal, setIsShowModal] = useState(false)
  
  const showModal = () => setIsShowModal(true)
  const closeModal = () => setIsShowModal(false)

  return (
    <header className={classes.header}>
      <SignInUpModal isOpen={isShowModal} onRequestClose={closeModal}/>
      <Logo />
      <LocationUI />
      {isSearchShow && <SearchField height="44px" />}
      <Link href={"/profile"} className={classes.signInBtn} onClick={showModal}>
        <PrimaryBtn text="Войти" />
      </Link>
    </header>
  );
}
