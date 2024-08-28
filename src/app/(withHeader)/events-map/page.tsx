"use client";

import { MapFilter } from "@/lib/features";
import classes from "./EventsMap.module.scss";
import { eventsDB } from "@/lib/entities/Event/model/eventsDB";
import { EventMapPoint } from "@/lib/shared";
import { useState } from "react";
import { MapWithEvents } from "@/lib/widgets/MapWithEvents/ui/MapWithEvents";

export default function EventMap() {
  return (
    <div className={classes.wrapper}>
      <MapFilter />
      <MapWithEvents />
    </div>
  );
}
