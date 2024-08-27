import { ModalComp } from "@/lib/shared/ui/ModalComp/ModalComp";
import classes from "./SignInUpModal.module.scss";
import { Props } from "react-modal";
import { PrimaryBtn, SignInUpBtn } from "@/lib/shared";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function SignInUpModal(props: Props) {
  const router = useRouter();

  return (
    <ModalComp
      props={{
        isOpen: props.isOpen,
        onRequestClose: props.onRequestClose,
      }}
      width="384px"
    >
      <div className={classes.content}>
        <h3>Вход/регистрация</h3>
        <div className={classes.logins}>
          <SignInUpBtn type="google" />
          <SignInUpBtn type="facebook" />
          <SignInUpBtn type="email" />
        </div>
        <div className={classes.phone}>
          <p>Введите свой телефон</p>
          <input type="tel" placeholder="+7 (___) ___ __ __" />
        </div>
        <Link href="/login" onClick={props.onRequestClose}>
          <PrimaryBtn text="Далее" fullWidth padding="16px 0" />
        </Link>
      </div>
    </ModalComp>
  );
}
