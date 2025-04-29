"use client";
import logo from "@/public/logo.svg";
import logoIcon from "@/public/logo-icon.svg";
import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { navLink } from "../types/types";

export default function Header() {
  const pathname = usePathname();

  const links: navLink[] = [
    { name: "3D Models", href: "/3d-models" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="w-full bg-white text-black py-[16px] flex justify-between items-center">
      <Link href="/">
        {/* Mobile & Tablet Logo */}
        <Image
          className="w-12 h-12 md:hidden"
          width={39}
          height={40}
          src={logoIcon}
          alt="Print Forge logo icon"
        />
        {/* Desktop Logo */}
        <Image
          className="hidden md:inline-block"
          width={240}
          height={61}
          src={logo}
          alt="Print Forge logo"
        />
      </Link>
      <nav>
        <ul className="uppercase flex gap-8">
          {links.map((link) => {
            const linkStyles = clsx(
              "pb-2 hover:text-red-700 hover:cursor-pointer hover:border-b-[1px] hover:border-red-700",
              {
                "font-[600] text-red-700 border-b-[1px] border-red-700":
                  pathname === link.href,
              }
            );
            return (
              <Link key={link.name} className={linkStyles} href={link.href}>
                {link.name}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

// <li className="">
//   <Link href="/3d-models">3D Models</Link>
// </li>
// <li className="pb-2 hover:text-red-700 hover:cursor-pointer hover:border-b-[1px] hover:border-red-700">
//   <Link href="/about">About</Link>
