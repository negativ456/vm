import classes from './PrimaryBtn.module.scss'

export function PrimaryBtn({ text }: {
    text: string
}) {
    return (
        <button className={classes.btn}>{text}</button>
    )
}