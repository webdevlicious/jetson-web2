"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconFileAnalytics, IconPuzzle, IconRobot, IconMailForward, IconMessages, IconNetwork } from "@tabler/icons-react";

interface BenefitsProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: <IconRobot size={32} className="text-primary" />,
    title: "We Do The Work",
    description:
      "Our AI talks to colleges and finds the best matches for your athlete, handling all communications while you focus on training.",
  },
  {
    icon: <IconNetwork size={32} className="text-primary" />,
    title: "Track Your Progress",
    description:
      "We show your athlete's current level and exactly what they need to do to reach their college sports goals.",
  },
  {
    icon: <IconFileAnalytics size={32} className="text-primary" />,
    title: "Your Personal Coach",
    description:
      "Coach Astro gives workout plans that fit your athlete's needs and updates as they get better, tracking progress for success.",
  },
  {
    icon: <IconMailForward size={32} className="text-primary" />,
    title: "Get Notified",
    description:
      "We write messages to college coaches when your athlete fits what they're looking for in a player.",
  },
];

export const BenefitsSection = () => {
  const ref = React.useRef(null);

  return (
    <section id="benefits" className="container py-24 sm:py-32" ref={ref}>
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-2xl text-primary mb-8 tracking-wider">
            Benefits
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let Jetson Handle It
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
          College sports recruitment made simple: we do the work, you make the choices. Our AI does the work to connect athletes with college sports programs 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <div key={title}>
              <Card
                className="bg-muted/50 dark:bg-card hover:bg-background transition-all duration-300 hover:scale-105 hover:shadow-lg group/number cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between">
                    <div>
                      {icon}
                    </div>
                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground">
                  {description}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};