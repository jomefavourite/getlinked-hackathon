import React, { useRef } from "react";
import Section from "../layout/Section";
import { TypographyH2 } from "../typography";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import { useInView } from "framer-motion";

function PrivacyPolicy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <Section
        ref={ref}
        className="gap-[30px] py-[93px] "
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 400ms",
        }}
      >
        <div>
          <div className="text-center md:text-left">
            <div className="space-y-4 md:max-w-[300px]">
              <TypographyH2>
                Privacy Policy and{" "}
                <span className="block text-purple-light">Terms</span>
              </TypographyH2>
              <p className="text-xs text-[rgba(255,255,255,0.75)] md:text-sm">
                Last updated on September 12, 2023
              </p>
            </div>

            <p className="mt-6 text-xs leading-[188.4%] md:text-sm">
              Below are our privacy & policy, which outline a lot of goodies.
              it's our aim to always take of our participant
            </p>
          </div>

          <div className="mt-[69px] rounded-[5px] border border-purple-light bg-[rgba(217,217,217,0.03)] p-[22px] md:p-[72px]">
            <p className="text-center leading-[216.4%] md:text-left">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <div className="mt-6">
              <h4 className="text-base font-bold leading-[216.4%] text-purple-light">
                Licensing Policy
              </h4>
              <p className="font-bold leading-[216.4%]">
                Here are terms of our Standard License:
              </p>

              <ul className="ml-6 mt-4 space-y-3 text-sm">
                <li
                  style={{
                    listStyleImage: "url(/images/list-terms.png)",
                    paddingInlineStart: "1ch",
                  }}
                  className="leading-[216.4%]"
                >
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </li>
                <li
                  style={{
                    listStyleImage: "url(/images/list-terms.png)",
                    paddingInlineStart: "1ch",
                  }}
                  className="leading-[216.4%]"
                >
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </li>
              </ul>

              <Button className="mx-auto mt-8 block rounded-[4px] bg-gradient px-[42px]  text-white">
                Read More
              </Button>
            </div>
          </div>
        </div>

        <Image
          src={"/images/privacy.svg"}
          width={609}
          height={952}
          alt="Privacy Policy and Terms "
          className="mx-auto w-full max-w-[400px] md:max-w-[560px]"
        />
      </Section>
      {/* <Divider className='bg-[#FFFFFF2E] w-full' /> */}
    </>
  );
}

export default PrivacyPolicy;
