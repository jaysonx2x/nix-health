"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/assets/icons/home.svg" width={28} height={28} alt="Logo" />
        <span className="text-2xl p-2-semibold text-gray-600">NIX HEALTH</span>
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton />

          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                height={32}
                width={32}
                alt="menu"
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <div className="flex gap-2">
                  <Image
                    src="/assets/icons/home.svg"
                    width={28}
                    height={28}
                    alt="Logo"
                  />
                  <span className="text-2xl p-2-semibold text-gray-600">
                    NIX HEALTH
                  </span>
                </div>
                <ul className="header-nav_elements">
                  {navLinks.map((item) => {
                    const isActive =
                      pathname === item.route ||
                      pathname.startsWith(`${item.route}/`);
                    return (
                      <li
                        key={item.label}
                        className={`${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap text-dark-700`}
                      >
                        <Link
                          className="sidebar-link cursor-pointer"
                          href={item.route}
                        >
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt={item.label}
                          />
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut></SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
