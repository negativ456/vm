"use client";

import classes from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "./photos/1.webp";
import Slide2 from "./photos/2.webp";
import Slide3 from "./photos/3.webp";
import Slide4 from "./photos/4.webp";
import Slide5 from "./photos/5.jpg";
import Image from "next/image";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/scss/pagination";

export function Slider() {
  return (
    <Swiper
      modules={[Pagination]}
      className={classes.slider}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{
        el: ".my-custom-pagination-div",
        clickable: true,
        renderBullet: (index, className) => {
          return (
            '<span style="background-color: #1A1A1A" class="' +
            className +
            '">' +
            "</span>"
          );
        },
      }}
    >
      <SwiperSlide>
        <Image src={Slide1} alt="" className={classes.slideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slide2} alt="" className={classes.slideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slide3} alt="" className={classes.slideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slide4} alt="" className={classes.slideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Slide5} alt="" className={classes.slideImg} />
      </SwiperSlide>
    </Swiper>
  );
}
