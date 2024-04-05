"use client";
import React, { useEffect, useState } from "react";
import Headshot from "../../../public/headshot.png";
import { MapPinIcon, PlaneTakeoffIcon, PlaneIcon } from "lucide-react";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import DotGrid from "@/components/home/dot-grid";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import TextTransition from "../ui/text-transition";

const WORDS = ["comedian", "golfer", "dj"];

interface HeroProps {
  location: string;
}

const Hero = ({ location }: HeroProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);

    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="flex flex-col min-h-[calc(100vh-4.5rem)] sm:min-h-fit sm:flex-row space-y-12 sm:space-y-0 sm:space-x-8 relative">
      <div className="sm:w-4/5">
        <h1 className="text-5xl sm:text-4xl leading-tight font-extrabold">
          <Balancer>
            {"I'm "}
            <span className="underline decoration-double underline-offset-4 decoration-blue-400 font-sans">
              Sam
            </span>
            arth Chitgopekar
          </Balancer>
        </h1>
        <h2 className="text-lg sm:text-2xl mt-2 whitespace-nowrap">
          A
          <TextTransition
            springConfig="stiff"
            inline
            className="mx-1.5"
            text={WORDS[index % WORDS.length]! || "comedian"}
          />
          from Chicago, IL{" "}
          <MapPinIcon size={22} className="text-red-400 mb-2 inline-block" />
        </h2>
        <h3 className="">
          <Balancer className="md:max-w-[40ch] text-base mt-4 italic text-gray-600 dark:text-slate-500">
            Full stack developer.{" "}
            <span className="dark:text-blue-700 text-violet-400">Coding</span>{" "}
            to make the world{" "}
            <span className="dark:text-blue-700 text-violet-400">
              a better place
            </span>{" "}
            and building{" "}
            <span className="dark:text-blue-700 text-violet-400">
              awesome stuff
            </span>{" "}
            along the way.
            {/* <TextGenerateEffect
              className="md:max-w-[40ch] text-base mt-4 italic text-gray-700 dark:text-gray-400"
              words={
                "Full stack developer. Coding to make the world a better place and building awesome stuff along the way."
              }
            /> */}
          </Balancer>
        </h3>
        <div className="flex space-x-1.5 items-center text-gray-700 dark:text-gray-500">
          <p className="font-mono text-sm pt-2">
            [Currently] in{" "}
            <span className="underline decoration-wavy text-blue-400">
              {location}
            </span>
          </p>
          <PlaneIcon className="text-blue-400" size={14} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-44 h-44 p-4 rounded-full overflow-hidden relative group">
          <div className="absolute w-full h-full brand-gradient-bg -z-10 top-0 left-0 group-hover:scale-150 transition-all"></div>
          <Image
            className="w-44 h-44 object-cover"
            src={Headshot}
            alt="Headshot of Samarth Chitgopekar"
            placeholder="blur"
            draggable={false}
            priority
          />
        </div>
      </div>
      <DotGrid />
    </div>
  );
};

export default Hero;
