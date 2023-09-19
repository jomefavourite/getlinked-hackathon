import React, { ComponentProps } from "react";
import Section from "../layout/Section";
import { Divider } from "@nextui-org/react";
import { TypographyH2 } from "../typography";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

const faq = [
  {
    detail: "Can I work on a project I started before the hackathon?",
  },
  {
    detail: "What happens if I need help during the hackathon?",
  },
  {
    detail: "What happens if I don't have an idea for a project?",
  },
  {
    detail: "Can I join a team or do I have to come with one?",
  },
  {
    detail: "What happens after the hackathon ends",
  },
  {
    detail: "Can I work on a project I started before the hackathon?",
  },
];

function Faq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <Section className="gap-5 py-[60px] md:py-[72px]">
        <div>
          <TypographyH2 className="md:max-w-[253px]">
            Frequently Ask
            <span className="text-purple-light">Question</span>
          </TypographyH2>
          <p className="leading-[27.5px]">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>

          <div className="mt-[45.69px] md:mt-[68px]">
            <Accordion
              isCompact
              id="accordion"
              className="px-0 text-xs text-white md:text-sm"
            >
              {faq.map((data, ind) => (
                <AccordionItem
                  key={ind}
                  aria-label={data.detail}
                  title={data.detail}
                  className="mb-2 text-xs leading-[27.5px] text-white md:text-sm"
                  indicator={<PlusIcon />}
                >
                  {defaultContent}
                </AccordionItem>
              ))}
            </Accordion>
            <Divider />
          </div>
        </div>

        <Image src={"/images/faq.svg"} width={741} height={805} alt="faq" />
      </Section>
      <Divider className="w-full bg-[#FFFFFF2E]" />
    </>
  );
}

export default Faq;

export const PlusIcon = (props: ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <path
      d="M4.12 9.24V0.759999H5.38V9.24H4.12ZM0.4 5.6V4.42H9.1V5.6H0.4Z"
      fill="#D434FE"
    />
  </svg>
);
