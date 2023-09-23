import React, { useRef } from "react";
import Section from "../layout/Section";
import { Button, Divider } from "@nextui-org/react";
import { TypographyH2 } from "../typography";
import Image from "next/image";
import { useInView } from "framer-motion";

const criteria = [
  {
    heading: "Innovation and Creativity:",
    desc: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
  },
  {
    heading: "Functionality:",
    desc: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
  },
  {
    heading: "Impact and Relevance:",
    desc: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
  },
  {
    heading: "Technical Complexity:",
    desc: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
  },
  {
    heading: "Adherence to Hackathon Rules:",
    desc: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
  },
];

function JudgingCriteria() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <Section ref={ref} className=" gap-10 py-[92px]">
        {/* Background Image */}
        <Image
          src={"/images/judging-bg.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 -z-10  hidden w-screen translate-y-[250px] overflow-hidden opacity-[68%] md:block"
        />
        <Image
          src={"/images/judging-bg-mobile.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 -z-10 w-full opacity-[58%] md:hidden"
        />
        {/* Background Image */}

        <Image
          src="/images/judging-criteria.svg"
          width={710}
          height={714}
          alt="Judging Criteria Key attributes"
          className="hidden md:block"
        />
        <div
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 400ms",
          }}
          className="relative before:absolute before:-top-[67px]  before:left-[50%] before:h-[17px] before:w-[13px] before:bg-[url(/images/star.svg)] before:bg-contain before:bg-no-repeat md:hidden"
        >
          <Image
            src="/images/judging-criteria-mobile.svg"
            width={710}
            height={714}
            alt="Judging Criteria Key attributes"
            className=" "
          />
        </div>

        <div
          style={{
            transform: isInView ? "none" : "translateY(-50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 400ms",
          }}
          className="relative after:absolute after:right-0 after:h-[12px] after:w-[10px] after:bg-[url(/images/star-light.svg)] after:bg-contain md:after:bg-none "
        >
          <TypographyH2 className="mb-[18px] md:max-w-[267px]">
            Judging Criteria{" "}
            <span className="block text-purple-light">Key attributes</span>
          </TypographyH2>

          <div className="space-y-[10px] text-center md:space-y-[22px] md:text-left">
            {criteria.map((data) => (
              <p
                key={data.heading}
                className="text-xs leading-[27.76px] md:text-sm "
              >
                <strong className="text-[13px] font-bold text-purple-light md:text-[16px]">
                  {data.heading}
                </strong>{" "}
                {data.desc}
              </p>
            ))}
          </div>

          <Button className="md:mt-18 mx-auto mt-10 block rounded-[4px] bg-gradient px-[14px] text-white md:ml-0">
            Read More
          </Button>
        </div>
      </Section>
      <Divider className="w-full bg-[#FFFFFF2E]" />
    </>
  );
}

export default JudgingCriteria;
