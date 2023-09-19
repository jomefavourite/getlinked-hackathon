import React from 'react';
import { TypographyH1 } from '../typography';
import { Divider } from '@nextui-org/react';

function Hero() {
  return (
    <>
      <header className='w-full px-6 max-w-[1024px] mx-auto'>
        <div>
          <TypographyH1>
            getlinked Tech Hackathon <span>1.0</span>
          </TypographyH1>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
        </div>
      </header>
      <Divider className='bg-[#FFFFFF2E] w-full' />
    </>
  );
}

export default Hero;
