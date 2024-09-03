"use client";

import { CSSProperties, useEffect, useRef } from "react";
import classes from "./CustomScroll.module.scss";

export function CustomScroll({
  setScrollSpace,
  onTranslateChange,
  scrollLength,
  childrenRef,
  direction = "horizontal",
  styles,
  visible = "visible",
  drag = {
    draggable: true,
    showGrabCursor: true,
  },
}: {
  setScrollSpace: (space: number, direction: "horizontal" | "vertical") => void;
  onTranslateChange: (delta: number) => void;
  scrollLength: number;
  childrenRef: HTMLElement | null;
  direction?: "horizontal" | "vertical";
  styles?: {
    wrapper?: CSSProperties;
    scroll?: CSSProperties;
  };
  visible?: "visible" | "onHover" | "none";
  drag?: {
    draggable: boolean;
    showGrabCursor?: boolean;
  };
}) {
  const isDragging = useRef(false);
  const translate = useRef(0);
  const scrollEl = useRef<HTMLDivElement>(null);
  const scrollWrapperEl = useRef<HTMLDivElement>(null);
  const scrollLengthRef = useRef(0);
  const downCoord = useRef(0);
  const initScrollCoord = useRef(0);
  const isReverse = useRef(false);

  function getElTransform(el: HTMLElement) {
    return +window
      .getComputedStyle(el)
      .transform.match(/matrix.*\((.+)\)/)![1]
      .split(",")[direction === "horizontal" ? 4 : 5];
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
          scrollLengthRef.current / 2,
        clientY:
          e.clientY -
          scrollWrapperEl.current.getBoundingClientRect()[
            direction === "horizontal" ? "x" : "y"
          ] -
          getElTransform(scrollEl.current) -
          scrollLengthRef.current / 2,
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
    const handleMouseUp = () => {
      isDragging.current = false;
      isReverse.current = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging.current) {
        if (scrollWrapperEl.current) {
          const wrapperCoords = scrollWrapperEl.current.getBoundingClientRect();
          let delta = 0;
          if (isReverse.current) {
            delta =
              -1 *
              (-initScrollCoord.current +
                event[direction === "horizontal" ? "clientX" : "clientY"] -
                downCoord.current);
          } else {
            delta =
              initScrollCoord.current +
              event[direction === "horizontal" ? "clientX" : "clientY"] -
              downCoord.current;
          }
          const end =
            wrapperCoords[direction === "horizontal" ? "width" : "height"] -
            scrollLengthRef.current;
          if (delta >= 0 && delta <= end) {
            onTranslateChange(delta);
            translate.current = delta;
          } else if (delta < 0) {
            onTranslateChange(0);
            translate.current = 0;
          } else {
            onTranslateChange(end);
            translate.current = end;
          }
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      downCoord.current = direction === "horizontal" ? e.clientX : e.clientY;
      if (scrollEl.current) {
        initScrollCoord.current = getElTransform(scrollEl.current);
      }
    };

    if (scrollEl.current) {
      scrollEl.current.addEventListener("mousedown", handleMouseDown);
    }
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove, {
      passive: false,
    });

    return () => {
      if (scrollEl.current) {
        scrollEl.current.removeEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    scrollLengthRef.current = scrollLength;
    if (scrollWrapperEl.current) {
      const wrapperLength =
        scrollWrapperEl.current.getBoundingClientRect()[
          direction === "horizontal" ? "width" : "height"
        ];
      setScrollSpace(wrapperLength - scrollLengthRef.current, direction);
    }
  }, [scrollLength]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const deltaY = e.deltaY * 0.3; //sensitivity

      const mouseDownEvent = new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        clientX: 0,
        clientY: 0,
      });
      const mouseMoveEvent = new MouseEvent("mousemove", {
        bubbles: true,
        cancelable: true,
        clientX: deltaY,
        clientY: deltaY,
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
    if (drag.draggable) {
      const innerEls = childrenRef?.querySelectorAll("*");

      const handleMouseDown = (e: MouseEvent) => {
        const mouseDownEvent = new MouseEvent("mousedown", {
          bubbles: true,
          cancelable: true,
          clientX: e.clientX,
          clientY: e.clientY,
        });
        if (scrollEl.current) {
          scrollEl.current.dispatchEvent(mouseDownEvent);
        }
      };
      const handleMouseMove = (e: MouseEvent) => {
        if (isDragging.current) {
          isReverse.current = true;

          innerEls?.forEach((el) => {
            if (el instanceof HTMLElement) {
              el.style.pointerEvents = "none";
            }
          });
          if (childrenRef) {
            childrenRef.style.cursor = "grabbing";
          }
          const mouseMoveEvent = new MouseEvent("mousemove", {
            bubbles: true,
            cancelable: true,
            clientX: e.clientX,
            clientY: e.clientY,
          });
          if (scrollEl.current) {
            scrollEl.current.dispatchEvent(mouseMoveEvent);
          }
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
        if (childrenRef) {
          if (drag.showGrabCursor) {
            childrenRef.style.cursor = "grab";
          } else childrenRef.style.cursor = "auto";
        }
      };

      childrenRef?.addEventListener("mousedown", handleMouseDown);
      childrenRef?.addEventListener("mousemove", handleMouseMove, {
        passive: false,
      });
      childrenRef?.addEventListener("mouseup", handleMouseUp);

      return () => {
        childrenRef?.removeEventListener("mousedown", handleMouseDown);
        childrenRef?.removeEventListener("mousemove", handleMouseMove);
        childrenRef?.removeEventListener("mouseup", handleMouseUp);
      };
    }
  });

  useEffect(() => {
    const wrapper = scrollWrapperEl.current;
    if (wrapper) {
      if (visible === "onHover") {
        const onMouseEnter = () => {
          wrapper.style.opacity = "1";
          wrapper.style.transition = "opacity 0.5s ease";
        };
        const onMouseLeave = () => {
          wrapper.style.opacity = "0";
        };

        childrenRef?.addEventListener("mouseenter", onMouseEnter);
        childrenRef?.addEventListener("mouseleave", onMouseLeave);
        scrollWrapperEl.current.addEventListener("mouseenter", onMouseEnter);
        scrollWrapperEl.current.addEventListener("mouseleave", onMouseLeave);

        return () => {
          childrenRef?.removeEventListener("mouseenter", onMouseEnter);
          childrenRef?.removeEventListener("mouseleave", onMouseLeave);
          if (scrollWrapperEl.current) {
            scrollWrapperEl.current.removeEventListener(
              "mouseenter",
              onMouseEnter
            );
            scrollWrapperEl.current.removeEventListener(
              "mouseleave",
              onMouseLeave
            );
          }
        };
      }
      if (visible === "none") {
        wrapper.style.opacity = "0";
      }
    }
  });

  useEffect(() => {
    if (drag.showGrabCursor) {
      if (childrenRef) {
        console.log("set to grab");
        childrenRef.style.cursor = "grab";
      }
    }
  }, [childrenRef]);

  const wrapperElStyles: CSSProperties = {
    ...styles?.wrapper,
    width: direction === "horizontal" ? "100%" : "4px",
    height: direction === "horizontal" ? "4px" : "100%",
    padding: direction === "horizontal" ? "8px 0 0 0" : "0 4px 0 0",
  };

  const scrollElStyles: CSSProperties = {
    ...styles?.scroll,
    height: direction === "horizontal" ? "4px" : `${scrollLength}px`,
    width: direction === "horizontal" ? `${scrollLength}px` : "4px",
    transform: `${direction === "horizontal" ? "translateX" : "translateY"}(${
      translate.current
    }px)`,
  };

  return (
    <div
      className={`${classes.wrapper} ${
        visible === "onHover" ? classes.transparent : ""
      }`}
      ref={scrollWrapperEl}
      onClick={moveToClick}
      style={wrapperElStyles}
    >
      <div
        ref={scrollEl}
        className={classes.scroll}
        style={scrollElStyles}
      ></div>
    </div>
  );
}
