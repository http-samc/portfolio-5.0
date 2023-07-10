import React from "react";
import Headshot from "../../public/headshot.png";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 sm:space-x-8">
      <div className="sm:w-4/5">
        <h1 className="text-5xl sm:text-4xl font-extrabold">
          <Balancer>{"I'm"} Samarth Chitgopekar</Balancer>
        </h1>
        <h2 className="text-3xl sm:text-2xl mt-2">
          <Balancer>
            A comedian from Chicago, IL{" "}
            <MapPinIcon size={22} className="text-red-400 mb-2 inline-block" />
          </Balancer>
        </h2>
        <h3 className="md:max-w-[40ch] text-lg sm:text-base mt-4 italic">
          Full stack developer. Coding to make the world a better place and
          building awesome stuff along the way.
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="w-44 h-44 p-4 rounded-full overflow-hidden brand-gradient-bg">
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
    </div>
  );
};

export default Hero;
