"use client";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Popover, PopoverContent } from "@radix-ui/react-popover";
import { ExternalLinkIcon, MenuIcon } from "lucide-react";
import { PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import Image from "next/image";

const MobileNavigation = () => {
  return (
    <div className="md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="icon" className="fixed z-50 bottom-4 right-4 bg-gradient-to-r from-blue-800 to-blue-500 shadow-lg">
            <MenuIcon />{" "}
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <div className="w-full flex justify-between">
                <Image
                  src="/bonshatiroshow.png"
                  width={100}
                  height={80}
                  alt="the bon shapiro show"
                />
                                <ModeToggle />

              </div>
            </DrawerTitle>
            <DrawerDescription>
              <div className=" md:flex gap-2 bg-card text-lg p-2 w-full flex flex-col items-center justify-evenly">
                {/* <div className="flex flex-col gap-4">
                  <Link className="w-full" href="#info">Info</Link>
                  <Link className="w-full" href="#content">Content</Link>
                  <Link className="w-full" href="#cto">FAQs</Link>
                </div> */}

                <Popover>
                  <PopoverTrigger asChild>
                    <Button size="sm" className="w-full">
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
              </div>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNavigation;
