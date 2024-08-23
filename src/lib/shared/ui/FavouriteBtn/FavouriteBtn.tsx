import classes from './FavouriteBtn.module.scss'
import Image from "next/image";
import FavouriteSVG from './favorite.svg'

export function FavouriteBtn() {
    return (
      <button className={classes.btn}>
        <Image src={FavouriteSVG} alt="Добавить в избранное" />
      </button>
    );
}