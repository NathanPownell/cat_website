"use client";
import React from "react";
import { HeaderCarousel } from "./header-carousel";
import { Button } from "./ui/button";
import { Popover, PopoverTrigger } from "./ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { CONTRACT_ADDRESS } from "@/helpers/common";

const Header = () => {
  return (
    <div
      id="info"
      className="w-full gap-2 mb-12 mt-2 p-10 rounded-md h-64 text-white justify-center bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col md:m-0 md:h-full"
    >
      <h1 className="text-4xl text-center md:text-left font-bold">
        WIN SOLANA
      </h1>

      <div className="flex-col content-center gap-2">
        <div>
          <p>Have a video idea? Submit it today for a chance to win 0.1 SOL!</p>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary" className="w w-full md:w-auto mt-2">
              Let&apos;s go
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex rounded-md shadow-md flex-col gap-2 bg-muted p-2">
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
        {/* <HeaderCarousel /> */}
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore voluptatem perferendis tempore accusamus eius recusandae beatae minus, ratione temporibus ipsa quae! Porro eius hic earum. Voluptatibus maiores et laboriosam.</p> */}
      </div>
    </div>
  );
};

export default Header;
