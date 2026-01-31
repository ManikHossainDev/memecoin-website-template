'use client'

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="-mt-14" style={{height: '10px'}}>
        <style jsx>{`
          @keyframes cloudFloat {
            0%, 100% {
              transform: translateY(0px) translateX(0px);
            }
            25% {
              transform: translateY(-8px) translateX(5px);
            }
            50% {
              transform: translateY(-4px) translateX(-3px);
            }
            75% {
              transform: translateY(-10px) translateX(3px);
            }
          }
          
          .cloud {
            animation: cloudFloat 10s ease-in-out infinite;
            display: inline-block;
            flex-shrink: 0;
            width: 120px;
            height: 120px;
          }

          @media (min-width: 640px) {
            .cloud {
              width: 150px;
              height: 150px;
            }
          }
        `}</style>

        {/* Animated Clouds - Top layer */}
        <div className="absolute -top-11 left-0 w-full overflow-hidden">
          <div className="flex w-full justify-between">
            <div className="cloud -ms-6" style={{animationDelay: '0s'}}>
              <Image src="/collection/ant_01.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-6 rotate-6" style={{animationDelay: '0.3s'}}>
              <Image src="/collection/ant_02.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-6" style={{animationDelay: '0.6s'}}>
              <Image src="/collection/ant_03.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-6 -rotate-12" style={{animationDelay: '0.9s'}}>
              <Image src="/collection/ant_04.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-6" style={{animationDelay: '1.2s'}}>
              <Image src="/collection/ant_05.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-6 rotate-12" style={{animationDelay: '1.5s'}}>
              <Image src="/collection/ant_06.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-6" style={{animationDelay: '1.8s'}}>
              <Image src="/collection/ant_15.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-6 -rotate-6" style={{animationDelay: '2.1s'}}>
              <Image src="/collection/ant_08.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-6" style={{animationDelay: '2.4s'}}>
              <Image src="/collection/ant_09.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-6" style={{animationDelay: '2.7s'}}>
              <Image src="/collection/ant_10.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-6 rotate-6" style={{animationDelay: '3.3s'}}>
              <Image src="/collection/ant_12.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-6" style={{animationDelay: '3.6s'}}>
              <Image src="/collection/ant_13.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-6 -rotate-12" style={{animationDelay: '3.9s'}}>
              <Image src="/collection/ant_14.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div id="about" className=" my-1 px-1 md:px-2 xL:px-4 py-10 sm:py-14 mx-auto">
        <div className="my-7 md:my-10">
          <h2 className="font-stopbuck text-4xl  xl:text-6xl text-red-500 text-shadow text-center mt-14">
            About Dúi
          </h2>
          <h3 className="font-stopbuck text-2xl text-center italic text-black">
            {`(Nguyen Van Dui)`}
          </h3>
        </div>
        <div className="xl:container mx-auto grid lg:grid-cols-2 gap-6 items-stretch">
  {/* Video Section */}
  <div className="w-full h-full">
    <video
      className="w-full h-[70vh] object-cover rounded-lg"
      src="/collection/Abount.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>

  {/* Text Section */}
          <div className="">
  <div className="font-mono text-[#33271e] tracking-wide text-justify ">

    {/* Header */}
    <h2 className="text-xl sm:text-2xl md:text-4xl  font-bold mb-2">
      ANTS — Collective Strength
    </h2>

    <p className="text-md sm:text-lg md:text-xl mb-3">
      ANTS is a community-driven digital asset ecosystem built on fairness,
      transparency, and long-term cooperation, operating on the Binance Smart
      Chain. It is designed as a sustainable alternative to short-term,
      speculative projects.
    </p>

    <p className="text-md sm:text-lg md:text-xl mb-3">
      Rather than focusing on hype or rapid price movement, ANTS emphasizes
      collective participation, discipline, and shared responsibility. A united
      community can build resilient systems that endure over time.
    </p>

    {/* Transparency */}
    <h3 className="text-md sm:text-xl md:text-2xl font-semibold mb-2">
      Transparency & Trust
    </h3>

    <p className="text-md sm:text-lg md:text-xl mb-3">
      Clear communication and visible decision-making form the foundation of the
      ecosystem. Every participant contributes to its strength, with a focus on
      long-term sustainability over aggressive growth.
    </p>

    {/* Vision */}
    <h3 className="text-md sm:text-xl md:text-2xl font-semibold mb-2">
      Vision & Principles
    </h3>

    <ul className="list-disc pl-6 text-md sm:text-lg md:text-xl mb-3">
  <li>
    Long-term thinking and stability — focusing on sustainable growth and
    decisions that benefit the ecosystem over time rather than short-term gains.
  </li>
  <li>
    Community responsibility — encouraging every member to act with honesty,
    accountability, and a shared sense of ownership.
  </li>
  
</ul>

    
  </div>
      </div>
      
    </div>
    <div className="mt-10 font-mono text-md md:text-lg xl:text-2xl text-[#33271e] tracking-widest text-center">
          <p>
            Unfortunately 🥹, <span className="text-md md:text-lg xl:text-2xl font-bold">Dui</span>{" "}
            passed away on{" "}
            <span className="italic font-semibold">October 18, 2023</span>,
            after a tragic snake🐍 bite.
          </p>
          <p className="text-md md:text-lg xl:text-2xl p-10">
            But now{" "}
            <span className="text-md md:text-lg xl:text-2xlfont-bold underline decoration-duis">
              Dui
            </span>{" "}
            is forever on{" "}
            <span className="text-md md:text-lg xl:text-2xl bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text font-bold">
              Solana
            </span>{" "}
          </p>
        </div>
    </div>
    </div>
  );
};

export default About;