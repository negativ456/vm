import Image from 'next/image'
import classes from './UserBtn.module.scss'
import ChatSVG from './icons/chat.svg'
import FavouriteSVG from './icons/favorite.svg'
import TicketSVG from './icons/ticket.svg'

export function UserBtn({ type }: {
    type: 'chat' | 'fav' | 'tickets'
}) {
    let svg = ''
    let text = ''

    switch (type) {
        case 'chat':
            svg = ChatSVG
            text = 'Чат'
            break;
        case 'fav':
            svg = FavouriteSVG
            text = 'Избранное'
            break;
        case 'tickets':
            svg = TicketSVG;
            text = 'Мои билеты'
            break
        default:
            break;
    }

    return (
        <div className={classes.wrapper}>
            <Image src={svg} alt='' />
            <span>{text}</span>
        </div>
    )
}