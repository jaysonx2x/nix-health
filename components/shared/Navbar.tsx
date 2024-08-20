import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
import CustomCommand from "./CustomCommand";
import { CustomNavMenu } from "./CustomNavMenu";
import MobileRightNav from "./MobileRightNav";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-gray-100 px-6 py-4 lg:px-10 items-center">
      <div className="mr-4 hidden md:flex gap-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/healthcare.png"
            width={30}
            height={30}
            alt="Logo"
            className="max-sm:size-10"
          />
          <p className="text-[26px] font-extrabold text-gray-600 max-sm:hidden max-sm:text-[20px]">
            NIX HEALTH
          </p>
        </Link>

        {/* <CustomMenuBar /> */}
        <CustomNavMenu />
      </div>

      <div className="flex items-center justify-between space-x-2 md:justify-end flex-grow">
        <MobileNav />

        <SignedIn>
          <CustomCommand />
          <UserButton />
        </SignedIn>
      </div>
      <MobileRightNav />
    </nav>
  );
};

export default Navbar;
