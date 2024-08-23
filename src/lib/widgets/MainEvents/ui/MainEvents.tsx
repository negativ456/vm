import { EventsFilter } from "@/lib/features";
import classes from "./MainEvents.module.scss";
import { EventsList } from "../../EventsList";

export function MainEvents() {
  return (
    <section className={classes.wrapper}>
      <h1>События в Москве</h1>
      <EventsFilter />
      <EventsList />
    </section>
  );
}
