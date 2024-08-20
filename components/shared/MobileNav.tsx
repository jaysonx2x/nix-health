"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/icons/menu.svg"
            width={36}
            height={36}
            alt="menu"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-gray-200">
          
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/images/healthcare.png"
              width={30}
              height={30}
              alt="Logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-gray-800">
              NIX HEALTH
            </p>
          </Link>

          <nav className="sidebar-nav">
            <ul className="header-nav_elements">
                {navLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                    <li
                      key={item.label}
                      className={`sidebar-nav_element group ${
                        isActive
                          ? "bg-gray-800 text-white"
                          : "text-gray-700"
                      }`}
                    >
                      <SheetClose asChild key={item.route}>
                        <Link className="sidebar-link" href={item.route}>
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt={item.label}
                            className={`${isActive && "brightness-200"}`}
                          />
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  );
                })}
              </ul>
            </nav>
        </SheetContent>
      </Sheet>
    </section>

  );
};

export default MobileNav;
