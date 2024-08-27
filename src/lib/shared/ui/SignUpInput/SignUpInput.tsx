import classes from "./SignUpInput.module.scss";

export function SignUpInput({ type }: { type: string }) {
    return <input type="text" placeholder={`${type}*`} className={classes.input} />;
}
