import React from "react";
import Section from "../layout/Section";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { TypographyH2 } from "../typography";

function RulesAndGuidelines() {
  return (
    <>
      <Section className="bg-[url(/images/rule -bg.png)] bg-cover bg-[0] pb-[46px] md:pb-0">
        {/* Background Image */}
        <Image
          src={"/images/rule-bg.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 -z-10 hidden w-full opacity-[68%] md:block"
        />
        <Image
          src={"/images/rule-bg-mobile.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 -z-10 w-full opacity-[58%] md:hidden"
        />
        {/* Background Image */}

        <Image
          src={"/images/rules-and-guidelines.svg"}
          width={490}
          height={477}
          alt="Rules and Guidelines"
          className="mx-auto md:order-2"
        />

        <div className="space-y-[16px] text-center md:text-left">
          <TypographyH2 className="md:max-w-[170px]">
            Rules and <span className="text-purple-light">Guidelines</span>
          </TypographyH2>
          <p className="text-[13px] !leading-[27.5px] md:text-sm">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </Section>
      <Divider className="w-full bg-[#FFFFFF2E]" />
    </>
  );
}

export default RulesAndGuidelines;
