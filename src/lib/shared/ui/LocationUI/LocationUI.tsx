import classes from "./LocationUI.module.scss";

export function LocationUI() {
  return (
    <select name="location" id="location" className={classes.select}>
      <option value="Саратов">Саратов</option>
      <option value="Москва">Москва</option>
      <option value="Санкт-Петербург">Санкт-Петербург</option>
      <option value="Екатеринбург">Екатеринбург</option>
      <option value="Владивосток">Владивосток</option>
      <option value="Пенза">Пенза</option>
      <option value="Мурманск">Мурманск</option>
    </select>
  );
}
