import classes from "./SignInUpBtn.module.scss";
import GoogleSVG from "./icons/Google.svg";
import FacebookSVG from "./icons/Facebook.svg";
import Image from "next/image";

export function SignInUpBtn({
  type,
}: {
  type: "google" | "facebook" | "email";
}) {
  let svg;
  let text;

  switch (type) {
    case "google":
      svg = GoogleSVG;
      text = "Продолжить с Google";
      break;
    case "facebook":
      svg = FacebookSVG;
      text = "Продолжить с Facebook";
      break;
    case "email":
      svg = "";
      text = "Войти через почту";
      break;
    default:
      svg = "";
      break;
  }

  return (
    <button type="button" className={classes.btn}>
      <Image src={svg} alt="" />
      <p>{text}</p>
    </button>
  );
}
