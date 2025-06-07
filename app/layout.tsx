import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Landing/Footer/Footer";

import Navbar from '@/components/Navbar';
import { Coolvetica, RobotoFonts } from "@/lib/fonts";
import { UserProvider } from "@auth0/nextjs-auth0/client";




export const metadata: Metadata = {
  title: "Loreon Learning",
  description: "Changing lives one cohort after another",

  openGraph: {
    title: "Changing lives one cohort after another",

  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className={`${Coolvetica.variable} ${RobotoFonts.variable}`}
      suppressHydrationWarning
      suppressContentEditableWarning>
      <body>
        <UserProvider>
          {children}
          <Footer />

        </UserProvider>
      </body>
    </html>
  );
}
