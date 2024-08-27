import { EventRecommended } from "@/lib/entities";
import classes from "./RecommendedEvents.module.scss";
import { eventsDB } from "../../../entities/Event/model/eventsDB";

export function RecommendedEvents() {
  return (
    <section className={classes.wrapper}>
      <h2 className={classes.title}>Главные события города</h2>{" "}
      {/* for SEO optimization */}
      <div className={classes.scrollWrapper}>
        {eventsDB.map((event, index) => {
          return <EventRecommended event={event} key={index} />;
        })}
      </div>
    </section>
  );
}
