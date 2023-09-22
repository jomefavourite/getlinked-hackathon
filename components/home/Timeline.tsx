import React from "react";
import Section from "../layout/Section";
import { TypographyH2 } from "../typography";
import { Divider } from "@nextui-org/react";
import { cn } from "@/lib/util";

const timeline = [
  {
    heading: "Hackathon Announcement",
    desc: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    date: "November 18, 2023",
    count: "1",
  },
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
      <Section
        id="timeline"
        className="md:pb-[109px py-[80px] md:block md:pt-[72px]"
      >
        <div className="mx-auto w-full space-y-[10px] text-center md:max-w-[346px]">
          <TypographyH2 className="md:text-center">Timeline</TypographyH2>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>

        <div className="mt-[58px] md:mt-28">
          <div className="hidden md:block">
            <div className="relative grid grid-cols-12 gap-[20px]">
              <div className="col-span-5 self-end text-right  before:absolute before:-top-[20px] before:left-[180px] before:h-[36px] before:w-[30px] before:bg-[url(/images/star.svg)]">
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
                <div className="mt-[11px] flex h-[53px] w-[53px] items-center justify-center rounded-full bg-gradient text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="col-span-5 self-end">
                <p className="text-2xl font-bold text-purple-light">
                  November 18, 2023
                </p>
              </div>
            </div>

            <div className="mt-[20px] space-y-[20px]">
              {timeline.slice(1).map((data, ind) => (
                <div key={ind} className="grid grid-cols-12 grid-rows-none">
                  {(ind + 1) % 2 === 1 ? (
                    <>
                      <div
                        className={cn(
                          `relative col-span-5 grid self-center `,
                          ind === 4 &&
                            "before:absolute before:-top-[50px] before:left-0 before:h-[32px] before:w-[26px] before:bg-[url(/images/star-grey.svg)]",
                        )}
                      >
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
                      <div className={cn(`col-span-5 self-center text-right`)}>
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

                      <div
                        className={cn(
                          `relative col-span-5 grid self-center `,
                          ind === 1 &&
                            "before:absolute before:-top-[50px] before:right-[120px] before:h-[32px] before:w-[26px] before:bg-[url(/images/star-light.svg)]",
                        )}
                      >
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

          <TimelineMobile timeline={timeline} />
        </div>
      </Section>
      {/* <Divider className="w-full bg-[#FFFFFF2E]" /> */}
    </>
  );
}

export default Timeline;

type TimelineMobileProps = {
  heading: string;
  desc: string;
  date: string;
  count: string;
}[];

const TimelineMobile = ({ timeline }: { timeline: TimelineMobileProps }) => {
  return (
    <div className="space-y-[40px] md:hidden">
      {timeline.map((data, ind) => (
        <div
          key={ind}
          className={cn(
            "relative flex gap-[9px]",
            ind === 0 &&
              "before:absolute before:-top-[40px] before:left-[35px] before:h-[16px] before:w-[14px] before:bg-[url(/images/star.svg)] before:bg-contain before:bg-no-repeat",
            ind === 2 &&
              "before:absolute before:bottom-0 before:right-[20px] before:h-[16px] before:w-[14px] before:bg-[url(/images/star-light.svg)] before:bg-contain before:bg-no-repeat",
            ind === 5 &&
              "before:absolute before:-bottom-[38px] before:-left-[15px] before:h-[16px] before:w-[14px] before:bg-[url(/images/star-grey.svg)] before:bg-contain before:bg-no-repeat",
          )}
        >
          <div className="flex flex-col items-center gap-[5px]">
            <span className="block h-[77px] w-[2px] bg-purple-light"></span>
            <div className="flex h-[19.32px] w-[19.32px] items-center justify-center rounded-full bg-gradient text-xs font-bold">
              {data.count}
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold text-purple-light">
                {data.heading}
              </p>
              <p className="text-xs leading-[170.9%]">{data.desc}</p>
            </div>
            <p className="text-xs font-bold text-purple-light">{data.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
