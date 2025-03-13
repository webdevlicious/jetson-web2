"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import HeroTextRotator from "@/components/motion/HeroTextRotator";

export const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className="container w-full bg-[url('/bg/grid_straight.svg')] bg-cover bg-center opacity-90 overflow-hidden">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-7.25 md:py-12">
        <div className="text-center space-y-4">
          <div>
            <Badge variant="outline" className="text-sm py-2 cursor-pointer">
              <span className="mr-2">
                <Badge className="bg-[#56F699]">All New</Badge>
              </span>
              <span className="text-[#56F699]"> AI powered Platform! </span>
            </Badge>
          </div>

          <div className="max-w-screen-md mx-auto text-center text-6xl md:text-20xl font-bold" style={{ fontSize: 'clamp(2.75rem, 6vw, 7rem)' }}>
            <h1>
              <span className="text-white">College Sports</span>{" "}
              <span className="text-[#56F699]">Recruiting</span> <br />
              <span className="text-[#56F699]">on Autopilot</span>
            </h1>
          </div>

          {/* Add extra space between "on Autopilot" and HeroTextRotator */}
          <div className="h-0.4"></div>

          <p className="max-w-screen-sm mx-auto text-xl text-white">
            {' '}<HeroTextRotator />{' '} <br/>with our AI powered platform.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold">
              Get Started
              <IconArrowRight className="size-5 ml-2" />
            </Button>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          {/* Original GIF implementation
          <Image
            width={1200}
            height={1024}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyMjIyMjIiIC8+PC9zdmc+"
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border-2 border-white/40 shadow-lg shadow-primary/20 ring-2 ring-primary/30 ring-offset-2 ring-offset-background"
            src={theme === "light" ? "/videos/_scrnsht_screencast_2025-02-20.gif" : "/videos/_scrnsht_screencast_2025-02-20.gif"}
            alt="dashboard"
          />
          */}
          <Image
            width={1200}
            height={1024}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyMjIyMjIiIC8+PC9zdmc+"
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border-2 border-white/40 shadow-lg shadow-primary/20 ring-2 ring-primary/30 ring-offset-2 ring-offset-background"
            src="/images/fake-gif.png"
            alt="dashboard"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};