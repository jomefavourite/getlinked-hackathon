import React, { useRef } from "react";
import Section from "../layout/Section";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { TypographyH2 } from "../typography";
import { useInView } from "framer-motion";

function RulesAndGuidelines() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <Section
        ref={ref}
        className="bg-[url(/images/rule -bg.png)] bg-cover bg-[0] pb-[46px] md:pb-0"
      >
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

        <div
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 400ms",
          }}
          className="relative before:absolute before:top-[45%] before:h-[12px] before:w-[18px] before:bg-[url(/images/star-light.svg)] before:bg-contain before:bg-no-repeat md:order-2 md:before:bg-none"
        >
          <Image
            src={"/images/rules-and-guidelines.svg"}
            width={490}
            height={477}
            alt="Rules and Guidelines"
            className="mx-auto md:order-2"
          />
        </div>

        <div
          style={{
            transform: isInView ? "none" : "translateY(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 400ms",
          }}
          className="relative space-y-[16px] text-center before:absolute before:right-0 before:h-[14px] before:w-[12px] before:bg-[url(/images/star-grey.svg)] before:bg-contain after:absolute after:left-[60px] after:h-[12px] after:w-[10px] after:bg-[url(/images/star-light.svg)] after:bg-contain md:text-left md:before:left-[250px] md:before:h-[32px] md:before:w-[26px] md:after:left-auto md:after:right-0 md:after:h-[32px] md:after:w-[26px]"
        >
          <TypographyH2 className="md:max-w-[170px]">
            Rules and{" "}
            <span className="block text-purple-light">Guidelines</span>
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
