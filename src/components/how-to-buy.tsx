import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const HowToBuy = () => {
  return (
    <Card id="how-to-buy" className="p-4 flex flex-col gap-2 my-4">
      <div className="text-3xl font-bold">How To Buy $BON</div>
      <br />
      <div className="flex w-full justify-center align-end">
          <Image src="/phantom.png" className="rounded-md shadow-md" width={200} height={200} alt="Phantom App" />
      </div>
      <div className="text-2xl font-bold text-muted-foreground">
        Step 1: Download Phantom
      </div>
      <p>
        Download the Phantom app from the Apple app store or Google Play. Create
        a wallet and write the seed phrase down and keep it safe.
      </p>
      <br />
      <div className="flex w-full justify-center align-end">
          <Image src="/phantom2.png" className="rounded-md shadow-md" width={200} height={200} alt="Phantom App" />
      </div>
      <div className="text-2xl font-bold text-muted-foreground">
        Step 2: Buy Solana
      </div>
      <p>
        Use MoonPay to purchase Solana tokens. You&apos;ll need these for the
        next step.
      </p>
      <br />
      <div className="flex w-full justify-center align-end">
          <Image src="/phantom3.png" className="rounded-md shadow-md" width={200} height={200} alt="Phantom App" />
      </div>
      <div className="text-2xl font-bold text-muted-foreground">
        Step 3: Click Swap & Search for $BON
      </div>
      <p>
        Click the &quot;Swap&quot; button on the bottom of the Phantom app and search for &quot;Bon Shatiro&quot; in the token search bar.
      </p>
      <br />
      <div className="flex w-full justify-center align-end">
          <Image src="/phantom4.png" className="rounded-md shadow-md" width={200} height={200} alt="Phantom App" />
      </div>
      <div className="text-2xl font-bold text-muted-foreground">
        Step 4: Swap Solana for $BON
      </div>
      <p>Enter the amount of SOL you wish to swap for $BON tokens. Press the &quot;Review Order&quot; button and swap your Solana for $BON.</p>
      <br />
      <b>
        It&apos;s that simple. If you have any questions about the process
        please join our <Link className="underline" href={""}>Telegram</Link>.
      </b>
    </Card>
  );
};

export default HowToBuy;
