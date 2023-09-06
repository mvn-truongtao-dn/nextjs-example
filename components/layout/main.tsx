import { LayoutProps } from "@/model/common";
import Link from "next/link";
import * as React from "react";
import { Inter } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
export function MainLayout({ children }: LayoutProps) {
  React.useEffect(() => {
    console.log("mouting");
    return () => console.log("unmouting");
  }, []);
  return (
    <div className={inter.className}>
      <h1>Main Layout</h1>
      <div>Sidebar</div>
      <div>{children}</div>
    </div>
  );
}
