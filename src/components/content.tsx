"use client";

import Image from "next/image";
import React from "react";
import { Video } from "./video";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Content = () => {
  const [selectedVideo, setSelectedVideo] =
    React.useState<string>("/CincoDeMayo.mp4");
  const videos = [
    {
      title: "Cinco",
      src: "/CincoDeMayo.mp4",
      image: "/videos/CincoDeMayo.png",
    },
    {
      title: "Mamala",
      src: "/Mamala.mp4",
      image: "/videos/BonShatiroShowCover.png",
    },
    {
      title: "Work From Home",
      src: "/WorkFromHome.mp4",
      image: "/videos/BonShatiroShowCover.png",
    },
    {
      title: "American Psycho",
      src: "/AmericanPsycho.mp4",
      image: "/videos/AmericanPsycho.png",
    },
    {
      title: "Week",
      src: "/Week.mp4",
      image: "/videos/BonShatiroShowCover.png",
    },
    { 
      title: "Sleepy", 
      src: "/Sleepy.mp4", 
      image: "/videos/Sleepy.png"
    },
  ];
  const handleSelectVideo = (src: string) => {
    setSelectedVideo(src);
  };
  return (
    <div className="mb-12 text-center flex flex-col justify-end items-center">
      <h2 className="text-2xl font-bold">Content</h2>
      <div className="flex flex-col gap-4 py-2 md:flex-row h-max">
        <div className="px-4">

        <Video className="" src={selectedVideo} />
        </div>
        <ScrollArea className="w-screen md:max-h-[450px] md:w-max max-w-full whitespace-nowrap rounded-md">
          <div className="flex w-max md:flex-col">
            {videos.map((video) => (
              <Button variant={'ghost'} asChild key={video.title}>
                <div
                  onClick={() => handleSelectVideo(video.src)}
                  className={cn(selectedVideo === video.src ? 'bg-muted border-2 border-blue-400' : 'opacity-80', "rounded-md gap-2  h-min cursor-pointer aspect-video flex flex-col justify-end items-center transition duration-300 ease-in-out")}
                >
                  <Image
                    src={video.image}
                    alt={video.title}
                    width={400}
                    height={200}
                    className="w-32 aspect-video rounded-sm shadow-md" />
                  <div className="text-foreground">
                    {video.title}
                  </div>

                </div>
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <p>See more on <Link className="underline" target="_blank" href="https://www.youtube.com/@BonShatiro">YouTube</Link>.</p>
    </div>
  );
};

export default Content;
