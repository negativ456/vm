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

  const handleTranslateXChange = (delta: number) => {
    setTranslateX(-delta * scrollFactor.current);
  };

  useEffect(() => {
    if (ancestorRef.current) {
      setAncestorLength(ancestorRef.current.getBoundingClientRect().width);
    }
    if (childrenRef.current) {
      setChildrenLength(childrenRef.current.getBoundingClientRect().width);
    }
    if (ancestorRef.current && childrenRef.current) {
      scrollFactor.current = childrenLength / ancestorLength;
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
        onTranslateXChange={handleTranslateXChange}
        scrollWidth={(childrenLength / ancestorLength)}
      />
    </section>
  );
}
