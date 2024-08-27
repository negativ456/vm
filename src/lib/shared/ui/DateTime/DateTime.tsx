import classes from "./DateTime.module.scss";

export function DateTime({ date, time }: { date: string; time: string }) {
  return (
    <div className={classes.wrapper}>
      <span>{date}</span>
      <div className={classes.dot} />
      <span>{time}</span>
    </div>
  );
}
