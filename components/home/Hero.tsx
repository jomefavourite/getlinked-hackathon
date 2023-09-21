import React from "react";
import { TypographyH1 } from "../typography";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import { Unica_One } from "next/font/google";

const unica = Unica_One({ subsets: ["latin"], weight: "400" });

function Hero() {
  return (
    <>
      <header className="relative mx-auto grid w-full max-w-[1280px] grid-cols-2 items-center px-6">
        <p className="absolute top-0">Igniting a Revolution in HR Innovation</p>

        <div>
          <TypographyH1 className="whitespace-nowrap leading-[70px] ">
            getlinked{" "}
            <span className="relative after:absolute after:-top-[50px] after:right-[30px] after:h-[73px] after:w-[53px] after:bg-[url(/images/light-bulb.svg)]">
              Tech
            </span>{" "}
            <span className="flex items-center">
              Hackathon <span className="text-purple-light">1.0</span>
              <Image
                src="/images/chain.svg"
                width={86}
                height={86}
                alt="chain"
                className="w-full"
              />
              <Image
                src="/images/boom.svg"
                width={86}
                height={86}
                className="w-full"
                alt="boom"
              />
            </span>
          </TypographyH1>
          <p className="mt-2 max-w-[522px] text-xs leading-[166%] md:text-[20px]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <Button>Register</Button>

          <div className="flex gap-6">
            <div className={`${unica.className} text-[64px]`}>
              00<span className="text-sm uppercase">h</span>
            </div>
            <div className={`${unica.className} text-[64px]`}>
              00<span className="text-sm uppercase">m</span>
            </div>
            <div className={`${unica.className} text-[64px]`}>
              00<span className="text-sm uppercase">s</span>
            </div>
          </div>
        </div>

        <Image
          src="/images/hero-image.svg"
          width={889}
          height={845}
          alt="Hero image"
        />
      </header>
      <Divider className="w-full bg-[#FFFFFF2E]" />
    </>
  );
}

export default Hero;
