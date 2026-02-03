"use client";
import React from "react";

/* ─── Ant Trail Dots ─── */
const AntTrail = () => (
  <div className="flex justify-center gap-2 my-3">
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className="rounded-full bg-red-500"
        style={{
          width: "6px",
          height: "6px",
          animation: "trailPulse 1.5s ease-in-out infinite",
          animationDelay: `${i * 0.15}s`,
        }}
      />
    ))}
  </div>
);

/* ─── Main ─── */
const Exchanges = () => {
  return (
    <>
      <style>{`
        @keyframes trailPulse {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50%      { opacity: 1;   transform: scale(1.2); }
        }
        @keyframes antFloat {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-5px); }
        }
        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        id="exchanges"
        className=" xl:container mx-auto md:py-5 px-1 xl:px-4"
      >
        <div className="my-16">
          <h2
            className="text-center mt-4 text-red-500"
            style={{
              fontFamily: "stopbuck, cursive",
              fontSize: "clamp(1rem, 5vw, 3.75rem)",
              textShadow: "0 0 20px rgba(239,68,68,0.3)",
            }}
          >
            🐜 Exchanges 🐜
          </h2>

          <h3
            className="text-center text-sm md:text-md mt-2 text-black"
            style={{
              fontFamily: "stopbuck, cursive",
            }}
          >
            The colony is watching... probably nothing 🤔
          </h3>

          <div className="mt-4 w-full">
            <div className="mt-4 w-full relative overflow-hidden rounded-lg">
                <iframe
                src="https://pancakeswap.finance/swap?outputCurrency=0x5e27C139b478ACab178FbcA38494183EED8Cce56"
                width="100%"
                height="800"
                style={{ border: "none" }}
              />
            </div>
          </div>

          <div className="flex justify-center mt-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  animation: "antFloat 1s ease-in-out infinite",
                  animationDelay: `${i * 0.2}s`,
                  fontSize: "18px",
                }}
              >
                🐜
              </span>
            ))}
          </div>

          <AntTrail />
        </div>
      </div>
    </>
  );
};

export default Exchanges;
