import { LayoutProps } from "@/model/common";
import React from "react";

export default function EmptyLayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
