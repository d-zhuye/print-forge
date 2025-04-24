import { montserrat, albertSans } from "./fonts";
import logo from "../public/logo.svg";
import logoIcon from "../public/logo-icon.svg";
import Image from "next/image";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${montserrat.variable}`}>
      <body className="w-screen flex flex-col items-center">
        <header className="w-full py-[16px] flex justify-between items-center">
          <Image
            className="w-12 h-12 lg:hidden"
            src={logoIcon}
            alt="Print Forge logo icon"
          />
          <Image
            className="hidden lg:inline-block"
            src={logo}
            alt="Print Forge logo"
          />
          <nav className="">
            <ul className="uppercase flex gap-8">
              <li className="pb-2 hover:text-red-700 hover:cursor-pointer hover:border-b-[1px] hover:border-red-700">
                <a href="#"></a>
                3D Models
              </li>
              <li className="pb-2 hover:text-red-700 hover:cursor-pointer hover:border-b-[1px] hover:border-red-700">
                <a href="/about"></a>About
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
