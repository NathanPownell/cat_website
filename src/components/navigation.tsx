"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ExternalLinkIcon } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navigation() {
  return (
    <div className="hidden md:flex sticky  top-0 z-50 gap-2 bg-card bg-secondary h-18 text-lg shadow-md p-2 px-80 w-full flex items-center justify-between">
      <div>
        <Image
          src="/bonshatiroshow.png"
          width={100}
          height={80}
          alt="the bon shapiro show"
        />
      </div>
      {/* <div className="flex text-sm gap-4">
        <Link href="/">Info</Link>
        <Link href="/">Content</Link>
        <Link href="/">FAQs</Link>
      </div> */}
      <div className="flex gap-2 align-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm" className="w w-auto">
              Buy now
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex rounded-md shadow-md flex-col gap-2">
              <Button asChild variant="outline" size="sm">
                <Link
                  href="https://birdeye.so/token/6bPFbxgpsFZg6WDruj7vrodq4GY7K7TmqUnAm1byu3PW?chain=solana"
                  target="_blank"
                >
                  Buy on Birdeye &nbsp; <ExternalLinkIcon size="14" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="https://t.co/gezdnpxrHC" target="_blank">
                  Join Telegram &nbsp; <ExternalLinkIcon size="14" />{" "}
                </Link>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        <ModeToggle />
      </div>
    </div>
  );
}
