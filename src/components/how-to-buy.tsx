import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";

const HowToBuy = () => {
  return (
    <Card id="how-to-buy" className="p-4 my-4">
      <div className="text-3xl font-bold">How To Buy $BON</div>
      <br />
      <div className="text-2xl font-bold text-muted-foreground">
        Step 1: Download Phantom
      </div>
      <p>
        Download the Phantom app from the Apple app store or Google Play. Create
        a wallet and write the seed phrase down and keep it safe.
      </p>
      <br />
      <div className="text-2xl font-bold text-muted-foreground">
        Step 2: Buy Solana
      </div>
      <p>
        Use MoonPay to purchase Solana tokens. You&apos;ll need these for the
        next step.
      </p>
      <br />
      <div className="text-2xl font-bold text-muted-foreground">
        Step 3: Go To Birdeye
      </div>
      <p>
        Visit{" "}
        <Link
        className="underline"
          href={
            "https://birdeye.so/token/6bPFbxgpsFZg6WDruj7vrodq4GY7K7TmqUnAm1byu3PW?chain=solana"
          }
        >
          Birdeye.so
        </Link>
        , which is a DEX, or Decentralized Exchange. Press the &quot;Connect
        Wallet&quot; button to connect your Phantom wallet to the DEX. Ensure
        the token address matches $BON.{" "}
      </p>
      <br />
      <div className="text-2xl font-bold text-muted-foreground">
        Step 4: Swap Solana for $BON
      </div>
      <p>Press the &quot;Swap&quot; button and swap your Solana for $BON.</p>
      <br />
      <b>
        It&apos;s that simple. If you have any questions about the process
        please join our <Link className="underline" href={""}>Telegram</Link>.
      </b>
    </Card>
  );
};

export default HowToBuy;
