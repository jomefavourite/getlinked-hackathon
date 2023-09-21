import { cn } from "@/lib/util";
import React from "react";

interface TypographyH2Props extends React.ComponentProps<"h2"> {
  className?: string;
  children: React.ReactNode;
}

function TypographyH2({ children, className }: TypographyH2Props) {
  return (
    <h2
      className={cn(
        "text-center font-clashDisplay text-xl font-bold md:text-left md:text-[32px] md:leading-10",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default TypographyH2;
