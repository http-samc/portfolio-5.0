import React from "react";
import Headshot from "../../public/headshot.png";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 sm:space-x-8">
      <div className="sm:w-4/5">
        <h1 className="text-4xl font-extrabold">{"I'm"} Samarth Chitgopekar</h1>
        <h2 className="flex items-center text-2xl mt-2">
          A comedian from Chicago, IL{" "}
          <MapPinIcon size={22} className="text-red-400 ml-1" />
        </h2>
        <h3 className="md:max-w-[40ch] mt-4 italic">
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
