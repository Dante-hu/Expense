"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center border shadow-sm p-2">
      <div className="flex flex-row items-center">
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-3 items-center">
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="rounded-full bg-blue-500 ">Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
