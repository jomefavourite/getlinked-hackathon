import React, { useRef } from "react";
import Section from "../layout/Section";
import { TypographyH2 } from "../typography";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { useInView } from "framer-motion";

function Prizes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <Section
        ref={ref}
        className="max-w-[1280px] gap-5  py-[74px]  md:flex"
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 400ms",
        }}
      >
        {/* Background Image */}
        {/* <Image
          src={"/images/prize-bg-light.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 -z-10 hidden w-full opacity-[68%] md:block"
        /> */}
        {/* <Image
          src={"/images/prizes-bg.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 -z-10 hidden w-full bg-contain opacity-[19%] md:block"
        /> */}
        {/* Background Image */}

        <div>
          <div className=" md:hidden">
            <TypographyH2 className="">
              Prizes and{" "}
              <span className="block text-purple-light">Rewards</span>
            </TypographyH2>
            <p className="mx-auto mt-2 max-w-[227px] text-center text-xs">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>

          <Image
            src="/images/prizes.svg"
            width={548}
            height={482}
            alt="Prizes and Reward"
            // className="w-[clamp(500px,2vh,548px)]"
            className="mt-6 transition-transform duration-100 ease-out hover:scale-90 md:mt-0"
          />
        </div>

        <div className="flex-1">
          <div className="hidden md:block">
            <TypographyH2>
              Prizes and{" "}
              <span className="block text-purple-light">Rewards</span>
            </TypographyH2>
            <p className="mt-2 max-w-[400px] leading-[170%]">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>

          <div className="mt-[140px] flex gap-[10px] md:mt-[224px] md:gap-[30px]">
            <div className="relative flex h-[126px] w-full  max-w-[212px] flex-col justify-end rounded-lg border border-[#D434FE] bg-[rgba(212,52,254,0.12)] pb-4 text-center sm:h-[285px] md:pb-8">
              <Image
                src="/images/silver-medal.svg"
                width={179}
                height={180}
                alt="Silver Medal"
                className="absolute w-full -translate-y-[70px] transition-transform duration-75 ease-out hover:scale-110 md:-translate-y-[130px]"
              />
              <div>
                <p className="text-xs font-semibold leading-5 md:text-[24px]">
                  <strong className="block font-bold  md:text-4xl">2nd</strong>{" "}
                  Runner
                </p>
                <p className="mt-1 font-bold text-purple-light md:mt-3 md:text-[32px]">
                  N300,000
                </p>
              </div>
            </div>
            <div className="relative flex h-[126px] w-full  max-w-[212px] flex-col justify-end  rounded-lg border border-[#903AFF] bg-[rgba(144,58,255,0.12)] pb-4 text-center sm:h-[300px] md:pb-8">
              <Image
                src="/images/gold-medal.svg"
                width={296}
                height={296}
                alt="Gold Medal"
                className="absolute z-20 w-full -translate-y-[90px] scale-150 transition-transform duration-75 ease-out hover:scale-[1.8] md:-translate-y-[180px]"
              />
              <div>
                <p className="text-xs font-semibold leading-5 md:text-[24px]">
                  <strong className="block font-bold  md:text-4xl">1st</strong>{" "}
                  Runner
                </p>
                <p className="mt-1 font-bold text-purple-light md:mt-3 md:text-[32px]">
                  N400,000
                </p>
              </div>
            </div>
            <div className="relative flex h-[126px]  w-full max-w-[212px] flex-col justify-end rounded-lg border border-[#D434FE] bg-[rgba(212,52,254,0.12)] pb-4 text-center sm:h-[285px] md:pb-8">
              <Image
                src="/images/bronze-medal.svg"
                width={179}
                height={180}
                alt="Bronze Medal"
                className="absolute w-full -translate-y-[70px] transition-transform duration-75 ease-out hover:scale-110 md:-translate-y-[130px]"
              />
              <div>
                <p className="text-xs font-semibold leading-5 md:text-[24px]">
                  <strong className="block font-bold  md:text-4xl">3rd</strong>{" "}
                  <span>Runner</span>
                </p>
                <p className="mt-1 font-bold text-purple-light md:mt-3 md:text-[32px]">
                  N150,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* <Divider className="w-full bg-[#FFFFFF2E]" /> */}
    </>
  );
}

export default Prizes;
