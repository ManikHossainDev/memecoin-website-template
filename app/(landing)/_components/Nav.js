"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Exchanges", href: "#exchanges" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "How to buy", href: "#buy" },
  // { name: "Wall of love", href: "#love" },
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Global"
      className={`fixed top-0 left-0 w-full z-[999999] shadow-lg transition-all duration-300 ${
        isScrolled ? "h-16 sm:h-20" : "h-16 sm:h-20"
      }`}
    >
      <div className="flex items-center justify-between p-2 lg:px-8 mx-auto max-w-screen-xl">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <Image
              src="/logo-coin.png"
              width={500}
              height={500}
              className={`transition-all duration-300 ${
                isScrolled ? "h-10 sm:h-14 w-auto" : "h-12 sm:h-16 w-auto"
              }`}
              alt="logo coin"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:gap-x-12 cursor-pointer uppercase">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition duration-200 text-gray-900 text-shadow-ANTSs-not-hover md:text-xl xl:text-2xl font-bold font-stopbuck tracking-wider hover:text-[#FF080E] hover:decoration-solid hover:decoration-gray-500`}
            >
              {item.name}
            </Link> 
          ))}
        </div>

        {/* Buy Button */}
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="https://dexscreener.com/solana/8j5r6kteet9cm6wamq2mwb2sneu97cz1jtksdg76moon"
            target="_blank"
            className="transition duration-200 font-stopbuck text-sm sm:text-lg md:text-xl xl:text-2xl rounded-xl px-2 sm:px-3.5 py-1.5 sm:py-2.5 font-medium text-[#000] hover:text-[#FF080E] shadow-2xl bg-white hover:bg-transparent hover:outline-red-500 outline outline-2 outline-offset-0"
          >
            Buy $ANTS          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;