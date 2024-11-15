
// import bonShatiro from "@/public/bonshatiro.png";

import Container from "@/components/container";
import Content from "@/components/content";
import Dripz from "@/components/dropz";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowToBuy from "@/components/how-to-buy";
import MainInfoCard from "@/components/main-info-card"
import Image from "next/image";

export default function Home() {

  return (
    <>
        <div className="z-20 sticky top-0 bg-background shadow-md w-full flex flex-col p-2 items-center md:hidden">
          <Image src='/bonshatiroshow.png' alt='bon shapiro show' width={100} height={80} />
        </div>
    <main className="flex min-h-screen min-w-screen flex-col items-center gap-12">
      <div className="z-10 flex flex-col w-full gap-12 items-center justify-center   lg:flex">
        <Hero />
        <Container className="flex flex-col items-center">

        <div>
        <MainInfoCard />
        </div>
        {/* <Header /> */}
        <Dripz />
        <Content />
        <HowToBuy />
        </Container>
      </div>
    </main>
    </>
  );
}
