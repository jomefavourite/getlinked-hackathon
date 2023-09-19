import React from "react";
import Section from "../layout/Section";
import { TypographyH2 } from "../typography";
import { Divider } from "@nextui-org/react";

function Timeline() {
  return (
    <>
      <Section className="py-[72px] md:block">
        <div className="mx-auto w-full text-center md:max-w-[346px]">
          <TypographyH2 className="md:text-center">Timeline</TypographyH2>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
      </Section>
      <Divider className="w-full bg-[#FFFFFF2E]" />
    </>
  );
}

export default Timeline;
