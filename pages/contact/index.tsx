import Nav from "@/components/layout/Nav";
import { Button, Input } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import Head from "next/head";
import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import axios from "axios";

type FormField = {
  first_name: string;
  message: string;
  email: string;
};

function ContactPage() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormField>();

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: {
      email: string;
      first_name: string;
      message: string;
    }) =>
      axios.post("https://backend.getlinked.ai/hackathon/contact-form", data),
    onSuccess() {
      reset();
      toast.success("Contact Submitted! 🎉");
    },
    onError(e: any) {
      // console.log(e.response.data?.email);
      if (e.response.data?.email[0]) {
        toast.error(e.response.data?.email[0]);
      } else {
        toast.error("Something Went Wrong!");
      }
    },
  });

  const onSubmit: SubmitHandler<FormField> = (data) => {
    mutate(data);
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

        <div className="rounded-xl md:bg-[rgba(255,255,255,0.03)] md:p-[92px] md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <h2 className="max-w-[320px] font-clashDisplay text-xl font-semibold text-purple-light">
            Questions or need assistance? <span>Let us know about it!</span>
          </h2>
          <p className="mt-4 md:hidden">
            Email us below to any question related to our event
          </p>

          <form
            className="mt-[34px] space-y-[39px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <Input
              placeholder="First Name"
              classNames={{
                input: ["bg-transparent"],
                innerWrapper: "bg-transparent",
              }}
            /> */}
            <div>
              <input
                type="text"
                {...register("first_name", { required: true })}
                placeholder="First Name"
                className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-white"
              />
              {errors.first_name && (
                <p className="mt-1 text-xs text-red-500">
                  First name is required
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Mail"
                className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-white"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">Email is required</p>
              )}
            </div>
            <div>
              <textarea
                placeholder="Message"
                {...register("message", { required: true })}
                rows={3}
                className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-white"
              ></textarea>

              {errors.message && (
                <p className="mt-1 text-xs text-red-500">Message is required</p>
              )}
            </div>

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
