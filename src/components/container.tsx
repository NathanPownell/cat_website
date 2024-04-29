import { cn } from "@/lib/utils";
import React from "react";

function Container({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return <div className={cn(className, "w-full md:max-w-5xl")}>{children}</div>;
}

export default Container;
