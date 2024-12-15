"use client";
import { Button } from "@/components/ui/button";
import { LinkIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Separator } from "./ui/separator";
import { Card, CardTitle } from "./ui/card";
import {
  CONTRACT_ADDRESS,
  TELEGRAM_LINK,
  TWITTER_LINK,
} from "@/helpers/common";

const MainInfoCard = () => {
  const [tooltipText, setTooltipText] = useState("Copy");
  const onCopyCa = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setTooltipText("Copied! ✅");
  };

  return (
    <Card className="flex w-full max-w-lg min-h-full flex-col gap-3 p-2">
      <div>
        <div className="flex flex-col justify-center text-center align-center">
          <div className="flex w-full justify-center">
            <Image
              className="rounded-full border"
              alt="Fred the Farting Cat"
              width={60}
              height={60}
              src={"/fartcatLogo.png"}
            />
          </div>
          <h1 className="text-lg font-bold">Fred the Farting Cat</h1>
          <h2 className="text-md font-bold">$FRTCAT</h2>
          <div className="flex text-xs justify-center gap md:text-md md:gap-2 items-center flex-wrap">
            Ca:
            <div className="text-gray-500 text-xs">{CONTRACT_ADDRESS}</div>
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    variant={"outline"}
                    onClick={() => onCopyCa()}
                    className="w-6 h-6 w-full md:w-auto"
                    size={"icon"}
                  >
                    <div className="lg:hidden flex items-center gap-2">
                      Copy CA <LinkIcon size={16} />
                    </div>
                    <div className="hidden lg:block">
                      <LinkIcon size={16} />
                    </div>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tooltipText}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <Separator />
      <div className="text-center">
        <p>
          Welcome to Farting Cat.
          <br />
          Im glad SOL gas fees are low.
          <br />
        </p>
      </div>
      <Separator />
      <div className="flex gap-2 justify-center flex-wrap">
        <Button size={"sm"} asChild variant={"outline"}>
          <div className="flex gap-1">
            <Image
              src="/twitter.png"
              width={16}
              height={16}
              alt="birdeye"
              className="w-6 h-6 rounded-full"
            />
            <a className="text-xs" href={TWITTER_LINK} target="_blank">
              Twitter
            </a>
          </div>
        </Button>
        <Button size={"sm"} asChild variant={"outline"}>
          <div className="flex gap-1">
            <Image
              src="/telegram.png"
              width={16}
              height={16}
              alt="birdeye"
              className="w-6 h-6 rounded-full"
            />
            <a className="text-xs" href={TELEGRAM_LINK} target="_blank">
              Telegram
            </a>
          </div>
        </Button>
        <Button size={"sm"} asChild variant={"outline"}>
          <div className="flex gap-1">
            <Image
              src="/dexscreener.png"
              width={16}
              height={16}
              alt="birdeye"
              className="w-6 h-6 rounded-full"
            />
            <a
              className="text-xs"
              href="https://dexscreener.com/solana/djbznkc7f9jxdc1cyb7k78hfrnidavspkiyuj3kuzac8"
              target="_blank"
            >
              Dexscreener
            </a>
          </div>
        </Button>
        <Button size={"sm"} asChild variant={"outline"}>
          <div className="flex gap-1">
            <Image
              src="/birdeye.jpg"
              width={16}
              height={16}
              alt="birdeye"
              className="w-6 h-6 rounded-full"
            />
            <a
              className="text-xs"
              href={`https://birdeye.so/token/${CONTRACT_ADDRESS}?chain=solana`}
              target="_blank"
            >
              Birdeye
            </a>
          </div>
        </Button>
      </div>
    </Card>
  );
};

export default MainInfoCard;
