import React from "react";
import Section from "../layout/Section";
import { TypographyH2 } from "../typography";
import { Divider } from "@nextui-org/react";

const timeline = [
  {
    heading: "Teams Registration begins",
    desc: "Interested teams can now show their interest in the  getlinked tech hackathon 1.0 2023 by proceeding to register",
    date: "November 18, 2023",
    count: "2",
  },
  {
    heading: "Teams Registration ends",
    desc: "Interested Participants are no longer Allowed to register",
    date: "November 18, 2023",
    count: "3",
  },
  {
    heading: "Announcement of the accepted teams and ideas",
    desc: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    date: "November 18, 2023",
    count: "4",
  },
  {
    heading: "Getlinked Hackathon 1.0 Offically Begins",
    desc: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    date: "November 18, 2023",
    count: "5",
  },
  {
    heading: "Demo Day",
    desc: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    date: "November 18, 2023",
    count: "6",
  },
];

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

        <div className="mt-28">
          <div className="mx-auto grid grid-cols-12 gap-[20px]">
            <div className="col-span-5 text-right">
              <p className="text-2xl font-bold text-purple-light">
                Hackathon Announcement
              </p>
              <p className="mt-2 leading-[170.9%]">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center">
              <span className="block h-[137px] w-[4px] bg-purple-light"></span>
              <div className="flex h-[53px] w-[53px] items-center justify-center rounded-full bg-gradient text-2xl font-bold">
                1
              </div>
            </div>
            <div className="col-span-5">
              <p className="text-2xl font-bold text-purple-light">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="space-y-[20px]">
            {timeline.map((data, ind) => (
              <div className="grid grid-cols-12 grid-rows-none">
                {(ind + 1) % 2 === 1 ? (
                  <>
                    <div className={`col-span-5 grid self-center `}>
                      <p className="text-right text-2xl font-bold text-purple-light">
                        {data.date}
                      </p>
                    </div>
                    <div
                      className={`col-span-2 flex flex-col items-center justify-center even:col-start-6 even:col-end-8 `}
                    >
                      <span className="block h-[86px] w-[4px] bg-purple-light"></span>
                      <div className="my-[11px] flex h-[53px] w-[53px] items-center justify-center rounded-full bg-gradient text-2xl font-bold">
                        {data.count}
                      </div>
                      <span className="block h-[86px] w-[4px] bg-purple-light"></span>
                    </div>
                    <div className={`col-span-5 self-center text-left `}>
                      <p className="text-2xl font-bold text-purple-light">
                        {data.heading}
                      </p>
                      <p className="mt-2 leading-[170.9%]">{data.desc}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`col-span-5 self-center text-right `}>
                      <p className="text-2xl font-bold text-purple-light">
                        {data.heading}
                      </p>
                      <p className="mt-2 leading-[170.9%]">{data.desc}</p>
                    </div>
                    <div
                      className={`col-span-2 flex flex-col items-center justify-center even:col-start-6 even:col-end-8 `}
                    >
                      <span className="block h-[86px] w-[4px] bg-purple-light"></span>
                      <div className="my-[11px] flex h-[53px] w-[53px] items-center justify-center rounded-full bg-gradient text-2xl font-bold">
                        {data.count}
                      </div>
                      <span className="block h-[86px] w-[4px] bg-purple-light"></span>
                    </div>
                    <div className={`col-span-5 grid self-center `}>
                      <p className="text-2xl font-bold text-purple-light">
                        {data.date}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Divider className="w-full bg-[#FFFFFF2E]" />
    </>
  );
}

export default Timeline;
