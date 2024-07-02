import Sampler from "@/components/2phone-engineering/sampler";
import Particles from "@/components/ui/particles";
import { universThin } from "@/lib/fonts";
import { getAllAudios } from "@/lib/queries";
import { cn } from "@/lib/utils";
import { getFileAsset } from "@sanity/asset-utils";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const mixes = await getAllAudios().then((audios) =>
    audios.map((audio) => ({
      title: audio.title,
      src: getFileAsset(audio.file.asset as any, {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      }).url,
    }))
  );

  return (
    <div className="overflow-hidden z-10 min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-violet-200 to-pink-200 relative">
      <h1 className="text-black mt-4 lg:mt-32 text-2xl font-semibold font-mono lg:text-3xl tracking-wider">
        2PHONESAMC ON AUX
      </h1>
      <h3
        className={cn(
          universThin.className,
          "text-sm text-gray-600 lg:text-lg mt-1"
        )}
      >
        made in cupertino, california
      </h3>
      <Sampler mixes={mixes} />
      {/* <Particles
        className="absolute z-0 inset-0"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      /> */}
      <p
        className={cn(
          universThin.className,
          "text-black -mt-32 lg:mt-0 lg:pb-16 text-sm"
        )}
      >
        engineering by{" "}
        <Link href="https://smrth.dev" className="underline">
          smrth
        </Link>
      </p>
    </div>
  );
};

export default Page;
