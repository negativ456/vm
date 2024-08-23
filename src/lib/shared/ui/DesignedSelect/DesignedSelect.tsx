import classes from "./DesignedSelect.module.scss";

export function DesignedSelect({ options, description }: {
  options: string[],
  description: string
}) {
  return (
    <select name="select" id="select" defaultValue="">
      <option value="" disabled hidden>{description}</option>
      {options.map((option, index) => (
        <option value={option} key={index}>{option}</option>
      ))}
    </select>
  );
}
