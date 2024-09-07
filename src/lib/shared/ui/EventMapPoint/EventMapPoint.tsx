"use client";

import { useEffect, useState } from "react";
import classes from "./EventMapPoint.module.scss";
import { EventType, ShortAvatar } from "@/lib/entities";
import ChevronRightSVG from "./icons/chevron_right.svg";
import Image from "next/image";
import { Rating } from "../Rating";
import CalendarSVG from "./icons/calendar.svg";
import FacebookSvg from "./icons/fb.svg";
import LocationSVG from "./icons/location.svg";
import PhoneSVG from "./icons/phone.svg";
import TelegramSVG from "./icons/tg.svg";
import VkSVG from "./icons/vk.svg";
import { Cashback } from "../Cashback";
import { PrimaryBtn } from "../PrimaryBtn";
import { FavouriteBtn } from "../FavouriteBtn";
import Link from "next/link";
import { Slider } from "../Slider";
import { CroppedText } from "../CroppedText";
import { CustomScroll } from "../CustomScroll/CustomScroll";
import { useScrollSetup } from "../CustomScroll/hook";

export function EventMapPoint({
  isActive,
  event,
  expanded,
}: {
  isActive?: boolean;
  event?: EventType;
  expanded: boolean;
}) {
  const colorBlue = "#0181ef";
  const colorWhite = "#FFF";
  const [x, setX] = useState("0%");
  const [y, setY] = useState("0%");

  const [
    ancestorRef,
    childrenRef,
    translateY,
    setTranslateY
  ] = useScrollSetup<HTMLDivElement, HTMLDivElement>();

  useEffect(() => {
    setX(`${Math.floor(Math.random() * (80 - 20 + 1)) + 20}%`);
    setY(`${Math.floor(Math.random() * (80 - 20 + 1)) + 20}%`);
  }, []);

  return (
    <>
      {isActive && expanded && event && (
        <div
          className={classes.eventInfo}
          onClick={(e) => e.stopPropagation()}
          ref={ancestorRef}
        >
          <CustomScroll
            ancestorRef={ancestorRef.current}
            childrenRef={childrenRef.current}
            setTranslate={setTranslateY}
            scrollLength={400}
            direction="vertical"
            drag={{
              draggable: true,
              showGrabCursor: false
            }}
            styles={{
              wrapper: {
                position: "absolute",
                right: '0'
              },
            }}
          />
          <div
            className={classes.scrollWrapper}
            ref={childrenRef}
            style={{
              transform: `translateY(${translateY}px)`,
            }}
          >
            <Slider />
            <div className="my-custom-pagination-div" />
            <Link href="/event">
              <h2>{event.title}</h2>
            </Link>
            <div className={classes.type}>
              <Link href="/event">
                <span>{event.type}</span>
              </Link>
              <Link href="/event" className={classes.chevronWrapper}>
                <Image src={ChevronRightSVG} alt="" />
              </Link>
            </div>
            <div className={classes.avatarRating}>
              <ShortAvatar />
              <Link href="/profile?profile=org">
                <Rating rating={4.7} />
              </Link>
            </div>
            <div className={classes.desc}>
              <CroppedText text={event.description} length={100} />
            </div>
            <div className={classes.contactsInfo}>
              <div className={classes.contact}>
                <Image src={LocationSVG} alt="" />
                <span>{event.location}</span>
              </div>
              <div className={classes.contact}>
                <Image src={CalendarSVG} alt="" />
                <span>1 июля 2024</span>
              </div>
              <div className={classes.number}>
                <Image src={PhoneSVG} alt="" />
                <div className={classes.numbersList}>
                  <a href="tel:+7 (495) 954-39-00">+7 (495) 954-39-00</a>
                  <a href="tel:+7 (495) 954-39-00">+7 (495) 954-39-00</a>
                  <a href="https://www.fmm.ru" target="_blank">
                    www.fmm.ru
                  </a>
                  <div className={classes.socialNetworks}>
                    <Image
                      src={TelegramSVG}
                      alt="Написать в телеграмм"
                      className={classes.socialNet}
                    />
                    <Image
                      src={VkSVG}
                      alt="Написать в ВК"
                      className={classes.socialNet}
                    />
                    <Image
                      src={FacebookSvg}
                      alt="Написать в Facebook"
                      className={classes.socialNet}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.bottom}>
              <div className={classes.price}>
                <div className={classes.marginWrapper}>
                  <span className={classes.total}>1 800 р</span>
                  <Cashback plus={16} />
                </div>
              </div>
              <div className={classes.btns}>
                <Link href="/event#select-tickets">
                  <PrimaryBtn text="Купить" />
                </Link>
                <FavouriteBtn type="basic" />
                <PrimaryBtn text="Найти компанию" type="secondary" />
              </div>
            </div>
          </div>
        </div>
      )}
      {x !== "0%" && (
        <div
          className={classes.outer}
          style={{
            top: y,
            left: x,
            backgroundColor: isActive ? colorWhite : colorBlue,
            cursor: expanded ? "pointer" : "auto",
          }}
        >
          <div
            className={classes.middle}
            style={{
              backgroundColor: isActive ? colorBlue : colorWhite,
            }}
          >
            <div
              className={classes.inner}
              style={{
                backgroundColor: isActive ? colorWhite : colorBlue,
              }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}
