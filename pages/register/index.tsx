import Nav from "@/components/layout/Nav";
import * as Select from "@radix-ui/react-select";
import Head from "next/head";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import ModalComp from "@/components/Modal";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Checkbox,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import axios from "axios";

type FormField = {
  email: string;
  phone_number: string;
  team_name: string;
  group_size: number;
  project_topic: string;
  category: number;
};

function RegPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure({
    isOpen: modalOpen,
  });

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormField>();

  const { data: category, isLoading: catLoading } = useQuery<
    { id: number; name: string }[]
  >({
    queryKey: ["category"],
    queryFn: () =>
      fetch("https://backend.getlinked.ai/hackathon/categories-list")
        .then((res) => {
          return res.json();
        })
        .then((data) => data),
    refetchOnWindowFocus: false,
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: {
      email: string;
      phone_number: string;
      team_name: string;
      group_size: number;
      project_topic: string;
      category: number;
    }) =>
      axios.post("https://backend.getlinked.ai/hackathon/registration", data),
    onSuccess(res: any) {
      reset();
      setModalOpen(true);
    },
    onError(e) {
      // console.log(e);
      toast.error("Something Went Wrong, Try again!");
    },
  });

  const onSubmit: SubmitHandler<FormField> = (data) => {
    mutate(data);
  };

  return (
    <>
      <Head>
        <title>Register - getLinked</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
      </Head>
      <Nav />

      {/* <ModalComp isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} /> */}

      <section className="mx-auto my-[30px] grid w-full max-w-[1280px]  place-content-center px-8 md:grid-cols-2">
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
          <h1 className=" max-w-[320px] font-clashDisplay text-xl font-semibold text-purple-light md:hidden">
            Register
          </h1>
          <Image
            src={"/images/register-img.svg"}
            width={717}
            height={717}
            alt=""
          />
        </div>

        <div className="rounded-xl md:bg-[rgba(255,255,255,0.03)] md:p-[70px] md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <h1 className="hidden max-w-[320px] font-clashDisplay text-xl font-semibold text-purple-light md:block">
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

          <h2 className="mt-3  text-xl md:text-2xl">CREATE YOUR ACCOUNT</h2>

          <form className="mt-[20px]" onSubmit={handleSubmit(onSubmit)}>
            <div className=" mb-[23px] grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="team_name" className="mb-2 ml-1 block text-sm">
                  Team Name
                </label>
                <input
                  {...register("team_name", { required: true })}
                  type="text"
                  id="team_name"
                  placeholder="Enter the name of your group"
                  className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-sm placeholder:text-[#FFFFFF40] "
                />
                {errors.team_name && (
                  <p className="mt-1 text-xs text-red-500">
                    Team Name is required
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone_number"
                  className="mb-2 ml-1 block text-sm"
                >
                  Phone
                </label>
                <input
                  {...register("phone_number", { required: true })}
                  type="number"
                  id="phone_number"
                  placeholder="Enter your phone number"
                  className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-sm placeholder:text-[#FFFFFF40] "
                />
                {errors.phone_number && (
                  <p className="mt-1 text-xs text-red-500">Phone is required</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 ml-1 block text-sm">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-sm placeholder:text-[#FFFFFF40] "
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">Email is required</p>
                )}
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
                  {...register("project_topic", { required: true })}
                  id="project_topic"
                  placeholder="What is your group project topic"
                  className="w-full rounded-[4px] border-1 bg-transparent px-5 py-2 text-base placeholder:text-sm placeholder:text-[#FFFFFF40] "
                />
                {errors.project_topic && (
                  <p className="mt-1 text-xs text-red-500">
                    Project topic is required
                  </p>
                )}
              </div>
              <div className="flex justify-between gap-4 md:col-span-2">
                <div className="flex-1">
                  <label
                    htmlFor="project_topic"
                    className="mb-2 ml-1 block text-sm"
                  >
                    Category
                  </label>
                  <Controller
                    control={control}
                    name="category"
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select.Root
                        onValueChange={field.onChange}
                        name={field.name}
                        // value={field.value}
                        // required={field.r}
                      >
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
                            {catLoading ? (
                              "Loading"
                            ) : (
                              <Select.Viewport className="p-[5px]">
                                <Select.Group>
                                  {category?.map((cat) => (
                                    <Select.Item
                                      key={cat.id}
                                      value={String(cat.id)}
                                      className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-black data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient data-[highlighted]:text-white data-[highlighted]:outline-none"
                                    >
                                      <Select.ItemText>
                                        {cat.name}
                                      </Select.ItemText>
                                    </Select.Item>
                                  ))}
                                </Select.Group>
                              </Select.Viewport>
                            )}
                          </Select.Content>
                        </Select.Portal>
                      </Select.Root>
                    )}
                  />
                  {errors.category && (
                    <p className="mt-1 text-xs text-red-500">
                      Category is required
                    </p>
                  )}
                </div>
                <div className="md:flex-1">
                  <label
                    htmlFor="group_size"
                    className="mb-2 ml-1 block text-sm"
                  >
                    Group Size
                  </label>
                  <Controller
                    control={control}
                    name="group_size"
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select.Root
                        onValueChange={field.onChange}
                        name={field.name}
                        // value={field.value}
                        // required={field.r}
                      >
                        <Select.Trigger
                          className=" inline-flex w-full items-center justify-between gap-[5px] rounded border border-white bg-transparent py-3 !pr-3 pl-5 text-[13px] leading-none outline-none"
                          aria-label="Group Size"
                        >
                          <Select.Value placeholder="Select" />
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
                          <Select.Content className="bottom-0 overflow-hidden rounded-md bg-white px-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                            <Select.Viewport className="p-[5px]">
                              <Select.Group>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map(
                                  (value) => (
                                    <Select.Item
                                      key={value}
                                      value={String(value)}
                                      className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-black data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient data-[highlighted]:text-white data-[highlighted]:outline-none"
                                    >
                                      <Select.ItemText>{value}</Select.ItemText>
                                    </Select.Item>
                                  ),
                                )}
                              </Select.Group>
                            </Select.Viewport>
                          </Select.Content>
                        </Select.Portal>
                      </Select.Root>
                    )}
                  />
                  {errors.group_size && (
                    <p className="mt-1 text-xs text-red-500">
                      Group Size is required
                    </p>
                  )}
                </div>
              </div>
            </div>

            <p className="text-[9px] italic text-purple-light">
              Please review your registration details before submitting
            </p>

            <Checkbox
              size="sm"
              className="[data-selected]:bg-gradient mt-2 text-[10px] md:!text-sm"
            >
              I agreed with the event terms and conditions and privacy policy
            </Checkbox>

            <Button
              isLoading={isLoading}
              type="submit"
              className="mx-auto mt-8 block w-full !items-center gap-2 rounded-[4px] bg-gradient px-[46px] text-white"
            >
              Register Now
            </Button>
          </form>
        </div>
      </section>

      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        // radius="2xl"
        placement="center"
        classNames={{
          body: "py-2 px-8",
          backdrop: "bg-[#190E2E]/90 backdrop-opacity-40 ",
          base: "border-purple-light border-1 bg-[#190E2E]/60 dark:bg-[#19172c] px-8 text-white text-center font-montserrat max-w-[700px]",
          // header: "border-b-[1px] border-[#292f46]",
          footer: "",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader> */}

              <ModalBody
                className="after:absolute after:bottom-0 after:right-0 after:bg-none after:bg-contain after:bg-no-repeat
                md:after:bottom-[10px] md:after:right-[30px] md:after:h-[25px] md:after:w-[21px] md:after:bg-[url(/images/star.svg)]"
              >
                <div className="relative mx-auto w-fit before:absolute before:left-0 before:top-48 before:h-[18px] before:w-[14px] before:bg-[url(/images/star-grey.svg)] before:bg-contain before:bg-no-repeat md:before:h-[32px] md:before:w-[26px]">
                  <Image
                    src={"/images/congrats.svg"}
                    width={427}
                    height={321}
                    alt="congrats"
                    className="mx-auto"
                  />
                </div>
                <h2 className=" text-base font-semibold leading-[40px] md:text-[32px] ">
                  <span className="block">Congratulations</span> you have
                  successfully Registered!
                </h2>
                <p className="mx-auto max-w-[202px] text-xs  md:max-w-[240px] md:text-sm">
                  Yes, it was easy and you did it! check your mail box for next
                  step
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={() => setModalOpen(false)}
                  className="mb-8 w-full rounded-[4px] bg-gradient px-[46px]   text-white"
                >
                  Back
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default RegPage;
