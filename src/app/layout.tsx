"use client";

/* import type { Metadata } from "next"; */
import "@/styles/globals.scss";
import { inter, golos_text } from "@/fonts";
import { Provider } from "react-redux";
import store from "@/redux";

/* export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${golos_text.variable}`}>
      <body id="body">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
