import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Navigation } from "@/components/navigation";
import MobileNavigation from "@/components/mobile-navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "$BON Shatiro",
  description: "Bon Shatiro CTO Website",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen min-w-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          {/* <ModeToggle /> */}
          <MobileNavigation />
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
