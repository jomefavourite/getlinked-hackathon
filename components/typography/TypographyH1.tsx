import { cn } from "@/lib/util";
import React from "react";

interface TypographyH1Props extends React.ComponentProps<"h1"> {
  className?: string;
  children: React.ReactNode;
}

function TypographyH1({ children, className }: TypographyH1Props) {
  return (
    <h1
      className={cn(
        "text-center font-clashDisplay text-[32px] font-bold leading-10 md:text-left md:text-[88px]",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export default TypographyH1;
