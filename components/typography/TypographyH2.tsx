import { cn } from '@/lib/util';
import React from 'react';

interface TypographyH2Props extends React.ComponentProps<'h2'> {
  className?: string;
  children: React.ReactNode;
}

function TypographyH2({ children, className }: TypographyH2Props) {
  return (
    <h2
      className={cn(
        'font-clashDisplay text-xl leading-10 md:text-[32px] font-bold text-center md:text-left',
        className
      )}
    >
      {children}
    </h2>
  );
}

export default TypographyH2;
