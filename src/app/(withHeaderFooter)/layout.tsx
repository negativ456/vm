import { Header, Menu } from "@/lib/widgets";
import Footer from "@/lib/widgets/Footer/ui/Footer/Footer";
import classes from "./layout.module.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={classes.appWrapper}>
      <Header />
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
