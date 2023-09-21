import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-4 px-8 pb-[54px] pt-20 text-xs">
      <div className="gap-[140px] space-y-[34px] md:grid md:grid-cols-4 md:space-y-0">
        <div className="col-span-2 flex flex-col justify-between leading-[172.4%]">
          <div>
            <Image
              src={"/images/getLinked.svg"}
              width={171}
              height={44}
              alt="getLinked"
            />
            <p className="mt-3">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>

          <div className="flex w-[181px] items-center gap-2">
            <Link href={"#"}>Terms of Use</Link>
            <span className="block h-full w-[3px] bg-purple-light"></span>
            <Link href={"#"}>Privacy Policy</Link>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-purple-light">
            Useful Links
          </h4>
          <ul className="space-y-2 leading-[20.69px]">
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
          </ul>

          <div className="flex items-center gap-4">
            <h5 className="text-purple-light">Follow us</h5>
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

        <div className="space-y-5">
          <h4 className="text-sm font-semibold text-purple-light">
            Contact Us
          </h4>

          <div className="space-y-5">
            <p className="flex gap-4">
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
              27,Alara Street Yaba 100012 Lagos State
            </p>
          </div>
        </div>
      </div>
      <p>All rights reserved. © getlinked Ltd.</p>
    </footer>
  );
}

export default Footer;
