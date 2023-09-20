import React from "react";
import { TypographyH1 } from "../typography";
import { Button, Divider } from "@nextui-org/react";

function Hero() {
  return (
    <>
      <header className="mx-auto w-full max-w-[1280px] px-6">
        <p>Igniting a Revolution in HR Innovation</p>

        <div>
          <TypographyH1>
            getlinked Tech Hackathon <span>1.0</span>
          </TypographyH1>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <Button>Register</Button>
        </div>
      </header>
      <Divider className="w-full bg-[#FFFFFF2E]" />
    </>
  );
}

export default Hero;
