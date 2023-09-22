import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
};

function ModalComp({ isOpen, onOpenChange, onClose }: Props) {
  return (
    <>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        // radius="2xl"
        placement="center"
        classNames={{
          body: "py-2 ",
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
                  onPress={() => onClose()}
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

export default ModalComp;
