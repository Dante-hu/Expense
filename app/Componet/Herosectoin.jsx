import React from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
function Herosectoin() {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Control your
                <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-500">
                  Expenses & Finances
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={"/dashboard.jpg"}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}

export default Herosectoin;
