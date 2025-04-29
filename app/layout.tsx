import { montserrat, albertSans } from "./fonts";
import Header from "./ui/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${montserrat.variable}`}>
      <body className="w-screen flex flex-col items-center">
        <Header />

        {children}
      </body>
    </html>
  );
}
