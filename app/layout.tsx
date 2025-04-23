import "./globals.css";
import { montserrat, albertSans } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${montserrat.variable}`}>
      <body className="p-4">{children}</body>
    </html>
  );
}
