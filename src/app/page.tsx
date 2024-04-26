
// import bonShatiro from "@/public/bonshatiro.png";

import Content from "@/components/content";
import Header from "@/components/header";
import MainInfoCard from "@/components/main-info-card"

export default function Home() {

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center gap-12 p-2 lg:p-x-24">
      <div className="z-10 flex flex-col w-full gap-12 md:flex-row md:max-w-5xl items-center justify-center  text-sm lg:flex">
        <MainInfoCard />
        <Header />
      </div>
        <Content />
    </main>
  );
}
