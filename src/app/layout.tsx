import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Navigation } from "@/components/navigation";
import MobileNavigation from "@/components/mobile-navigation";
import { Single_Day as FontSans } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "$BON Shatiro",
  description: "Bon Shatiro CTO Website",
};

const fontSans = FontSans({
  // subsets: ["latin"],
  weight: ["400", "400"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body
        // className={cn(
        //   "min-h-screen min-w-screen bg-background font-sans antialiased",
        //   fontSans.className
        // )}
        className={fontSans.className}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* <ModeToggle /> */}
          <MobileNavigation />
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
