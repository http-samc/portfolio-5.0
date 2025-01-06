import Sampler from "@/components/2phone-engineering/sampler";
import TrackList from "@/components/2phone-engineering/track-list";
import Particles from "@/components/ui/particles";
import { universThin } from "@/lib/fonts";
import { getAllAudios } from "@/lib/queries";
import { cn } from "@/lib/utils";
import { getFileAsset } from "@sanity/asset-utils";
import Link from "next/link";
import React from "react";
import { TwoPhoneEngineeringProvider } from "@/contexts/2phone-engineering-context";
import { ExternalLinkIcon } from "lucide-react";

export interface Mix {
  title: string;
  src: string;
}

const Page = async () => {
  const mixes: Mix[] = await getAllAudios().then((audios) =>
    audios.map((audio) => ({
      title: audio.title,
      src: getFileAsset(audio.file.asset as any, {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      }).url,
    }))
  );

  return (
    <div className="overflow-hidden scroll-smooth z-10 min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-violet-200 to-pink-200 relative">
      <h1 className="text-black mt-4 lg:mt-32 text-2xl font-semibold font-mono lg:text-3xl tracking-wider">
        2PHONESAMC ON AUX
      </h1>
      <h3
        className={cn(
          universThin.className,
          "text-sm text-gray-600 lg:text-lg mt-1"
        )}
      >
        djing from cupertino, california
      </h3>
      <div className="mb-16 relative">
        <div className="absolute top-6 left-0 flex w-full justify-center">
          <div className="bg-white/30 z-40 rounded-full px-2.5 py-0.5">
            <Link
              href="#track-list"
              className="brand-gradient-text z-40 font-semibold flex items-center gap-1.5"
            >
              <span>tracklist</span>
              <ExternalLinkIcon className="w-4 h-4 -mt-[1.5px] inline text-violet-400" />
            </Link>
          </div>
        </div>
        <TwoPhoneEngineeringProvider mixes={mixes}>
          <Sampler />
          <TrackList />
        </TwoPhoneEngineeringProvider>
      </div>
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
