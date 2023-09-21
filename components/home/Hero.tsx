import React from "react";
import { TypographyH1 } from "../typography";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import { Unica_One } from "next/font/google";

const unica = Unica_One({ subsets: ["latin"], weight: "400" });

function Hero() {
  return (
    <>
      <header className="mx-auto grid w-full max-w-[1280px] items-center px-8 pt-20 md:grid-cols-2  md:pt-32">
        {/* Background Image */}
        <Image
          src={"/images/hero-bg.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 right-0 -z-10 hidden w-full opacity-[68%] md:block"
        />
        <Image
          src={"/images/hero-bg-mobile.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 top-0 -z-10  w-full opacity-[68%] md:hidden"
        />
        {/* Background Image */}

        <div className="absolute right-0 top-0 pr-8">
          <p className="text-base font-bold sm:text-2xl md:text-[36px]">
            Igniting a Revolution in HR Innovation
          </p>
          <Image
            src={"/images/line-bg.svg"}
            width={253}
            height={11}
            alt="line"
            className="ml-auto flex w-[115px] max-w-[253px] justify-end md:w-full"
          />
        </div>

        <div className="flex flex-col items-center md:items-start">
          <TypographyH1 className="relative whitespace-nowrap before:absolute before:right-0 before:h-[8px] before:w-[6px] before:bg-[url(/images/star-grey.svg)] before:bg-contain before:bg-no-repeat after:absolute after:-top-[30px] after:left-[60px] after:h-[12px] after:w-[10px] after:bg-[url(/images/star-light.svg)] after:bg-contain md:leading-[70px] md:before:-right-[80px] md:before:-top-[30px] md:before:h-[32px] md:before:w-[26px] md:after:-top-[90px] md:after:left-[60px] md:after:h-[32px] md:after:w-[26px] ">
            getlinked{" "}
            <span className="relative after:absolute after:-top-[15px] after:right-[20px] after:h-[26px] after:w-[18px] after:bg-[url(/images/light-bulb.svg)] after:bg-contain after:bg-no-repeat md:after:-top-[50px] md:after:right-[30px] md:after:h-[73px] md:after:w-[53px]">
              Tech
            </span>{" "}
            <span className="flex items-center justify-center md:justify-start">
              Hackathon <span className="text-purple-light">1.0</span>
              {/* <Image
                src="/images/chain.svg"
                width={86}
                height={86}
                alt="chain"
                className="w-full"
              /> */}
              <img
                src="/images/chain.svg"
                alt="chain"
                className="w-full max-w-[32px] md:max-w-[86px]"
                loading="eager"
              />
              <img
                src="/images/boom.svg"
                alt="boom"
                className="w-full max-w-[32px] md:max-w-[86px]"
                loading="eager"
              />
            </span>
          </TypographyH1>
          <p className="mt-2 max-w-[264px] text-center text-xs  leading-[166%] md:max-w-[522px] md:text-left md:text-[20px]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <Button className="mt-8 rounded-sm bg-gradient px-[46px]   text-white">
            Register
          </Button>

          <div className="relative mt-14 flex gap-6 md:after:absolute md:after:-right-[120px] md:after:h-[32px] md:after:w-[26px] md:after:bg-[url(/images/star-grey.svg)]">
            <div className={`${unica.className} text-[48px] md:text-[64px]`}>
              00<span className="text-sm uppercase">h</span>
            </div>
            <div className={`${unica.className} text-[48px] md:text-[64px]`}>
              00<span className="text-sm uppercase">m</span>
            </div>
            <div className={`${unica.className} text-[48px] md:text-[64px]`}>
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
