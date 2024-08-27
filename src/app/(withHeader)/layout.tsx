import classes from './layout.module.scss'
import { Header, Menu } from "@/lib/widgets";

export default function WithHeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Menu />
      <main>{children}</main>
    </div>
  );
}
