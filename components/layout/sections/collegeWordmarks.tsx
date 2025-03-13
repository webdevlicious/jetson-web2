"use client";

import Image from "next/image";
import React from "react";

interface CollegeProps {
  imagePath: string;
  name: string;
}

const collegeWordmarks: CollegeProps[] = [
  {
    imagePath: "/logos/wordmarks/Embry-RiddleAeronauticalUniversity.svg",
    name: "Embry-Riddle Aeronautical University",
  },
  {
    imagePath: "/logos/wordmarks/FloridaStateUniversity.svg",
    name: "Florida State University",
  },
  {
    imagePath: "/logos/wordmarks/GrandValleyStateUniversity.png",
    name: "Grand Valley State University",
  },
  {
    imagePath: "/logos/wordmarks/IthacaCollege.svg",
    name: "Ithaca College",
  },
  {
    imagePath: "/logos/wordmarks/JohnHopkinsUniversity.png",
    name: "John Hopkins University",
  },
  {
    imagePath: "/logos/wordmarks/MichiganStateUniversity.svg",
    name: "Michigan State University",
  },
  {
    imagePath: "/logos/wordmarks/MinnesotaStateUniversity.png",
    name: "Minnesota State University",
  },
  {
    imagePath: "/logos/wordmarks/NovaSoutheasternUniversity.png",
    name: "Nova Southeastern University",
  },
  {
    imagePath: "/logos/wordmarks/PittsburgStateUniversity.png",
    name: "Pittsburg State University",
  },
  {
    imagePath: "/logos/wordmarks/PomonaCollege.png",
    name: "Pomona College",
  },
  {
    imagePath: "/logos/wordmarks/RollinsCollege.png",
    name: "Rollins College",
  },
  {
    imagePath: "/logos/wordmarks/StJohnsUniversity.png",
    name: "St. Johns University",
  },
  {
    imagePath: "/logos/wordmarks/TheStateUniversityOfNewYork.png",
    name: "The State University of New York",
  },
  {
    imagePath: "/logos/wordmarks/TroyUniversity.svg",
    name: "Troy University",
  },
  {
    imagePath: "/logos/wordmarks/TulaneUniversity.png",
    name: "Tulane University",
  },
  {
    imagePath: "/logos/wordmarks/UniversityOfGeorgia.png",
    name: "University of Georgia",
  },
  {
    imagePath: "/logos/wordmarks/UniversityOfIndianapolis.png",
    name: "University of Indianapolis",
  },
  {
    imagePath: "/logos/wordmarks/UniversityOfMichigan.svg",
    name: "University of Michigan",
  },
  {
    imagePath: "/logos/wordmarks/UniversityOfSouthernCalifornia.png",
    name: "University of Southern California",
  },
  {
    imagePath: "/logos/wordmarks/UniversityOfTennessee.png",
    name: "University of Tennessee",
  },
  {
    imagePath: "/logos/wordmarks/UniversityOfVermont.svg",
    name: "University of Vermont",
  },
  {
    imagePath: "/logos/wordmarks/UniversityOfWestFlorida.svg",
    name: "University of West Florida",
  },
  {
    imagePath: "/logos/wordmarks/VillanovaUniversity.png",
    name: "Villanova University",
  },
  {
    imagePath: "/logos/wordmarks/Wabash.png",
    name: "Wabash College",
  },
  {
    imagePath: "/logos/wordmarks/WashUniversity.png",
    name: "Washington University",
  },
  {
    imagePath: "/logos/wordmarks/WestTexasA&MUniversity.png",
    name: "West Texas A&M University",
  },
  {
    imagePath: "/logos/wordmarks/WesternOregonUniversity.svg",
    name: "Western Oregon University",
  },
  {
    imagePath: "/logos/wordmarks/WilliamsCollege.png",
    name: "Williams College",
  },
];

// Custom Marquee component with speed control
const CustomMarquee = ({ 
  children, 
  direction = "left", 
  speed = 50, 
  pauseOnHover = false 
}: { 
  children: React.ReactNode, 
  direction?: "left" | "right", 
  speed?: number, 
  pauseOnHover?: boolean 
}) => {
  // Calculate animation duration - higher number = slower speed
  const duration = 150 - speed; // Invert so higher speed value = faster animation
  
  return (
    <div className="overflow-hidden relative w-full">
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .scroll-wrapper {
          display: flex;
          width: max-content;
          animation: ${direction === "left" ? "scroll-left" : "scroll-right"} ${duration}s linear infinite;
          animation-play-state: running;
        }
        
        ${pauseOnHover ? `
        .scroll-container:hover .scroll-wrapper {
          animation-play-state: paused;
        }
        ` : ""}
        
        .scroll-container {
          position: relative;
        }
        
        .scroll-container::before,
        .scroll-container::after {
          content: "";
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        
        .scroll-container::before {
          left: 0;
          background: linear-gradient(to right, rgba(12,13,18,1), rgba(12,13,18,0));
        }
        
        .scroll-container::after {
          right: 0;
          background: linear-gradient(to left, rgba(12,13,18,1), rgba(12,13,18,0));
        }
      `}</style>
      
      <div className="scroll-container">
        <div className="scroll-wrapper">
          {children}
          {children}
        </div>
      </div>
    </div>
  );
};

export const CollegeWordmarksSection = () => {
  // Split the array in half
  const halfIndex = Math.ceil(collegeWordmarks.length / 2);
  const firstHalf = collegeWordmarks.slice(0, halfIndex);
  const secondHalf = collegeWordmarks.slice(halfIndex);

  return (
    <section id="collegeWordmarks" className="container py-8 sm:py-8">
      <h2 className="text-2xl text-primary text-center mb-8 tracking-wider">
        Colleges We Connect With
      </h2>

      <h2 className="text-4xl md:text-3xl text-center font-bold mb-12">
        We match your athlete with programs that fit.<br />
        Giving your family peace of mind.
      </h2>

      <div className="flex flex-col gap-8">
        {/* First row of logos */}
        <CustomMarquee speed={30} pauseOnHover>
          {firstHalf.map(({ imagePath, name }) => (
            <div key={name} className="flex items-center mx-6">
              <Image
                src={imagePath}
                alt={name}
                width={150}
                height={80}
                className="h-16 w-40 object-contain"
                aria-label={name}
              />
            </div>
          ))}
        </CustomMarquee>

        {/* Second row of logos */}
        <CustomMarquee direction="right" speed={30} pauseOnHover>
          {secondHalf.map(({ imagePath, name }) => (
            <div key={name} className="flex items-center mx-6">
              <Image
                src={imagePath}
                alt={name}
                width={150}
                height={80}
                className="h-16 w-40 object-contain"
                aria-label={name}
              />
            </div>
          ))}
        </CustomMarquee>
      </div>
    </section>
  );
};