"use client";

import { useEffect, useRef, useState } from "react";

interface HeroBannerVideoProps {
  /** Poster/banner image shown immediately on load */
  imageSrc: string;
  /** Video that crossfades in once it's ready to play */
  videoSrc: string;
  alt?: string;
  className?: string;
  /** Crossfade duration in ms */
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
      // play() can reject if the browser blocks autoplay; that's fine,
      // the fade only triggers once playback has actually begun.
      video
        .play()
        .then(() => setVideoReady(true))
        .catch(() => setVideoReady(true)); // still reveal a paused frame
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
      {/* Banner image: the starting frame */}
      <img
        src={imageSrc}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out rounded-lg"
        style={{
          opacity: videoReady ? 0 : 1,
          transitionDuration: `${fadeDurationMs}ms`,
        }}
      />

      {/* Video: fades in on top, replacing the image */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out rounded-lg"
        style={{
          opacity: videoReady ? 1 : 0,
          transitionDuration: `${fadeDurationMs}ms`,
        }}
      />
    </div>
  );
}
