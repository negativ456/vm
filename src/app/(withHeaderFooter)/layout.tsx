"use client";

import { Header, MapWithEvents, Menu } from "@/lib/widgets";
import Footer from "@/lib/widgets/Footer/ui/Footer/Footer";
import classes from "./layout.module.scss";
import { useAppSelector } from "@/hooks";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = useAppSelector((state) => state.globalSlice.user.isAuth);

  return (
    <div className={classes.appWrapper}>
      <Header />
      <Menu />
      <main>{children}</main>
      {isAuth && (
        <>
          <h2 className={classes.nearEvents}>События рядом с вами</h2>
          <div className={classes.mapWrapper}>
            <MapWithEvents mapHeight="720px" />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
