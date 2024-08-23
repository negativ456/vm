import classes from './Price.module.scss'

export function Price({ price }: {
    price: string
}) {
    return (
        <span className={classes.span}>{price}</span>
    )
}