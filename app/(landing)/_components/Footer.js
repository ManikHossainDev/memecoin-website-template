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
          <p className="text-md/relaxed text-gray-500">
            © &nbsp; <span className="text-duis text-shadow">DUIS</span>{" "}
            community 2024.
            <br />
            <span className="underline decoration-duis">
              {"All cutes reserved for duis's dawgs."}
            </span>
          </p>
         
        </div>
      </div>
      <div className="overflow-hidden relative h-24">
        <Image 
          width={200}
          height={200} 
          className="absolute bottom-0 w-full" 
          src="/grass.svg" 
          alt="grass" 
        />
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex justify-between px-5 lg:justify-around">
          <div className="flex w-full justify-around">
            <div>
              <Image
                className=""
                src="/collection/ant_01.png"
                width={100}
                height={100}
                alt="dui 1"
              />
            </div>
            <div>
              <Image
                className=""
                src="/collection/ant_13.png"
                width={100}
                height={100}
                alt="dui 2"
              />
            </div>
          </div>
          <div className="flex  w-full justify-around">
            <div>
              <Image
                className=""
                src="/collection/ant_07.png"
                width={100}
                height={100}
                alt="dui 4"
              />
            </div>
            <div>
              <Image
                className=""
                src="/collection/ant_02.png"
                width={100}
                height={100}
                alt="dui 3"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;