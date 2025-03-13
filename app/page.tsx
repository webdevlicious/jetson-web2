import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { CollegeWordmarksSection } from "@/components/layout/sections/collegeWordmarks";
import { TuitionCounter } from "@/components/layout/sections/tuitionCounter";


export const metadata = {
  title: "Jetson Recruit AI",
  description: "",
  openGraph: {
    type: "website",
    url: "https://jetsonrecruit.com/",
    title: "Jetson Recruit AI",
    description: "",
    images: [
      {
        url: "https://jetsonrecruit.com/",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Jetson Recruit AI",
    description: "",
    images: [
      "#",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <CollegeWordmarksSection />
      <TuitionCounter />
      {/* <TeamSection /> */}
      <CommunitySection />
      {/* <PricingSection />
      <ContactSection /> */}
      <FAQSection />
      <FooterSection />
    </>
  );
}
