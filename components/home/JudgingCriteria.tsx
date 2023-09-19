import React from "react";
import Section from "../layout/Section";
import { Divider } from "@nextui-org/react";
import { TypographyH2 } from "../typography";
import Image from "next/image";

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
  return (
    <>
      <Section className="gap-10 py-[92px]">
        <Image
          src="/images/judging-criteria.svg"
          width={710}
          height={714}
          alt="Judging Criteria Key attributes"
        />

        <div className="space-y-[16px]">
          <TypographyH2 className="md:max-w-[267px]">
            Judging Criteria{" "}
            <span className="text-purple-light">Key attributes</span>
          </TypographyH2>

          <div className="space-y-[22px]">
            {criteria.map((data) => (
              <p key={data.heading} className="leading-[27.76px] ">
                <strong className="text-[16px] font-bold text-purple-light">
                  {data.heading}
                </strong>{" "}
                {data.desc}
              </p>
            ))}
          </div>
        </div>
      </Section>
      <Divider className="w-full bg-[#FFFFFF2E]" />
    </>
  );
}

export default JudgingCriteria;
