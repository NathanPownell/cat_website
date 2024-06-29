import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";


const Dropz = () => {
  return (
    <div className="p-5 m-5 w-full border-2 border-slate-300 bg rounded-md flex items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% text-white">
      <Image src="/Dropz.png" alt="dripz" width={130} height={200} />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">Buy on Dropz</h3>
        <p className="text-sm">
          Sign up with email and buy the hottest memecoins with credit/debit
          card!
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <Button
            asChild
            className="w-min bg-transparent border-color-white border-2"
          >
            <Link target="_blank" href="http://dropz.cc"> Buy now &nbsp;<ExternalLinkIcon size="14" /> </Link>
          </Button>
          <Link href="http://x.com/dropzcc" target="_blank" className="underline font-bold">Follow Dropz on X!</Link>
        </div>
      </div>
    </div>
  );
};

export default Dropz;
