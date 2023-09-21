import React from "react";
import Section from "../layout/Section";
import { TypographyH2 } from "../typography";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

function Prizes() {
  return (
    <>
      <Section className="max-w-[1280px]  gap-5  py-[74px]">
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

        <Image
          src="/images/prizes.svg"
          width={548}
          height={482}
          alt="Prizes and Reward"
        />

        <div>
          <div>
            <TypographyH2>
              Prizes and <span className="text-purple-light">Rewards</span>
            </TypographyH2>
            <p>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>

          <div className="mt-[264px] flex gap-[30px]">
            <div className="relative flex h-[296px] w-full max-w-[212px] flex-col items-end justify-center rounded-lg border border-[#D434FE] bg-[rgba(212,52,254,0.12)] pb-8 text-center">
              <Image
                src="/images/silver-medal.svg"
                width={179}
                height={180}
                alt="Silver Medal"
                className=" w-full -translate-y-[89.5px]"
              />
              <div>
                <p className="font-semibold leading-5 md:text-[24px]">
                  <strong className="block font-bold  md:text-4xl">2nd</strong>{" "}
                  Runner
                </p>
                <p className="mt-3 font-bold text-purple-light md:text-[32px]">
                  N300,000
                </p>
              </div>
            </div>
            <div className="relative flex h-[296px] w-full max-w-[212px] flex-col items-end justify-center rounded-lg border border-[#D434FE] bg-[rgba(212,52,254,0.12)] pb-8 text-center">
              <Image
                src="/images/gold-medal.svg"
                width={290}
                height={180}
                alt="Silver Medal"
                className="z-10 w-full max-w-[290px] -translate-y-[145px]"
              />
              <div>
                <p className="font-semibold leading-5 md:text-[24px]">
                  <strong className="block font-bold  md:text-4xl">1st</strong>{" "}
                  Runner
                </p>
                <p className="mt-3 font-bold text-purple-light md:text-[32px]">
                  N400,000
                </p>
              </div>
            </div>
            <div className="relative flex h-[296px] w-full max-w-[212px] flex-col items-end justify-center rounded-lg border border-[#D434FE] bg-[rgba(212,52,254,0.12)] pb-8 text-center">
              <Image
                src="/images/bronze-medal.svg"
                width={179}
                height={180}
                alt="Bronze Medal"
                className=" w-full -translate-y-[89.5px]"
              />
              <div>
                <p className="font-semibold leading-5 md:text-[24px]">
                  <strong className="block font-bold  md:text-4xl">3rd</strong>{" "}
                  Runner
                </p>
                <p className="mt-3 font-bold text-purple-light md:text-[32px]">
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
