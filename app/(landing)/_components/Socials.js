import React from "react";
import LinkCardCircle from "@/components/LinkCardCircle";

const cards = [
  {
    link: "https://t.me/ANTSAnnouncements",
    title: "telegram",
    icon: "Telegram",
  },
  {
    link: "https://x.com/ANTS_Community",
    title: "x",
    icon: "X",
  },
  {
    link: "https://t.me/ANTSCommunityOfficial",
    title: "telegram",
    icon: "Telegram",
  },
  {
    link: "https://www.tiktok.com/@ants.community",
    title: "Tiktok",
    icon: "Tiktok",
  },
];

const Socials = () => {
  return (
    <div>
      <div className="hidden">
        <h2 className="font-stopbuck text-6xl text-ANTSs text-shadow text-center">
          Socials
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {cards.map((card, idx) => (
          <LinkCardCircle key={idx} props={card} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
