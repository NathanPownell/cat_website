
// import bonShatiro from "@/public/bonshatiro.png";

import Container from "@/components/container";
import Content from "@/components/content";
import Header from "@/components/header";
import Hero from "@/components/hero";
import MainInfoCard from "@/components/main-info-card"

export default function Home() {

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center gap-12">
      <div className="z-10 flex flex-col w-full gap-12 items-center justify-center  text-sm lg:flex">
        <Hero />
        <Container>

        <div>
        <MainInfoCard />
        </div>
        {/* <Header /> */}
        <Content />
        </Container>
      </div>
    </main>
  );
}
