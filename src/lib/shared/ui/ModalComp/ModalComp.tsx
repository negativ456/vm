import Image from "next/image";
import classes from "./ModalComp.module.scss";
import Modal, { Props } from "react-modal";
import CrossSVG from "./icons/cross.svg";
import { useEffect } from "react";

export function ModalComp({
  props,
  children,
  width,
}: {
  props: Props;
  children: React.ReactNode;
  width: string;
}) {
  useEffect(() => {
    Modal.setAppElement("#body");
  });

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      className={classes.modal}
      style={{
        overlay: {
          backgroundColor: "rgba(26, 26, 26, 0.64)",
        },
        content: {
          width,
        },
      }}
    >
      <div className={classes.relativeWrapper}>
        <Image
          src={CrossSVG}
          alt=""
          className={classes.cross}
          onClick={props.onRequestClose}
        />
        {children}
      </div>
    </Modal>
  );
}
