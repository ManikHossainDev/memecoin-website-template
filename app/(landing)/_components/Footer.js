import React from "react";
import Image from "next/image";
import Socials from "./Socials";

import { contractAddress } from "@/constants";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="text-center font-stopbuck mt-16 pb-5 border-t border-gray-100 pt-8">
        <div className="my-5 mb-10">
          <Socials />
        </div>
        <div>
          <p className="text-sm sm:text-md/relaxed text-gray-500 px-4">
            © &nbsp; <span className="text-red-500 text-shadow">ANTs</span>{" "}
            community 2026.
            <br />
            <span className="underline decoration-ANTSs">
              {"All cuteness reserved for ANTS."}
            </span>
          </p>
        </div>
      </div>
      
      <div className="overflow-hidden relative h-16 sm:h-20 md:h-24">
        <Image 
          width={200}
          height={200} 
          className="absolute bottom-0 w-full" 
          src="/grass.svg" 
          alt="grass" 
        />
      </div>

      <div className="absolute bottom-0 w-full px-2 sm:px-5">
        <div className="flex justify-between lg:justify-around">
          <div className="flex w-full justify-around">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <Image
                className="w-full h-full object-contain"
                src="/collection/ant_01.png"
                width={100}
                height={100}
                alt="ANTS 1"
              />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <Image
                className="w-full h-full object-contain"
                src="/collection/ant_13.png"
                width={100}
                height={100}
                alt="ANTS 2"
              />
            </div>
          </div>
          <div className="flex w-full justify-around">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <Image
                className="w-full h-full object-contain"
                src="/collection/ant_07.png"
                width={100}
                height={100}
                alt="ANTS 4"
              />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <Image
                className="w-full h-full object-contain"
                src="/collection/ant_02.png"
                width={100}
                height={100}
                alt="ANTS 3"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;