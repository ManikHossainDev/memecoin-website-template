'use client'

import React from "react";
import Image from "next/image";
import { useEffect, useRef } from 'react';

const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer - instant mute/unmute
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Instant mute/unmute - kono delay nai
          
        });
      },
      {
        threshold: 0.1, // 10% visible holeo trigger
        rootMargin: '50px' // 50px age thekei trigger hobe
      }
    );

    observer.observe(video);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

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
            width: 60px;
            height: 60px;
          }

          @media (min-width: 480px) {
            .cloud {
              width: 80px;
              height: 80px;
            }
          }

          @media (min-width: 640px) {
            .cloud {
              width: 100px;
              height: 100px;
            }
          }

          @media (min-width: 768px) {
            .cloud {
              width: 120px;
              height: 120px;
            }
          }

          @media (min-width: 1024px) {
            .cloud {
              width: 150px;
              height: 150px;
            }
          }
        `}</style>

        {/* Animated Clouds - Top layer */}
        <div className="absolute -top-11 left-0 w-full overflow-hidden">
          <div className="flex w-full justify-between">
            <div className="cloud -ms-2 sm:-ms-4 md:-ms-6" style={{animationDelay: '0s'}}>
              <Image src="/collection/ant_01.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-2 sm:-ms-4 md:-ms-6 rotate-6" style={{animationDelay: '0.3s'}}>
              <Image src="/collection/ant_02.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-2 sm:-ms-4 md:-ms-6" style={{animationDelay: '0.6s'}}>
              <Image src="/collection/ant_03.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-2 sm:-ms-4 md:-ms-6 -rotate-12" style={{animationDelay: '0.9s'}}>
              <Image src="/collection/ant_04.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-2 sm:-ms-4 md:-ms-6" style={{animationDelay: '1.2s'}}>
              <Image src="/collection/ant_05.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-2 sm:-ms-4 md:-ms-6 rotate-12" style={{animationDelay: '1.5s'}}>
              <Image src="/collection/ant_06.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="hidden md:block cloud -ms-2 sm:-ms-4 md:-ms-6" style={{animationDelay: '1.8s'}}>
              <Image src="/collection/ant_15.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-2 sm:-ms-4 md:-ms-6 -rotate-6" style={{animationDelay: '2.1s'}}>
              <Image src="/collection/ant_08.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-2 sm:-ms-4 md:-ms-6" style={{animationDelay: '2.4s'}}>
              <Image src="/collection/ant_09.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-2 sm:-ms-4 md:-ms-6" style={{animationDelay: '2.7s'}}>
              <Image src="/collection/ant_10.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-2 sm:-ms-4 md:-ms-6 rotate-6" style={{animationDelay: '3.3s'}}>
              <Image src="/collection/ant_12.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-2 sm:-ms-4 md:-ms-6" style={{animationDelay: '3.6s'}}>
              <Image src="/collection/ant_13.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
            <div className="cloud -ms-2 sm:-ms-4 md:-ms-6 -rotate-12" style={{animationDelay: '3.9s'}}>
              <Image src="/collection/ant_14.png" alt="" width={150} height={150} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div id="about" className=" my-7 md:my-10 xl:mt-20 px-1 md:px-2 xL:px-4 py-10 sm:pt-14 mx-auto">
        <div className=" mb-5">
          <h2 className="font-stopbuck text-xl md:text-4xl  xl:text-6xl text-red-500 text-shadow text-center mt-14">
            About Ants
          </h2>
          <h3 className="font-roboto font-stopbuck  text-sm  md:text-xl text-center italic text-black">
            {`(One ANT is weak. Together, we are unstoppable.)`}
          </h3>
        </div>
          
        <div className="xl:container mx-auto grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Video Section */}
          <div className="w-full h-full mt-1">
            <video
              ref={videoRef}
              className="w-full md:h-[50vh] lg:h-[60vh] xl:h-[61vh] object-cover rounded-lg"
              src="/collection/Abount.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>

          {/* Text Section */}
          <div className="font-roboto text-[#33271e] tracking-wide lg:text-justify">

            {/* Header */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              ANTS — Collective Strength
            </h2>

            <p className="text-md sm:text-lg md:text-xl lg:text-md xl:text-xl mb-3">
              ANTS is a community driven digital asset ecosystem built on fairness, transparency and long term cooperation. Operating on the Binance Smart Chain, ANTS is designed as a sustainable alternative to short term, speculative projects that dominate the digital asset space.
            </p>

            <p className="text-md sm:text-lg md:text-xl lg:text-md xl:text-xl mb-5">
              Rather than focusing on hype or rapid price movements, ANTS emphasizes collective participation, discipline and shared responsibility. The project is founded on the belief that while a single participant has limited impact, a united community can build resilient systems that endure over time.
            </p>
              
            {/* Transparency */}
            <h3 className="hidden md:block text-md sm:text-xl md:text-2xl font-semibold mb-2">
              Transparency & Trust
            </h3>

            <p className="hidden md:block text-md sm:text-lg md:text-xl mb-5">
              Transparency and trust form the foundation of the ANTS ecosystem. Clear communication and visible decision making ensure that every participant contributes to the strength and stability of the network.
            </p>

            {/* Vision */}
            <h3 className="hidden md:block text-md sm:text-xl md:text-2xl font-semibold mb-2">
              Vision & Principles
            </h3>

            <p className="hidden md:block text-md sm:text-lg md:text-xl mb-5">
              ANTS prioritizes long term thinking and sustainable growth. Success is measured not by aggressive expansion or short term speculation, but by community alignment, accountability and lasting value creation.
            </p>
          </div>
        </div>
        <div className="font-roboto lg:block xl:container mx-auto xl:mt-10 font-roboto text-base md:text-lg xl:text-xl text-[#33271e] tracking-widest text-center">
            <p>
              From the very beginning 🐜,{" "}
              <span className="text-base md:text-lg xl:text-2xl font-bold">ANTS</span>{" "}
              was built on fairness, transparency, and long-term cooperation.
              It is not the result of hype or short-term speculation, but a
              disciplined, community-driven initiative.
            </p>

            <p className="font-roboto text-base md:text-lg xl:text-2xl xl:p-10">
              Today,{" "}
              <span className="text-md md:text-lg xl:text-2xl font-bold underline decoration-ANTSs">
                ANTS
              </span>{" "}
              moves forward with the strength of a united community, and is
              built to endure forever on{" "}
              <span className="text-md md:text-lg xl:text-2xl bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text font-bold">
                Binance Smart Chain
              </span>
            </p>
        </div>
  </div>
</div>
  );
};

export default About;