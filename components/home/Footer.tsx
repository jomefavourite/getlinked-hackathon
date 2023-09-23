import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#120B21] ">
      <div className="gap-42 mx-auto flex w-full max-w-[1280px] flex-col items-center bg-contain px-8 pb-[54px] pt-20 text-xs ">
        <div className="relative gap-[140px] space-y-[34px] after:absolute after:-bottom-[35px] after:left-[90px] after:h-[8px] after:w-[7px] after:bg-[url(/images/star.svg)] after:bg-contain after:bg-no-repeat md:grid md:grid-cols-4 md:space-y-0 md:after:-bottom-[40px] md:after:left-[600px]   md:after:h-[18px] md:after:w-[15px]">
          <div className="col-span-2 flex flex-col justify-between leading-[172.4%]">
            <div className="relative before:absolute before:-left-[20px] before:top-6 before:h-[10px] before:w-[9px] before:bg-[url(/images/star-light.svg)] before:bg-contain before:bg-no-repeat md:before:-left-[80px] md:before:h-[18px] md:before:w-[15px]">
              <Link href="/">
                <Image
                  src={"/images/getlinked.svg"}
                  width={171}
                  height={44}
                  alt="getLinked"
                  className="w-[82px] md:w-auto"
                />
              </Link>
              <p className="mt-3 text-xs">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>

            <div className="mt-8 flex w-[201px] items-center justify-between gap-2 md:mt-0">
              <Link href={"/#"} className="col-span-2 block">
                Terms of Use
              </Link>
              <div className="flex h-full w-[3px] bg-purple-light"></div>

              <Link href={"/#"} className="block">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="relative space-y-2 before:absolute before:right-[120px] before:top-[50px] before:h-[18px] before:w-[15px] before:bg-[url(/images/star-grey.svg)] before:bg-contain before:bg-no-repeat md:before:right-0 ">
            <h4 className="text-sm font-semibold text-purple-light">
              Useful Links
            </h4>
            <ul className="space-y-2 leading-[20.69px]">
              <li>
                <Link href={"/#overview"}>Overview</Link>
              </li>
              <li>
                <Link href={"/#timeline"}>Timeline</Link>
              </li>
              <li>
                <Link href="/#faqs">FAQs</Link>
              </li>
              <li>
                <Link href={"/register"}>Register</Link>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <h5 className="min-w-[68px] text-purple-light">Follow us</h5>
              <div className="flex items-center gap-4">
                {[
                  { path: "/images/instagram.svg", alt: "Instagram handle" },
                  { path: "/images/x.svg", alt: "X handle" },
                  { path: "/images/facebook.svg", alt: "Facebook handle" },
                  { path: "/images/linkedin.svg", alt: "Linkedin handle" },
                ].map((image) => (
                  <Image
                    key={image.path}
                    src={image.path}
                    alt={image.alt}
                    width={24}
                    height={24}
                    className="h-[24px] w-[24px]"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative space-y-5 after:absolute after:bottom-[50px] after:right-[30px] after:h-[8px] after:w-[7px] after:bg-[url(/images/star-light.svg)] after:bg-contain after:bg-no-repeat md:after:bottom-0 md:after:right-0  md:after:h-[18px] md:after:w-[15px]">
            <h4 className="text-sm font-semibold text-purple-light">
              Contact Us
            </h4>

            <div className="space-y-5 text-xs">
              <p className="flex gap-4 text-xs">
                <Image
                  src="/images/cell.svg"
                  alt="cell"
                  width={24}
                  height={24}
                  className="h-[24px] w-[24px]"
                />
                +234 679 81819
              </p>
              <p className="flex gap-4">
                <Image
                  src="/images/location.svg"
                  alt="location"
                  width={24}
                  height={24}
                  className="h-[24px] w-[24px]"
                />
                <span className="max-w-[86px] text-xs">
                  27,Alara Street Yaba 100012 Lagos State
                </span>
              </p>
            </div>
          </div>
        </div>
        <p className="mt-14">All rights reserved. © getlinked Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
