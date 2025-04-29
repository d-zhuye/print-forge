import { montserrat, albertSans } from "./fonts";
import logo from "../public/logo.svg";
import logoIcon from "../public/logo-icon.svg";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${montserrat.variable}`}>
      <body className="w-screen flex flex-col items-center">
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
              <li className="pb-2 hover:text-red-700 hover:cursor-pointer hover:border-b-[1px] hover:border-red-700">
                <Link href="/3d-models">3D Models</Link>
              </li>
              <li className="pb-2 hover:text-red-700 hover:cursor-pointer hover:border-b-[1px] hover:border-red-700">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
