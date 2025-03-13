"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconFileAnalytics, IconPuzzle, IconRobot, IconMailForward, IconMessages, IconNetwork } from "@tabler/icons-react";

interface FeaturesProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: <IconFileAnalytics size={24} />,
    title: "Smart Profile Management",
    description:
      "AI updates profiles as your athlete improves. Coaches see current stats.",
  },
  {
    icon: <IconPuzzle size={24} />,
    title: "College Program Matching",
    description:
      "We find fitting colleges for your athlete. See what improvements open more doors.",
  },
  {
    icon: <IconRobot size={24} />,
    title: "AI Coach Support",
    description:
      "Coach Astro creates custom training plans. We target what colleges want.",
  },
  {
    icon: <IconMailForward size={24} />,
    title: "Auto-Generated Communication",
    description:
      "We write coach messages for new achievements. You approve before sending.",
  },
  {
    icon: <IconMessages size={24} />,
    title: "Coach Interaction Prep",
    description:
      "AI Coach practices college interviews. Build confidence for real meetings.",
  },
  {
    icon: <IconNetwork size={24} />,
    title: "Direct Connection Platform",
    description:
      "Connect everyone in one place. Simple messaging keeps communication clear.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-2xl text-primary text-center mb-8 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        College Coaches Will Find Your Athlete.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        JetsonRecruit AI handles all the complex parts of college recruiting while you get to be there for your athlete when it matters most.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  {icon}
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};