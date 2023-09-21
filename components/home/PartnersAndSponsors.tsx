import React from "react";
import Section from "../layout/Section";
import { TypographyH2 } from "../typography";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

function PartnersAndSponsors() {
  return (
    <>
      <Section className="space-y-[62px] py-[70px] md:block">
        {/* Background Image */}
        <Image
          src={"/images/partner-bg.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 -z-10 hidden w-full translate-y-[-120px] opacity-[68%] md:block"
        />
        {/* <Image
          src={"/images/rule-bg-mobile.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 -z-10 w-full opacity-[58%] md:hidden"
        /> */}
        {/* Background Image */}

        <div className="mx-auto max-w-[452px] text-center">
          <TypographyH2 className="md:text-center">
            Partners And Sponsors
          </TypographyH2>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        <div className="relative rounded-[5px] border border-purple-light py-[144px]">
          <div className="mx-auto grid w-full max-w-[898px] grid-cols-3 px-5 ">
            <div className="relative flex items-center px-5 pb-5 before:absolute before:bottom-0 before:left-[50%] before:h-1 before:w-[80%] before:-translate-x-[50%]  before:bg-purple-light after:absolute after:right-0 after:top-0 after:h-[80%] after:w-1 after:bg-purple-light">
              <Image
                src={"/images/liberty-company-logo.svg"}
                width={120}
                height={113}
                alt="liberty"
                className="border-w- mx-auto"
              />
            </div>
            <div className="relative flex items-center px-5 pb-5 before:absolute before:bottom-0 before:left-[50%] before:h-1 before:w-[80%] before:-translate-x-[50%]  before:bg-purple-light after:absolute after:right-0 after:top-0 after:h-[80%] after:w-1 after:bg-purple-light">
              <Image
                src={"/images/liberty-pay-logo.svg"}
                width={213}
                height={40}
                alt="liberty pay"
                className="mx-auto"
              />
            </div>
            <div className="relative flex items-center px-5 pb-5 before:absolute before:bottom-0 before:left-[50%] before:h-1 before:w-[80%] before:-translate-x-[50%] before:bg-purple-light">
              <Image
                src={"/images/winwise-logo.svg"}
                width={131}
                height={107}
                alt="winwise logo"
                className="mx-auto"
              />
            </div>

            <div className="relative flex items-center px-5 pt-5 after:absolute after:bottom-0 after:right-0 after:h-[80%] after:w-1 after:bg-purple-light">
              <Image
                src={"/images/wisper-logo.svg"}
                width={147}
                height={109}
                alt="winwise logo"
                className="mx-auto"
              />
            </div>
            <div className="relative flex items-center px-5 pt-5 after:absolute after:bottom-0 after:right-0 after:h-[80%] after:w-1 after:bg-purple-light">
              <Image
                src={"/images/paybox.svg"}
                width={204}
                height={20}
                alt="paybox"
                className="mx-auto"
              />
            </div>
            <div className="flex items-center px-5 pt-5">
              <Image
                src={"/images/vuzual-plus.svg"}
                width={231}
                height={21}
                alt="vuzual plus"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </Section>
      <Divider className="w-full bg-[#FFFFFF2E]" />
    </>
  );
}

export default PartnersAndSponsors;
