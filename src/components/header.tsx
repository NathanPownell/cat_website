'use client';
import React from "react";
import { HeaderCarousel } from "./header-carousel";
import { Button } from "./ui/button";
import { Popover, PopoverTrigger } from "./ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div id="info" className="w-full gap-2 mb-12 mt-2 p-10 rounded-md h-64 justify-center bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col md:m-0 md:h-full">
      <h1 className="text-4xl text-center md:text-left font-bold">
        Get the Facts Straight.
      </h1>

      <div className="flex-col content-center gap-2">
        <div>
          The <b>$BON CTO </b> is a leader in <b>content</b> creation,{" "}
          <b>innovation</b>, and <b>creativity</b> in the <b>politifi</b> space.
          <br />
          <br />
          <b className="font-bold">Join the $BON movement.</b>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="secondary" className="w w-full md:w-auto mt-2">Let&apos;s go</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex rounded-md shadow-md flex-col gap-2 bg-muted p-2">
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
        {/* <HeaderCarousel /> */}
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolore voluptatem perferendis tempore accusamus eius recusandae beatae minus, ratione temporibus ipsa quae! Porro eius hic earum. Voluptatibus maiores et laboriosam.</p> */}
      </div>
    </div>
  );
};

export default Header;
