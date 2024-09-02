"use client";

import { EventRecommended } from "@/lib/entities";
import classes from "./RecommendedEvents.module.scss";
import { eventsDB } from "../../../entities/Event/model/eventsDB";
import { useEffect, useRef, useState } from "react";
import { CustomScroll } from "@/lib/shared/ui/CustomScroll/CustomScroll";

export function RecommendedEvents() {
  const ancestorRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const [ancestorLength, setAncestorLength] = useState(0);
  const [childrenLength, setChildrenLength] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const scrollFactor = useRef(0);
  const [childrenRefReactive, setChildrenRefReactive] = useState<HTMLElement | null>(null);

  const handleTranslateXChange = (delta: number) => {
    setTranslateX(-delta * scrollFactor.current);
  };

  const setScrollSpace = (space: number) => {
    if (childrenRef.current && ancestorRef.current) {
      const childrenWidth = childrenRef.current.getBoundingClientRect().width;
      const ancestorWidth = ancestorRef.current.getBoundingClientRect().width;
      scrollFactor.current = (childrenWidth - ancestorWidth) / space;
    }
  };

  useEffect(() => {
    const children = childrenRef.current;
    const ancestor = ancestorRef.current;

    if (ancestor) {
      setAncestorLength(ancestorRef.current.getBoundingClientRect().width);
    }
    if (children) {
      setChildrenLength(childrenRef.current.getBoundingClientRect().width);
      setChildrenRefReactive(children);
    }
  });

  return (
    <section className={classes.wrapper} ref={ancestorRef}>
      {/* Hidden <h2> title for SEO optimization */}
      <h2 className={classes.title}>Главные события города</h2>
      <div
        className={classes.childrenWrapper}
        ref={childrenRef}
        style={{
          transform: `translateX(${translateX}px)`,
        }}
      >
        {eventsDB.map((event, index) => {
          return <EventRecommended event={event} key={index} />;
        })}
      </div>
      <CustomScroll
        childrenRef={childrenRefReactive}
        setScrollSpace={setScrollSpace}
        onTranslateXChange={handleTranslateXChange}
        scrollWidth={300}
      />
    </section>
  );
}
