import { cn } from "@/lib/util";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren, React.ComponentProps<"section"> {
  className?: string;
}

function Section({ className, children, ...rest }: Props) {
  return (
    <section
      className={cn(
        "mx-auto grid w-full max-w-[1280px] items-center px-8 md:grid-cols-2",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

export default Section;
