import React from "react";
import OrderCard from "@/components/OrderCard";
import ContractAddress from "@/components/ContractAddress";

const AntsSummary = () => {
  return (
    <div id="ants" className="max-w-[85rem] mx-auto p-8 md:p-12">
      {/* Header */}
      <div className="my-16">
        <h2 className="font-stopbuck text-sm sm:text-base md:text-xl xl:text-6xl text-red-500 text-shadow text-center">
          ANTS Project Overview
        </h2>
        <h3 className="font-stopbuck text-sm sm:text-base md:text-2xl text-center text-black">
          {`Community-Driven, Transparent, Sustainable`}
        </h3>
      </div>

      {/* Vision & Principles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center">
        <OrderCard order={1} title={"Vision & Principles"} style={"rotate-3"}>
          <span className="text-xs sm:text-sm md:text-base">
            <strong>Stability</strong> over speculation.<br />
            <strong>Collective growth</strong> over individual gain.<br />
            Built on transparency, trust, and long-term thinking.
          </span>
        </OrderCard>

        {/* Token Purpose */}
        <OrderCard order={2} title={"Token Purpose & Utility"} style={"-rotate-6"}>
          <span className="text-xs sm:text-sm md:text-base">
            <span className="font-extrabold text-ANTSs">$ANTS</span> drives the ecosystem.<br />
            Rewards are contribution-based — not speculative.<br />
            Designed to recognize real value.
          </span>
        </OrderCard>

        {/* Tokenomics */}
        <OrderCard order={3} title={"Tokenomics & Distribution"} style={"-rotate-1"}>
          <span className="text-xs sm:text-sm md:text-base">
            <strong>Total Supply:</strong> 1B ANTS (Fixed)<br /><br />
            <strong>Liquidity</strong> — 20% &nbsp; <strong>Community Sale</strong> — 20%<br />
            <strong>Rewards</strong> — 20% &nbsp;&nbsp;&nbsp; <strong>Core Team</strong> — 15%<br />
            <strong>Marketing</strong> — 15% &nbsp;&nbsp; <strong>Treasury</strong> — 10%
          </span>
        </OrderCard>

        {/* Roadmap */}
        <OrderCard order={4} title={"Roadmap"} style={"rotate-2"}>
          <span className="text-xs sm:text-sm md:text-base">
            <strong>Phase 1</strong> — Foundation & launch<br />
            <strong>Phase 2</strong> — Community onboarding<br />
            <strong>Phase 3</strong> — Contribution rewards<br />
            <strong>Phase 4</strong> — Ecosystem & tools<br />
            <strong>Phase 5</strong> — Full sustainability
          </span>
        </OrderCard>
      </div>

      {/* Contract Address */}
      <div className="my-16">
        <ContractAddress />
      </div>
    </div>
  );
};

export default AntsSummary