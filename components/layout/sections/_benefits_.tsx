"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconFileAnalytics, IconPuzzle, IconRobot, IconMailForward, IconMessages, IconNetwork } from "@tabler/icons-react";

interface BenefitsProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: <IconFileAnalytics size={24} className="text-primary" />,
    title: "Smart Profile Management",
    description:
      "Our AI builds and updates your athlete's profile with athletic achievements and academic performance. The system automatically refreshes information when your athlete improves, ensuring college coaches always see their latest accomplishments.",
  },
  {
    icon: <IconPuzzle size={24} className="text-primary" />,
    title: "College Program Matching",
    description:
      "The AI analyzes your athlete's data against requirements from schools across all divisions. You receive clear reports showing which programs match your athlete's current stats and what specific improvements could open doors to different competition levels.",
  },
  {
    icon: <IconRobot size={24} className="text-primary" />,
    title: "AI Coach Support",
    description:
      "Coach Astro provides personalized guidance on workouts, nutrition, and sport-specific development. Your athlete gets custom training plans that target the exact improvements needed for their preferred college programs.",
  },
  {
    icon: <IconMailForward size={24} className="text-primary" />,
    title: "Auto-Generated Communication",
    description:
      "When your athlete's profile updates or matches with schools, our system creates custom messages to college coaches. You review each message before sending, keeping coaches updated without the hassle of drafting emails yourself.",
  },
  {
    icon: <IconMessages size={24} className="text-primary" />,
    title: "Coach Interaction Prep",
    description:
      "Our AI Coach helps your athlete practice for coach interactions through role-play sessions. Your student builds confidence by preparing answers to common recruiting questions before actual coach conversations.",
  },
  {
    icon: <IconNetwork size={24} className="text-primary" />,
    title: "Direct Connection Platform",
    description:
      "JetsonRecruit creates direct lines between athletes, parents, high school coaches, and college programs. Everyone stays on the same page through our messaging system, eliminating communication gaps.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Benefits
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        We Take Care of College Recruitment So You Don't Have To
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        JetsonRecruit AI removes the stress from college sports recruitment by actively managing the entire process for your student-athlete. Our AI-powered platform handles the complex work while you focus on supporting your child's growth.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {benefitList.map(({ icon, title, description }) => (
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