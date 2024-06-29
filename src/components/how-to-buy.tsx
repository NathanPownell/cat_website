import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HowToBuy = () => {
  return (
    <Card id="how-to-buy" className="p-4 w-full flex flex-col gap-2 my-4">
      <div className="text-3xl font-bold">How To Buy $BON</div>
      <br />
      <Tabs defaultValue="phantom" className="w-full">
        <TabsList>
          <TabsTrigger value="phantom">Phantom</TabsTrigger>
          <TabsTrigger value="bonkbot">BonkBot</TabsTrigger>
        </TabsList>
        <TabsContent value="phantom">
          <div className="flex w-full justify-center align-end">
            <Image
              src="/phantom/phantom.png"
              className="rounded-md shadow-md"
              width={200}
              height={200}
              alt="Phantom App"
            />
          </div>
          <div className="text-2xl font-bold text-muted-foreground">
            Step 1: Download Phantom
          </div>
          <p>
            Download the Phantom app from the Apple app store or Google Play.
            Create a wallet and write the seed phrase down and keep it safe.
          </p>
          <br />
          <div className="flex w-full justify-center align-end">
            <Image
              src="/phantom/phantom2.png"
              className="rounded-md shadow-md"
              width={200}
              height={200}
              alt="Phantom App"
            />
          </div>
          <div className="text-2xl font-bold text-muted-foreground">
            Step 2: Buy Solana
          </div>
          <p>
            Use MoonPay to purchase Solana tokens. You&apos;ll need these for
            the next step.
          </p>
          <br />
          <div className="flex w-full justify-center align-end">
            <Image
              src="/phantom/phantom3.png"
              className="rounded-md shadow-md"
              width={200}
              height={200}
              alt="Phantom App"
            />
          </div>
          <div className="text-2xl font-bold text-muted-foreground">
            Step 3: Click Swap & Search for $BON
          </div>
          <p>
            Click the &quot;Swap&quot; button on the bottom of the Phantom app
            and search for &quot;Bon Shatiro&quot; in the token search bar.
          </p>
          <br />
          <div className="flex w-full justify-center align-end">
            <Image
              src="/phantom/phantom4.png"
              className="rounded-md shadow-md"
              width={200}
              height={200}
              alt="Phantom App"
            />
          </div>
          <div className="text-2xl font-bold text-muted-foreground">
            Step 4: Swap Solana for $BON
          </div>
          <p>
            Enter the amount of SOL you wish to swap for $BON tokens. Press the
            &quot;Review Order&quot; button and swap your Solana for $BON.
          </p>
          <br />
          <b>
            It&apos;s that simple. If you have any questions about the process
            please join our{" "}
            <Link className="underline" href={""}>
              Telegram
            </Link>
            .
          </b>
        </TabsContent>
        <TabsContent value="bonkbot">
          <div className="flex w-full justify-center align-end">
          </div>
          <div className="text-2xl font-bold text-muted-foreground">
            Step 1: Add BonkBot On Telegram
          </div>
          <p>
          This method uses <Link className="underline font-bold" href="https://www.bonkbot.io/">BonkBot</Link>. <br /> <br />

            <Link
            className="underline font-bold"
              href="https://t.me/bonkbot_bot?start=ref_peydi
"
              target="_blank"
            >
              Add BonkBot in Telegram{" "}
            </Link>{" "}
            - you&apos;ll use the Bonkbot chat to buy, sell, and manage tokens
            with Bonkbot.
          </p>
          <br />
          <div className="flex w-full justify-center align-end">
          </div>
          <div className="text-2xl font-bold text-muted-foreground">
            Step 2: Send Solana to Your BonkBot Wallet
          </div>
          <p>
            You&apos;ll need Solana in your Bonkbot wallet to purchase{" "}
            <b>$BON</b>.
          </p>
          <br />
          <div className="flex w-full justify-center align-end">
          </div>
          <div className="text-2xl font-bold text-muted-foreground">
            Step 3: Swap Solana for $BON
          </div>
          <p>
            Use the BonkBot <b className="font-mono">/buy</b> command to swap
            your Solana for $BON tokens.
          </p>
          <br />
          <b>
            It&apos;s that simple. If you have any questions about the process
            please join our{" "}
            <Link
              className="underline"
              target="_blank"
              href={"https://t.me/bonshatiro"}
            >
              Telegram
            </Link>
            .
          </b>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default HowToBuy;
