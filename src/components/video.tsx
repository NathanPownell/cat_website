'use client';
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function Video(Props: { className?: string; src?: string;}) {
  const { className, src } = Props;
  const videoRef = useRef(null) as React.MutableRefObject<HTMLVideoElement | null>;

  useEffect(() => {    
    videoRef.current?.load();
  }, [src]);
    return (
      <video ref={videoRef} className={cn(className, "rounded-lg shadow-lg")} loop width='800' autoPlay muted controls preload="none">
        <source src={src ?`/videos${src}` : "/videos/Week.mp4"} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
          
        />
        Your browser does not support the video tag.
      </video>
    )
  }