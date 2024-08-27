"use client";
import React, { useState } from "react";
import Image from "next/image";
import eventPage from "../assets/event_page.png";
import arrowRight from "../../../shared/assets/arrow-right.svg";
import avatar from "../assets/avatar.png";
import star from "../../../shared/assets/star.svg";
import favorite from "../../../shared/assets/favorite.svg";
import minus from "../assets/minus.svg";
import plus from "../assets/plus.svg";
import cls from "./EventPage.module.scss";
import classNames from "classnames";
import classes from "@/lib/widgets/EventsList/ui/EventsList.module.scss";
import { eventsDBSmall } from "@/lib/entities/Event/model/eventsDB";
import { EventCard } from "@/lib/entities";
import { BuyTicketsModal } from "@/lib/widgets/BuyTicketsModal/ui/BuyTicketsModal";

const EventPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={cls.container}>
      <BuyTicketsModal isOpen={isModalOpen} onRequestClose={closeModal} />
      <div className={cls.top_info}>
        <Image
          className={cls.top_info_img}
          src={eventPage}
          alt={"eventsPage"}
        ></Image>
        <div className={cls.top_info_right}>
          <div className={cls.top_info_link}>
            Бизнес
            <Image src={arrowRight} alt={"arrow-right"}></Image>
          </div>
          <h1 className={cls.top_info_title}>
            Международный Форум «ALFA PROPERTY EXPO»
          </h1>
          <p className={cls.top_info_text}>
            Москва, Гостиница Continental, ул Профсоюзная, 83к3
          </p>
          <div className={classNames(cls.top_info_text, cls.top_info_date)}>
            <p>Сб, 26 июня</p>
            <p>*</p>
            <p>19:00-20:30 </p>
          </div>
          <div className={cls.avatar}>
            <Image className={cls.avatar_img} src={avatar} alt={""}></Image>
            <div className={cls.avatar_content}>
              <div className={cls.avatar_name}>
                <p>Алексей Секачев</p>
                <div className={cls.stars}>
                  <Image src={star} alt={"star"}></Image>
                  <p>4.7</p>
                </div>
              </div>
              <p>Организатор</p>
            </div>
          </div>
          <div className={cls.buttons}>
            <button className={cls.button_blue} onClick={openModal}>
              Выбрать билеты
            </button>
            <button className={cls.button_light}>
              <Image src={favorite} alt={"favorite"}></Image>
            </button>
            <button className={cls.button_light}>Найти компанию</button>
            <button className={cls.button_white}>Подарить билет</button>
          </div>
        </div>
      </div>
      <div className={cls.content}>
        <div className={cls.content1}>
          <h3>О мероприятии</h3>
          <p className={cls.text1}>
            Международный Форум «ALFA PROPERTY EXPO» проводится совместно с
            Альфа-Банк. Организуется для опытных инвесторов, представителей
            международных фондов, а также владельцев и топ-менеджеров среднего и
            крупного бизнеса, которые стремятся к международному развитию. Мы
            собрали вместе в одном зале профессионалов в сфере инвестиций и
            предпринимательства, для презентации перспективных проектов от
            ведущих компаний.
          </p>
          <p className={cls.text2}>
            Международный Форум «ALFA PROPERTY EXPO» станет площадкой для
            встречи экспертов инвестиционного сектора. Участники, включая
            квалифицированных инвесторов и представителей брокерских фирм,
            обсудят ведущие инвестиционные стратегии в российских и
            международных проектах. Событие привлечет внимание топ-менеджеров из
            крупнейших фондов и бизнес-клубов Москвы. Доступ к участию
            предоставляется как в оффлайн, так и в онлайн форматах. Форум
            выделит ключевые инвестиционные проекты на сумму в сотни миллиардов
            рублей для внутренних и зарубежных инвесторов.
          </p>
        </div>
        <div className={cls.block}>
          <h3>Адрес</h3>
          <p>Москва, Гостиница Continental, ул Профсоюзная, 83к3</p>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <iframe
              src="https://yandex.com/map-widget/v1/?ll=37.621314%2C55.752878&z=15.2"
              width="700"
              height="400"
              frameBorder="1"
              allowFullScreen={true}
              style={{ position: "relative" }}
            ></iframe>
          </div>
        </div>
        <div className={cls.block}>
          <h3>Выберите билеты</h3>
          <div className={cls.tickets_list}>
            <div className={cls.ticket}>
              <div>
                <h4>Посещение Форума</h4>
                <p>Посещение Форума</p>
              </div>
              <div className={cls.ticket_selector}>
                <button>
                  <Image src={minus} alt={"minus"}></Image>
                </button>
                <p>0</p>
                <button>
                  <Image src={plus} alt={"plus"}></Image>
                </button>
              </div>
            </div>
            <div className={cls.ticket}>
              <div>
                <h4>VIP</h4>
                <p>19 800 р</p>
              </div>
              <div className={cls.ticket_selector}>
                <button>
                  <Image src={minus} alt={"minus"}></Image>
                </button>
                <p>0</p>
                <button>
                  <Image src={plus} alt={"plus"}></Image>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.block}>
          <h3>Отзывы участников</h3>
          <div>
            <div className={cls.review}>
              <div className={cls.review_top}>
                <div className={cls.avatar}>
                  <Image
                    className={cls.avatar_img}
                    src={avatar}
                    alt={"avatar"}
                  ></Image>
                  <p className={cls.avatar_name}>Данила Горшков</p>
                </div>
                <div className={cls.review_date}>
                  <p>1 июня 2024</p>
                  <div>
                    {[1, 2, 3, 4, 5].map((el) => (
                      <Image src={star} alt={"star"} key={el}></Image>
                    ))}
                  </div>
                </div>
              </div>
              <p>
                Мои восторг и почтение! Прекрасная постановка, оригинальное
                исполнение, голоса и игра актеров, декорации - просто
                фантастика)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.block}>
        <h3>Еще события от Алексей Секачев</h3>
        <div className={classes.list}>
          {eventsDBSmall.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventPage;
