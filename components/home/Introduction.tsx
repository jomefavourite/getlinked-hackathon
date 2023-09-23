import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Section from "../layout/Section";
import { Divider } from "@nextui-org/react";
import { TypographyH2 } from "../typography";
import { AnimatePresence, useInView } from "framer-motion";

function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <Section ref={ref} id="overview" className="gap-20 py-12">
        <div
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 400ms",
          }}
          className="relative h-full w-full before:absolute before:top-[70px] before:h-[25px] before:w-[21px] before:bg-[url(/images/star.svg)] before:bg-contain after:absolute after:-bottom-[40px] after:right-[40%] after:!h-[57px] after:!w-[49.43px] after:bg-[url(/images/curly-arrow.svg)] after:bg-contain after:bg-no-repeat md:after:bottom-0 md:after:right-0"
        >
          <Image
            src={"/images/the-big-idea.svg"}
            width={490}
            height={477}
            alt="The big idea"
            className="mx-auto"
          />
          {/* gjhjddd */}
        </div>

        <div
          style={{
            transform: isInView ? "none" : "translateY(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 400ms",
          }}
          className="relative space-y-[16px] text-center after:absolute after:right-[10px] after:top-0 after:h-[10px] after:w-[10px] after:bg-[url(/images/star.svg)] after:bg-contain after:bg-no-repeat md:text-left md:after:h-[36px] md:after:w-[30px]"
        >
          <TypographyH2 className="leading-[24px]">
            Introduction to getlinked{" "}
            <span className="text-purple-light">techHackathon 1.0</span>
          </TypographyH2>
          <p className="text-[13px] !leading-[27.5px] md:max-w-[527px] md:text-sm">
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

export default Introduction;
