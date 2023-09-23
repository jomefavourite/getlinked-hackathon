import { cn } from "@/lib/util";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren, React.ComponentProps<"section"> {
  className?: string;
}

export type Ref = HTMLElement;

const Section = React.forwardRef<Ref, Props>(
  ({ className, children, ...rest }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "mx-auto grid w-full max-w-[1280px] items-center px-8 md:grid-cols-2",
          className,
        )}
        {...rest}
      >
        {children}
      </section>
    );
  },
);

export default Section;
