import Image from "next/image";

import Header from "./_components/Header";
import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Tokenomics from "./_components/Tokenomics";
import Exchanges from "./_components/Exchanges";
import HowToBuy from "./_components/HowToBuy";
import WallOfLove from "./_components/WallOfLove";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
      <div className="bg-[#e4e0e1]">
        <About />
        <Exchanges />
        <div className="max-w-[85rem] mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-red-500"></span>
            <div>
              <Image
                className=""
                src="/collection/5.png"
                width={300}
                height={300}
                alt="ANTS-5"
              />
            </div>
            <span className="h-[3px] flex-1 bg-red-500"></span>
          </span>
        </div>

        <Tokenomics />
        <div className="max-w-[85rem] mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-red-500"></span>
            <div>
              <Image
                className=""
                src="/collection/fireants-ants.gif"
                width={300}
                height={300}
                alt="ANTS-7"
              />
            </div>
            <span className="h-[3px] flex-1 bg-red-500"></span>
          </span>
        </div>

        <HowToBuy />
        <div className="text-center">
          <div className="flex justify-center space-x-5 md:space-x-16 xl:space-x-24">
            <Image
              className="hidden md:block"
              src="/collection/ant_08.png"
              width={100}
              height={100}
              alt="ANTS-6"
            />
            <Image
              className=""
              src="/collection/ant_09.png"
              width={100}
              height={100}
              alt="ANTS-8"
            />
          </div>
          <div className="mt-5">
            <p className="font-stopbuck text-2xl text-black">Chrr! Chrr!</p>
          </div>
        </div>
        {/* <WallOfLove /> */}
        <Footer />
      </div>
    </>
  );
}
