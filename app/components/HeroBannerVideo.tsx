"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface HeroBannerVideoProps {
  imageSrc: string;
  videoSrc: string;
  alt?: string;
  className?: string;
  fadeDurationMs?: number;
}

export default function HeroBannerVideo({
  imageSrc,
  videoSrc,
  alt = "",
  className = "",
  fadeDurationMs = 1200,
}: HeroBannerVideoProps) {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const markReady = () => {
      video
        .play()
        .then(() => setVideoReady(true))
        .catch(() => setVideoReady(true));
    };
    if (video.readyState >= 3) {
      markReady();
    } else {
      video.addEventListener("loadeddata", markReady);
      return () => video.removeEventListener("loadeddata", markReady);
    }
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
        style={{
          opacity: videoReady ? 0 : 1,
          transitionDuration: `${fadeDurationMs}ms`,
        }}
      />
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
        style={{
          opacity: videoReady ? 1 : 0,
          transitionDuration: `${fadeDurationMs}ms`,
        }}
      />
    </div>
  );
}
