import Nav from "@/components/layout/Nav";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

function ContactPage() {
  return (
    <>
      <Nav />
      <section className="grid md:grid-cols-2">
        <div>
          <h1>Get In Touch</h1>
          <p>Contact Information</p>
          <p>27,Alara Street Yaba 100012 Lagos State</p>
          <p>Call Us : 07067981819</p>
          <p>we are open from Monday-Friday 08:00am - 05:00pm</p>

          <div>
            <h4>Share on</h4>
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
        <div className="rounded-xl bg-[rgba(255,255,255,0.03)] p-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <h2>
            Questions or need assistance?
            <span>Let us know about it!</span>
          </h2>

          <form>
            <Input placeholder="First Name" />
            <Input type="email" placeholder="Mail" />
            <Input placeholder="First Name" />

            <Button>Submit</Button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
