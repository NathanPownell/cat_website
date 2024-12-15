"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ExternalLinkIcon } from "lucide-react";
import { CONTRACT_ADDRESS } from "@/helpers/common";


export function Navigation() {
  return (
    <div className="hidden md:flex sticky  top-0 z-50 gap-2 bg-card bg-secondary h-18 text-lg shadow-md p-2 px-80 w-full flex items-center justify-between">
      <div>
        <Image
          src="/fartcatLogo.png"
          width={100}
          height={80}
          alt="Fred the Farting Cat"
        />
      </div>
      {/* <div className="flex text-md gap-4">
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
                  href={`https://birdeye.so/token/${CONTRACT_ADDRESS}?chain=solana`}
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
