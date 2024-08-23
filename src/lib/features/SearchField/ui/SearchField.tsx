import classes from './SearchField.module.scss'

export function SearchField() {
    return (
        <input type="search" className={classes.input } placeholder='Поиск мероприятий'/>
    )
}