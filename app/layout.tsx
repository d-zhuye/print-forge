import "./globals.css";
import { montserrat, albertSans } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${montserrat.variable}`}>
      <body className="flex flex-col items-center">{children}</body>
    </html>
  );
}
