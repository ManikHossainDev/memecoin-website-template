import React from "react";
import OrderCard from "@/components/OrderCard";
import ContractAddress from "@/components/ContractAddress";

const AntsSummary = () => {
  return (
    <div id="ants" className="max-w-[85rem] mx-auto p-8 md:p-12">
      {/* Header */}
      <div className="my-16">
        <h2 className="font-stopbuck text-6xl text-red-500 text-duis text-shadow text-center">
          How To Buy
        </h2>
      </div>

      {/* Vision & Principles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center">
        <OrderCard order={1} title={"create a wallet"} style={"rotate-3"}>
          <span>
            Download{" "}
            <a
              href="https://metamask.io"
              target="_blank"
              className="uppercase font-extrabold text-[#ab9ff2] text-2xl"
            >
              MetaMask
            </a>{" "}
            or your{" "}
            <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text uppercase font-extrabold text-2xl">
              BNB SMART CHAIN
            </span>{" "}
            wallet of choice and follow the simple steps to create a new
            account.
          </span>
        </OrderCard>

        {/* Token Purpose */}
        <OrderCard order={2} title={"connect to dex"} style={ "rotate-0 md:-rotate-6"}>
            <span>
            If you don’t have any{" "}
            <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text uppercase font-extrabold text-2xl">
              $BNB
            </span>
            , you can buy directly on{" "}
            <a
              href="https://metamask.io"
              target="_blank"
              className="uppercase font-extrabold text-[#ab9ff2] text-2xl"
            >
              MetaMask
            </a>{" "}
            , transfer from another wallet, or buy on another exchange and send
            it to your wallet.
          </span>
        </OrderCard>

        {/* Tokenomics */}
        <OrderCard order={3} title={"swap $BNB for $ANTS"} style={"-rotate-1"}>
          <span>
            Paste the token address (CA) into wallet and swap{" "}
            <span className="bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text uppercase font-extrabold text-2xl">
              $BNB
            </span>{" "}
            for <span className="font-extrabold text-2xl text-duis">$ANTS</span>
            .{`There's zero taxes so you don’t need to worry.`}
          </span>
        </OrderCard>

        {/* Roadmap */}
        <OrderCard order={4} title={"you're ANTS!‍"} style={"rotate-2"}>
           <span>
            Welcome to the <br />
            <span className="uppercase font-extrabold text-2xl underline decoration-duis">
              ANTS colony
            </span>
            !
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