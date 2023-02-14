import { ReactNode } from "react";
import "./globals.css";
import Header from "@/app/header";

interface rootLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: rootLayoutProps) {
  return (
    <html lang={"en"}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
