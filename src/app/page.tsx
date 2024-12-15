import Container from "@/components/container";
import Hero from "@/components/hero";
import MainInfoCard from "@/components/main-info-card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="z-20 sticky top-0 bg-background shadow-md w-full flex flex-col p-2 items-center md:hidden">
        <Image
          src="/fartcatLogo.png"
          alt="fred the farting cat"
          width={100}
          height={80}
        />
      </div>
      <main className="flex min-h-screen min-w-screen flex-col items-center gap-12">
        <div className="z-10 flex flex-col w-full gap-12 items-center justify-center   lg:flex">
          <Hero />
          <Container className="flex flex-col items-center">
            <div>
              <MainInfoCard />
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
