"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "crown",
    name: "Acmebrand",
  },
  {
    icon: "leaf",
    name: "Acmelogo",
  },
  {
    icon: "ghost",
    name: "Acmesponsor",
  },
  {
    icon: "puzzle",
    name: "Acmeipsum",
  },
  {
    icon: "squirrel",
    name: "Acme",
  },
  {
    icon: "cookie",
    name: "Accmee",
  },
  {
    icon: "masks",
    name: "Acmetech",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Our Platinum Sponsors
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <i className={`ti ti-${icon} mr-2`} style={{ fontSize: "32px" }}></i>
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};