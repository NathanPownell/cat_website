import React from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { CONTRACT_ADDRESS } from "@/helpers/common";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full justify-evenly py-12 flex flex-col-reverse px-4 gap-4 bg-center bg-cover md:flex-row bg-center bg-cover md:flex-row bg-hero-background">
      <div className="flex w-54 gap-2 flex-col justify-center text-black">
        <h1 className="text-4xl font-bold">Fred the Farting Cat</h1>
        <h3 className="text-md md:text-lg">
          Fred is a cat. Fred farts. Fred is the only farting cat on{" "}
          <b>Solana.</b>
        </h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w w-full md:w-auto mt-2 bg-gradient-to-r from-blue-800 to-blue-500 shadow-lg">
              Let&apos;s go
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-2 p-2">
              <Button
                className="border-slate-800"
                asChild
                variant="outline"
                size="sm"
              >
                <Link
                  href={`https://birdeye.so/token/${CONTRACT_ADDRESS}?chain=solana`}
                  target="_blank"
                >
                  Buy on Birdeye &nbsp; <ExternalLinkIcon size="14" />
                </Link>
              </Button>
              <Button
                asChild
                className="border-slate-800"
                variant="outline"
                size="sm"
              >
                <Link href="https://t.co/gezdnpxrHC" target="_blank">
                  Join Telegram &nbsp; <ExternalLinkIcon size="14" />{" "}
                </Link>
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Image src={"/fartcatLogo.png"} height={300} width={300} alt="Fred the Farting Cat" />
      </div>
    </div>
  );
};

export default Hero;
