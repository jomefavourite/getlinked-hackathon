import Image from "next/image";
import React from "react";
import Section from "../layout/Section";
import { Divider } from "@nextui-org/react";
import { TypographyH2 } from "../typography";

function Introduction() {
  return (
    <>
      <Section className="gap-20 py-12">
        <Image
          src={"/images/the-big-idea.svg"}
          width={490}
          height={477}
          alt="The big idea"
        />

        <div className="space-y-[16px] text-center md:text-left">
          <TypographyH2>
            Introduction to getlinked{" "}
            <span className="text-purple-light">techHackathon 1.0</span>
          </TypographyH2>
          <p className="text-[13px] leading-[27.5px] md:max-w-[535px] md:text-sm">
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
