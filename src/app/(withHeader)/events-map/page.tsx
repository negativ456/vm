import { MapFilter } from "@/lib/features";
import classes from "./EventsMap.module.scss";

export default function EventMap() {
  return (
    <div className={classes.wrapper}>
      <MapFilter />
      <iframe
        className={classes.map}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A2ca0849fc2e8aa788fdbffcc2fb54ee83aaff4b2d9dafd54af7e3592829501c8&amp;source=constructor"
      ></iframe>
    </div>
  );
}
