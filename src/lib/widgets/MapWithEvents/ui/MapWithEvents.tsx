"use client";

import classes from "./MapWithEvents.module.scss";
import { eventsDB } from "@/lib/entities/Event/model/eventsDB";
import { EventMapPoint } from "@/lib/shared";
import { useState } from "react";

export function MapWithEvents({ mapHeight }: { mapHeight?: string }) {
  const [activeEvent, setActiveEvent] = useState<number>(-1);

  function selectEvent(index: number) {
    if (activeEvent === index) {
      setActiveEvent(-1);
    } else {
      setActiveEvent(index);
    }
  }
  return (
    <div className={classes.mapWrapper}>
      <iframe
        style={{
          height: mapHeight || "auto",
        }}
        className={classes.map}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A2ca0849fc2e8aa788fdbffcc2fb54ee83aaff4b2d9dafd54af7e3592829501c8&amp;source=constructor"
      ></iframe>
      {eventsDB.slice(0, 7).map((event, index) => (
        <div key={index} onClick={() => selectEvent(index)}>
          <EventMapPoint
            isActive={activeEvent === index}
            event={event}
            expanded={true}
          />
        </div>
      ))}
    </div>
  );
}
