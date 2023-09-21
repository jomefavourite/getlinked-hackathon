import { cn } from "@/lib/util";
import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
} & PropsWithChildren;

function Section({ className, children }: Props) {
  return (
    <section
      className={cn(
        "mx-auto grid w-full max-w-[1280px] items-center px-8 md:grid-cols-2",
        className,
      )}
    >
      {children}
    </section>
  );
}

export default Section;
