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

const MainInfoCard = () => {
  const [tooltipText, setTooltipText] = useState("Copy");
  const onCopyCa = () => {
    navigator.clipboard.writeText(
      "6bPFbxgpsFZg6WDruj7vrodq4GY7K7TmqUnAm1byu3PW"
    );
    setTooltipText("Copied! ✅");
  };

  return (
    <Card  className="flex w-full min-h-full flex-col gap-3 p-2">
      <div>
        <div className="flex flex-col justify-center text-center align-center">
          <div className="flex w-full justify-center">
            <Image
              className="rounded-full border"
              alt="Bon Shatiro"
              width={60}
              height={60}
              src={"/bonshatiro.png"}
            />
          </div>
          <h1 className="text-lg font-bold">Bon Shatiro</h1>
          <h2 className="text-sm font-bold">$BON</h2>
          <div className="flex text-xs justify-center gap md:text-sm md:gap-2 items-center flex-wrap">
            Ca:
            <div className="text-gray-500 text-xs">
              6bPFbxgpsFZg6WDruj7vrodq4GY7K7TmqUnAm1byu3PW
            </div>
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
          Welcome to the Bon Shatiro CTO.
          <br />
          Facts don&apos;t care about your feelings.
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
            <a
              className="text-xs"
              href="https://twitter.com/BonShatiroSOL"
              target="_blank"
            >
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
            <a
              className="text-xs"
              href="https://t.co/gezdnpxrHC"
              target="_blank"
            >
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
              href="https://dexscreener.com/solana/djbznkc7f9jxdc1cyb7k78hfrnidavspkiyuj3kuzac8?maker=6u6AHzKf8JsegjPsMroJsByTUvHjByhphndXSo1GdSsv"
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
              href="https://birdeye.so/token/6bPFbxgpsFZg6WDruj7vrodq4GY7K7TmqUnAm1byu3PW?chain=solana"
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
