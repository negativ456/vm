"use client";

import { EventRecommended } from "@/lib/entities";
import classes from "./RecommendedEvents.module.scss";
import { eventsDB } from "../../../entities/Event/model/eventsDB";
import { CustomScroll } from "@/lib/shared/ui/CustomScroll/CustomScroll";
import { useScrollSetup } from "@/lib/shared/ui/CustomScroll/hook";

export function RecommendedEvents() {
  const [
    ancestorRef,
    childrenRef,
    translateX,
    childrenRefReactive,
    handleTranslateXChange,
    setScrollSpace,
  ] = useScrollSetup<HTMLDivElement, HTMLDivElement>();

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
        onTranslateChange={handleTranslateXChange}
        scrollLength={300}
      />
    </section>
  );
}
