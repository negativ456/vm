"use client";

import { useEffect, useRef } from "react";
import classes from "./CustomScroll.module.scss";

export function CustomScroll({
  setScrollSpace,
  onTranslateXChange,
  scrollWidth,
  childrenRef,
}: {
  setScrollSpace: (space: number) => void;
  onTranslateXChange: (delta: number) => void;
  scrollWidth: number;
  childrenRef: HTMLElement | null;
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

  function moveToClick(e: React.MouseEvent) {
    if (scrollEl.current && scrollWrapperEl.current) {
      const mouseDownEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        clientX: 0,
        clientY: 0,
      });
      const mouseMoveEvent = new MouseEvent("mousemove", {
        bubbles: true,
        cancelable: true,
        clientX:
          e.clientX -
          scrollWrapperEl.current.getBoundingClientRect().x -
          getElTransform(scrollEl.current) -
          scrollWidthRef.current / 2,
        clientY: 0,
      });
      const mouseUpEvent = new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        clientX: 0,
        clientY: 0,
      });

      scrollEl.current.dispatchEvent(mouseDownEvent);
      scrollEl.current.dispatchEvent(mouseMoveEvent);
      scrollEl.current.dispatchEvent(mouseUpEvent);
    }
  }

  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
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

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const mouseDownEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        clientX: 0,
        clientY: 0,
      });
      const mouseMoveEvent = new MouseEvent("mousemove", {
        bubbles: true,
        cancelable: true,
        clientX: e.deltaY * 0.3, //sensitivity
        clientY: 0,
      });
      const mouseUpEvent = new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        clientX: 0,
        clientY: 0,
      });
      if (scrollEl.current) {
        scrollEl.current.dispatchEvent(mouseDownEvent);
        scrollEl.current.dispatchEvent(mouseMoveEvent);
        scrollEl.current.dispatchEvent(mouseUpEvent);
      }
    };

    childrenRef?.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  });

  useEffect(() => {
    const innerEls = childrenRef?.querySelectorAll("*");

    const handleMouseDown = (e: MouseEvent) => {
      const mouseDownEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        clientX: -e.clientX,
        clientY: 0,
      });
      if (scrollEl.current) {
        scrollEl.current.dispatchEvent(mouseDownEvent);
      }
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        innerEls?.forEach((el) => {
          if (el instanceof HTMLElement) {
            el.style.pointerEvents = "none";
          }
        });
      }
      const mouseMoveEvent = new MouseEvent("mousemove", {
        bubbles: true,
        cancelable: true,
        clientX: -e.clientX,
        clientY: 0,
      });
      if (scrollEl.current) {
        scrollEl.current.dispatchEvent(mouseMoveEvent);
      }
    };
    const handleMouseUp = () => {
      const mouseUpEvent = new MouseEvent("mouseup", {
        bubbles: true,
        cancelable: true,
        clientX: 0,
        clientY: 0,
      });
      if (scrollEl.current) {
        scrollEl.current.dispatchEvent(mouseUpEvent);
      }
      innerEls?.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.pointerEvents = "auto";
        }
      });
    };

    childrenRef?.addEventListener("mousedown", handleMouseDown);
    childrenRef?.addEventListener("mousemove", handleMouseMove);
    childrenRef?.addEventListener("mouseup", handleMouseUp);

    return () => {
      childrenRef?.addEventListener("mousedown", handleMouseDown);
      childrenRef?.addEventListener("mousemove", handleMouseMove);
      childrenRef?.addEventListener("mouseup", handleMouseUp);
    };
  });

  return (
    <div
      className={classes.wrapper}
      ref={scrollWrapperEl}
      onClick={moveToClick}
    >
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
