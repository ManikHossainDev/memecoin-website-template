"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Exchanges", href: "#exchanges" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "How to buy", href: "#ants" },
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);


  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow =
      openModal || mobileMenu ? "hidden" : "auto";
  }, [openModal, mobileMenu]);


  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-[999999]
        bg-white/10 backdrop-blur-sm shadow-sm transition-all duration-300
        ${openModal ? "pointer-events-none" : "pointer-events-auto"}`}
      >
        <div className="flex items-center justify-between py-1 px-2 xl:container mx-auto">
          {/* Logo */}
          <Link href="#" className="px-2">
            <Image
              src="/logo-coin.png"
              alt="logo"
              width={500}
              height={500}
              className={`transition-all duration-300 ${
                isScrolled ? "h-10 sm:h-14" : "h-12 sm:h-16"
              } w-auto`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-x-12 uppercase">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition duration-200 text-gray-900 text-shadow-ANTSs-not-hover md:text-xl xl:text-2xl font-bold font-stopbuck tracking-wider hover:text-[#FF080E] hover:decoration-solid hover:decoration-gray-500"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buy */}
          <div className="hidden lg:flex">
            <Link href="https://pancakeswap.finance/swap?outputCurrency=0x5e27C139b478ACab178FbcA38494183EED8Cce56"
              className="rounded-xl bg-white text-black px-4 py-1.5  shadow-xl outline outline-2
              hover:text-[#FF080E] hover:scale-105 transition"
            >
              Buy $ANTS
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-3xl text-black  font-bold px-2"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="fixed rounded-md top-12 right-0 w-[50%] z-[9999999] bg-white  animate-fadeIn lg:hidden">
          <div className="flex flex-col items-center gap-6 py-6 uppercase">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="text-xl text-black font-bold hover:text-[#FF080E]"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => {
                setMobileMenu(false);
                setOpenModal(true);
              }}
              className="bg-red-500 text-white px-6 py-2 rounded-xl font-semibold"
            >
              Buy $ANTS
            </button>
          </div>
        </div>
      )}

      {/* ================= BUY MODAL ================= */}
     
    </>
  );
};

export default Nav;
