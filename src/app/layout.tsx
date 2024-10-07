import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { Montserrat } from "next/font/google";
// import { Space_Mono } from "next/font/google";
import { space_mono } from './fonts';
import { montserrat } from './fonts';

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// const inter = Inter({ subsets: ["latin"] });

// const montserrat = Montserrat({ subsets: ["latin"] });

// const space_Mono = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starlight",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(children);
  return (
   <ClerkProvider>
      <html lang="en" className={`${space_mono.variable} ${montserrat.variable}`}>
      <link rel="shortcut icon" href="/lighthouse.svg" />
        <body>
          {children} <ToastContainer position="bottom-right" theme="dark" />
         
        </body>
      </html>
  </ClerkProvider>
  );
}
