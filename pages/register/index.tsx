import Nav from "@/components/layout/Nav";
import { Button, Input } from "@nextui-org/react";
import * as Select from "@radix-ui/react-select";
import Head from "next/head";
import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery, useMutation } from "@tanstack/react-query";

function RegPage() {
  const [isLoading, setIsLoading] = useState(false);

  const { data: category } = useQuery<{ id: number; name: string }[]>({
    queryKey: ["category"],
    queryFn: () =>
      fetch("https://backend.getlinked.ai/hackathon/categories-list")
        .then((res) => res.json())
        .then((data) => data),
  });

  const { mutate } = useMutation({
    mutationFn: (data) =>
      fetch("https://backend.getlinked.ai/hackathon/registration", {
        body: JSON.stringify(data),
      }),
  });

  console.log(category, "data");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    const payload = {
      email: formData.get("email"),
      phone_number: formData.get("phone"),
      team_name: formData.get("team_name"),
      group_size: 10,
      project_topic: "Web server propagation",
      category: formData.get("category"),
      // privacy_poclicy_accepted: true,
    };

    mutate(payload);
  };

  return (
    <>
      <Head>
        <title>Register - getLinked</title>
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

        <div className="">
          <Image
            src={"/images/register-img.svg"}
            width={717}
            height={717}
            alt=""
          />
        </div>

        <div className="rounded-xl md:bg-[rgba(255,255,255,0.03)] md:p-[70px] md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <h1 className="max-w-[320px] font-clashDisplay text-xl font-semibold text-purple-light">
            Register
          </h1>
          <p className="mt-4 flex items-end gap-2 leading-[normal]">
            Be part of this movement!
            <Image
              src={"/images/part-movement.svg"}
              width={100}
              height={31}
              alt=""
              className="mb-px"
            />
          </p>

          <h2 className="text-xl  md:text-2xl">CREATE YOUR ACCOUNT</h2>

          <form className="mt-[34px]" onSubmit={handleSubmit}>
            <div className=" grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="team_name" className="mb-2 ml-1 block text-sm">
                  Team Name
                </label>
                <input
                  type="text"
                  id="team_name"
                  name="team_name"
                  placeholder="Enter the name of your group"
                  className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-sm placeholder:text-[#FFFFFF40] "
                />
              </div>
              <div>
                <label
                  htmlFor="phone_number"
                  className="mb-2 ml-1 block text-sm"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  placeholder="Enter your phone number"
                  className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-sm placeholder:text-[#FFFFFF40] "
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 ml-1 block text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-sm placeholder:text-[#FFFFFF40] "
                />
              </div>
              <div>
                <label
                  htmlFor="project_topic"
                  className="mb-2 ml-1 block text-sm"
                >
                  Project Topic
                </label>
                <input
                  type="text"
                  id="project_topic"
                  name="project_topic"
                  placeholder="What is your group project topic"
                  className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-sm placeholder:text-[#FFFFFF40] "
                />
              </div>
              <div>
                <label
                  htmlFor="project_topic"
                  className="mb-2 ml-1 block text-sm"
                >
                  Category
                </label>
                <Select.Root>
                  <Select.Trigger
                    className=" inline-flex w-full items-center justify-between gap-[5px] rounded border border-white bg-transparent py-3 !pr-3 pl-5 text-[13px] leading-none outline-none"
                    aria-label="Category"
                  >
                    <Select.Value placeholder="Select your category " />
                    <Select.Icon className="text-violet11">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="8"
                        viewBox="0 0 13 9"
                        fill="none"
                      >
                        <path
                          id="Vector 2"
                          d="M1 1L6.5 7L11.5 1"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content className="bottom-0 overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                      <Select.ScrollUpButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
                        {/* <ChevronUpIcon /> */}
                      </Select.ScrollUpButton>
                      <Select.Viewport className="p-[5px]">
                        <Select.Group>
                          {category?.map((cat) => (
                            <Select.Item
                              key={cat.id}
                              value={String(cat.id)}
                              className="data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-black data-[disabled]:pointer-events-none data-[highlighted]:outline-none"
                            >
                              <Select.ItemText>{cat.name}</Select.ItemText>
                            </Select.Item>
                          ))}
                        </Select.Group>
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>
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

export default RegPage;
