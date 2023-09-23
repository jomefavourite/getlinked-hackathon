import React, { ComponentProps, useRef } from "react";
import Section from "../layout/Section";
import { Divider } from "@nextui-org/react";
import { TypographyH2 } from "../typography";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import { useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <Section
        ref={ref}
        id="faqs"
        className="gap-5 py-[60px] md:py-[72px]"
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 400ms",
        }}
      >
        <div className="relative before:absolute before:-top-[20px] before:left-[58px] before:block before:h-[22px] before:w-[18px] before:bg-[url(/images/star.svg)]  before:bg-contain before:bg-no-repeat md:before:-left-[35px] md:before:-top-[60px] md:before:!h-[36px] md:before:!w-[30px] ">
          <TypographyH2 className=" md:max-w-[253px] ">
            Frequently Ask
            <span className="block text-purple-light">Question</span>
          </TypographyH2>
          <p className="mx-auto mt-4 max-w-[342px] text-center text-xs !leading-[27.5px] md:ml-0 md:text-left  md:text-sm">
            We got answers to the questions that you might want to ask about{" "}
            <strong>getlinked Hackathon 1.0</strong>
          </p>

          <div className="mt-[45.69px] md:mt-[68px]">
            <Accordion
              isCompact
              id="accordion"
              className="px-0 text-xs text-white md:text-sm"
              itemClasses={{
                base: "pb-0 !mb-0 md:!mb-2",
                title: "!text-xs md:!text-sm !leading-[18.5px]",
                titleWrapper: "pb-0",
              }}
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
