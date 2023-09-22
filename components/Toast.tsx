import { cn } from "@/lib/util";
import React from "react";

function Toast({ isSuccess }: { isSuccess: null | boolean }) {
  return (
    <>
      {isSuccess !== null && (
        <div
          className={cn(
            "border-green fixed right-0 top-[80px] z-[1000] mr-8 w-full max-w-[350px] rounded-md  bg-green-700 p-6",
            isSuccess === false && " bg-red-700",
          )}
        >
          Contact Successful Submitted 🎊
        </div>
      )}
    </>
  );
}

export default Toast;
