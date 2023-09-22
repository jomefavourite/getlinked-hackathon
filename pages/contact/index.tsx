import Nav from "@/components/layout/Nav";
import { Button, Input } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    fetch("https://backend.getlinked.ai/hackathon/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        // phone_number: "0903322445533",
        first_name: formData.get("firstName"),
        message: formData.get("message"),
      }),
    })
      .then((res) => {
        toast.success("Contact Submitted! 🎉");
        // console.log(res);
      })
      .catch((e) => {
        toast.error("Something Went Wrong!");
        // console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>Contact - getLinked</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
      </Head>
      <Nav />

      <section className="mx-auto my-[100px] grid w-full max-w-[1280px]  place-content-center px-8 md:grid-cols-2">
        {/* Background Image */}
        <Image
          src={"/images/contact-bg.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 -z-10 hidden h-full  w-full bg-cover opacity-[38%] md:block"
        />
        <Image
          src={"/images/contact-bg-mobile.png"}
          width={490}
          height={477}
          alt=""
          className="not-sr-only absolute left-0 -z-10 w-full opacity-[38%] md:hidden"
        />
        {/* Background Image */}

        <div className="hidden space-y-[17px] md:block">
          <h1 className="font-clashDisplay text-[32px] font-semibold text-purple-light ">
            Get In Touch
          </h1>
          <p className="max-w-[96px]">Contact Information</p>
          <p className="max-w-[119px]">
            27,Alara Street Yaba 100012 Lagos State
          </p>
          <p>Call Us : 07067981819</p>
          <p className="max-w-[272px]">
            we are open from Monday-Friday 08:00am - 05:00pm
          </p>

          <div>
            <h4 className="mb-3 text-base text-purple-light">Share on</h4>
            <div className="flex items-center gap-4">
              {[
                { path: "/images/instagram.svg", alt: "Instagram handle" },
                { path: "/images/x.svg", alt: "X handle" },
                { path: "/images/facebook.svg", alt: "Facebook handle" },
                { path: "/images/linkedin.svg", alt: "Linkedin handle" },
              ].map((image) => (
                <Image
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

        <div className="rounded-xl md:bg-[rgba(255,255,255,0.03)] md:p-[92px] md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <h2 className="max-w-[320px] font-clashDisplay text-xl font-semibold text-purple-light">
            Questions or need assistance? <span>Let us know about it!</span>
          </h2>
          <p className="mt-4 md:hidden">
            Email us below to any question related to our event
          </p>

          <form className="mt-[34px] space-y-[39px]" onSubmit={handleSubmit}>
            {/* <Input
              placeholder="First Name"
              classNames={{
                input: ["bg-transparent"],
                innerWrapper: "bg-transparent",
              }}
            /> */}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Mail"
              className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-white"
            />
            <textarea
              placeholder="Message"
              name="message"
              rows={3}
              className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-white"
            ></textarea>

            <Button
              isLoading={isLoading}
              type="submit"
              className="mx-auto mt-8 block rounded-[4px] bg-gradient px-[46px] text-white"
            >
              Submit
            </Button>
          </form>
        </div>
        <div className="mx-auto text-center md:hidden">
          <h4 className="mb-3 text-base text-purple-light">Share on</h4>
          <div className="flex items-center gap-4">
            {[
              { path: "/images/instagram.svg", alt: "Instagram handle" },
              { path: "/images/x.svg", alt: "X handle" },
              { path: "/images/facebook.svg", alt: "Facebook handle" },
              { path: "/images/linkedin.svg", alt: "Linkedin handle" },
            ].map((image) => (
              <Image
                src={image.path}
                alt={image.alt}
                width={24}
                height={24}
                className="h-[24px] w-[24px]"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
