import React from "react";
import Section from "../layout/Section";
import { TypographyH2 } from "../typography";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

function PartnersAndSponsors() {
  return (
    <>
      <Section className="md:block">
        <div className="text-center">
          <TypographyH2 className="md:text-center">
            Partners And Sponsors
          </TypographyH2>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        <div className="rounded-[5px] border border-purple-light py-[144px]">
          <div className="mx-auto grid max-w-[898px] grid-cols-3">
            <div className="flex items-center border-b-4 border-r-4 border-purple-light px-5 pb-5">
              <Image
                src={"/images/liberty-company-logo.svg"}
                width={120}
                height={113}
                alt="liberty"
                className="mx-auto"
              />
            </div>
            <div className="flex items-center border-b-4 border-r-4 border-purple-light px-5 pb-5">
              <Image
                src={"/images/liberty-pay-logo.svg"}
                width={213}
                height={40}
                alt="liberty pay"
                className="mx-auto"
              />
            </div>
            <div className="flex items-center border-b-4 border-purple-light px-5 pb-5">
              <Image
                src={"/images/winwise-logo.svg"}
                width={131}
                height={107}
                alt="winwise logo"
                className="mx-auto"
              />
            </div>

            <div className="flex items-center border-r-4 border-purple-light px-5 pt-5">
              <Image
                src={"/images/wisper-logo.svg"}
                width={147}
                height={109}
                alt="winwise logo"
                className="mx-auto"
              />
            </div>
            <div className="flex items-center border-r-4 border-purple-light px-5 pt-5">
              <Image
                src={"/images/paybox.svg"}
                width={204}
                height={20}
                alt="paybox"
                className="mx-auto"
              />
            </div>
            <div className="flex items-center border-purple-light px-5 pt-5">
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
