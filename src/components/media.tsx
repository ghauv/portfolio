"use client";

import { useState, useEffect, JSX } from "react";
import Image from "next/image";
import { DeviceType } from "./devices-frame";
import { MediaItem } from "@/types/projects.types";
import { DeviceCard } from "./device-card";
import { clipFrame } from "./project-card";

interface Props {
  media: MediaItem;
}

export default function Media({ media }: Props) {
  const containerClass =
    media.deviceType === DeviceType.MOBILE
      ? "w-full aspect-[9/16] relative"
      : "w-full aspect-video relative";

  return (
    <figure className="group">
      {media.type === "image" && media.deviceType === DeviceType.LAPTOP ? (
        <div className="w-full flex flex-row h-fit">
          <div
            className="flex-1 aspect-video rounded-t-[0.5rem]"
            style={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="relative mb-4 md:mb-8  bg-gradient-to-br from-background via-muted/30 to-muted/50 flex aspect-video overflow-y-clip">
              {clipFrame(
                <DeviceCard
                  image={media.url || "/placeholder.svg"}
                  title={`title`}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        // <div className={`${containerClass} overflow-hidden  bg-gray-100`}>
        //   <Image
        //     src={media.url}
        //     alt={media.alt || "Project image"}
        //     fill
        //     className="object-cover object-top"
        //     sizes={
        //       media.deviceType === DeviceType.MOBILE
        //         ? "100vw"
        //         : "(max-width: 768px) 100vw, 50vw"
        //     }
        //   />
        // </div>
        <div
          className={`${containerClass} overflow-hidden rounded-lg bg-black`}
        >
          <video
            src={media.url}
            controls
            className="w-full h-full object-contain"
            preload="metadata"
          >
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
      )}

      {media.caption && (
        <figcaption className="mt-2 text-sm text-gray-600 text-center">
          {media.caption}
        </figcaption>
      )}

      {media.alt && !media.caption && (
        <figcaption className="mt-2 text-sm text-gray-500 text-center italic">
          {media.alt}
        </figcaption>
      )}
    </figure>
  );
}

// FULL image
{
  /* <div
          className="flex-1 basis-1/3 aspect-[9/16] rounded-t-[0.5rem]"
          style={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
        >
          <DeviceCard image={media.url || "/placeholder.svg"} title={`title`} />
        </div> */
}
