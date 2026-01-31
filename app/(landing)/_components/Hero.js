import React from "react";

const Hero = () => {
  return (
    <div className=" h-[30vh] sm:h-[35vh] md:h-[60vh] lg:h-[70vh] xl:h-dvh">
      <div className="bg-[url(/hero.png)]  bg-contain xl:bg-cover bg-no-repeat fixed  xl:top-0 left-0 h-full w-full -z-10"></div>
    </div>
  );
};

export default Hero;
