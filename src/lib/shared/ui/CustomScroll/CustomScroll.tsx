"use client";

import { useEffect, useRef } from "react";
import classes from "./CustomScroll.module.scss";

export function CustomScroll({
  setScrollSpace,
  onTranslateXChange,
  scrollWidth,
}: {
  setScrollSpace: (space: number) => void;
  onTranslateXChange: (delta: number) => void;
  scrollWidth: number;
}) {
  const isDragging = useRef(false);
  const translateX = useRef(0);
  const scrollEl = useRef<HTMLDivElement>(null);
  const scrollWrapperEl = useRef<HTMLDivElement>(null);
  const scrollWidthRef = useRef(0);
  const downX = useRef(0);
  const initScrollX = useRef(0);

  function getElTransform(el: HTMLElement) {
    return +window
      .getComputedStyle(el)
      .transform.match(/matrix.*\((.+)\)/)![1]
      .split(",")[4];
  }

  useEffect(() => {
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging.current) {
        if (scrollWrapperEl.current) {
          const wrapperCoords = scrollWrapperEl.current.getBoundingClientRect();
          const delta = initScrollX.current + event.clientX - downX.current;
          if (
            delta >= 0 &&
            delta <= wrapperCoords.width - scrollWidthRef.current
          ) {
            onTranslateXChange(delta);
            translateX.current = delta;
          }
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      downX.current = e.clientX;
      if (scrollEl.current) {
        initScrollX.current = getElTransform(scrollEl.current);
      }
    };

    if (scrollEl.current) {
      scrollEl.current.addEventListener("mousedown", handleMouseDown);
    }
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (scrollEl.current) {
        scrollEl.current.addEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    scrollWidthRef.current = scrollWidth;
    if (scrollWrapperEl.current) {
      const wrapperWidth =
        scrollWrapperEl.current.getBoundingClientRect().width;
      setScrollSpace(wrapperWidth - scrollWidthRef.current);
    }
  }, [scrollWidth]);

  return (
    <div className={classes.wrapper} ref={scrollWrapperEl}>
      <div
        ref={scrollEl}
        className={classes.scroll}
        style={{
          width: `${scrollWidth}px`,
          transform: `translateX(${translateX.current}px)`,
        }}
      ></div>
    </div>
  );
}
