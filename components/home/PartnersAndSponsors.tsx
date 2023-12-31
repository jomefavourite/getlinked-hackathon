import React, { useRef } from "react";
import Section from "../layout/Section";
import { TypographyH2 } from "../typography";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { useInView } from "framer-motion";

function PartnersAndSponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <Section
        ref={ref}
        className=" py-[70px] md:block"
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 400ms",
        }}
      >
        {/* Background Image */}
        <Image
          src={"/images/partner-bg.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 -z-10 hidden w-full translate-y-[-120px] opacity-[68%] md:block"
        />
        <Image
          src={"/images/partner-bg-mobile.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 -z-10 w-full translate-y-[45px] opacity-[58%] md:hidden"
        />
        {/* Background Image */}

        <div className="mx-auto max-w-[452px] text-center">
          <TypographyH2 className="mb-4 md:text-center">
            Partners And Sponsors
          </TypographyH2>
          <p className="text-xs leading-[20.5px] md:text-sm">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        <div className="relative mt-12 rounded-[5px] border border-purple-light py-[40px] md:py-[144px]">
          <div className="mx-auto grid w-full max-w-[898px] grid-cols-3 px-5 ">
            <div className="relative flex items-center px-5 pb-5 before:absolute before:bottom-0 before:left-[50%]  before:h-[2px] before:w-[80%] before:-translate-x-[50%] before:bg-purple-light  after:absolute after:right-0 after:top-0 after:h-[80%] after:w-[2px]  after:bg-purple-light md:before:h-1 md:after:w-1">
              <Image
                src={"/images/liberty-company-logo.svg"}
                width={120}
                height={113}
                alt="liberty"
                className="mx-auto transition-transform duration-100 ease-out hover:scale-110"
              />
            </div>
            <div className="relative flex items-center px-5 pb-5 before:absolute before:bottom-0 before:left-[50%]  before:h-[2px] before:w-[80%] before:-translate-x-[50%] before:bg-purple-light  after:absolute after:right-0 after:top-0 after:h-[80%] after:w-[2px] after:bg-purple-light md:before:h-1 md:after:w-1">
              <Image
                src={"/images/liberty-pay-logo.svg"}
                width={213}
                height={40}
                alt="liberty pay"
                className="mx-auto transition-transform duration-100 ease-out hover:scale-110"
              />
            </div>
            <div className="relative flex items-center px-5 pb-5 before:absolute before:bottom-0 before:left-[50%]  before:h-[2px] before:w-[80%] before:-translate-x-[50%] before:bg-purple-light md:before:h-1">
              <Image
                src={"/images/winwise-logo.svg"}
                width={131}
                height={107}
                alt="winwise logo"
                className="mx-auto transition-transform duration-100 ease-out hover:scale-110"
              />
            </div>

            <div className="relative flex items-center px-5 pt-5 after:absolute after:bottom-0 after:right-0 after:h-[80%] after:w-[2px] after:bg-purple-light md:after:w-1">
              <Image
                src={"/images/wisper-logo.svg"}
                width={147}
                height={109}
                alt="winwise logo"
                className="mx-auto transition-transform duration-100 ease-out hover:scale-110"
              />
            </div>
            <div className="relative flex items-center px-5 pt-5 after:absolute after:bottom-0 after:right-0 after:h-[80%] after:w-[2px] after:bg-purple-light md:after:w-1">
              <Image
                src={"/images/paybox.svg"}
                width={204}
                height={20}
                alt="paybox"
                className="mx-auto transition-transform duration-100 ease-out hover:scale-110"
              />
            </div>
            <div className="flex items-center px-5 pt-5">
              <Image
                src={"/images/vuzual-plus.svg"}
                width={231}
                height={21}
                alt="vuzual plus"
                className="mx-auto transition-transform duration-100 ease-out hover:scale-110"
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
