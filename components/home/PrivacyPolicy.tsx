import React from "react";
import Section from "../layout/Section";
import { TypographyH2 } from "../typography";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

function PrivacyPolicy() {
  return (
    <>
      <Section>
        <div>
          <div>
            <div className="space-y-4 md:max-w-[300px]">
              <TypographyH2>
                Privacy Policy and{" "}
                <span className="text-purple-light">Terms</span>
              </TypographyH2>
              <p className="rgba(255,255,255,0.75)">
                Last updated on September 12, 2023
              </p>
            </div>

            <p className="mt-6">
              Below are our privacy & policy, which outline a lot of goodies.
              it's our aim to always take of our participant
            </p>
          </div>

          <div className="mt-[69px] rounded-[5px] border border-purple-light bg-[rgba(217,217,217,0.03)] p-10">
            <p className="leading-[216.4%]">
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

              <ul className="mt-4 text-sm">
                <li>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </li>
                <li>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Image
          src={"/images/privacy.svg"}
          width={609}
          height={952}
          alt="Privacy Policy and Terms max-w-[560px]"
        />
      </Section>
      {/* <Divider className='bg-[#FFFFFF2E] w-full' /> */}
    </>
  );
}

export default PrivacyPolicy;
