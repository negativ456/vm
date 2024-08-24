import { EventCard } from "@/lib/entities";
import classes from "./EventsList.module.scss";
import { eventsDB } from "@/lib/entities/Event/model/eventsDB";

export function EventsList() {
  return (
    <div className={classes.list}>
      {eventsDB.map((event, index) => (
        <EventCard event={event} key={index}/>
      ))}
    </div>
  );
}
