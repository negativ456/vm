import classes from "./CartTickets.module.scss";

export type CartTicketsType = Array<{
  type: string;
  price: string;
}>;

export function CartTickets({ tickets }: { tickets: CartTicketsType }) {
  return (
    <div className={classes.wrapper}>
      <p className={classes.desc}>Билеты</p>
      <div className={classes.tickets}>
        {tickets.map((ticket, index) => (
          <div className={classes.ticket} key={index}>
            <span>{ticket.type}</span>
            <span>{ticket.price} р</span>
          </div>
        ))}
      </div>
      <div className={classes.fee}>
        <p>
          Сервисный сбор <span>1%</span>
        </p>
        <span>198 р</span>
      </div>
    </div>
  );
}
