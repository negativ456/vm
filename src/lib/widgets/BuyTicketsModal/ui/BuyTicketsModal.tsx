import classes from "./BuyTicketsModal.module.scss";
import Image from "next/image";
import {
  DateTime,
  CartTickets,
  CustomInput,
  PayBtn,
  PrimaryBtn,
} from "@/lib/shared";
import { ModalComp } from "@/lib/shared/ui/ModalComp/ModalComp";
import { Props } from "react-modal";

const tickets = [
  {
    type: "VIP",
    price: '19 800',
  },
];

export function BuyTicketsModal(props: Props) {
  return (
    <ModalComp
      props={{
        isOpen: props.isOpen,
        onRequestClose: props.onRequestClose,
      }}
      width="1008px"
    >
      <div className={classes.content}>
        <div className={classes.desc}>
          <h2>Международный Форум «ALFA PROPERTY EXPO»</h2>
          <DateTime date="Сб, 26 июня" time="19:00-20:30" />
          <span className={classes.address}>
            Москва, Гостиница Continental, <br /> ул. Профсоюзная, 83к3
          </span>
          <CartTickets tickets={tickets} />
          <div className={classes.total}>
            <h4>Итого</h4>
            <span>19 998 р</span>
          </div>
        </div>
        <div className={classes.pay}>
          <h3 className={classes.desc}>Оплата</h3>
          <h6 className={classes.yourData}>Ваши данные</h6>
          <div className={classes.inputsWrapper}>
            <CustomInput type="tel" />
            <CustomInput type="email" />
          </div>
          <div className={classes.payMethod}>
            <p>Способ оплаты</p>
            <div className={classes.pays}>
              <PayBtn type="SBP" />
              <PayBtn type="New card" />
            </div>
          </div>
          <PrimaryBtn text="Оплатить 19 998 р" fullWidth padding="16px 0"/>
        </div>
      </div>
    </ModalComp>
  );
}
