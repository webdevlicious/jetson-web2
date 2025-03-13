// components/layout/sections/tuitionData.ts
export interface TuitionCounterData {
    targetAmount: number;
    animationDuration: number;
    frameRate: number;
    year: number;
    headlineText: string;
    subheadingText: string;
    callToActionText: string;
  }
  
  export const tuitionData: TuitionCounterData = {
    targetAmount: 200000000000, // $200 billion
    animationDuration: 3000, // 3 seconds animation
    frameRate: 30, // frames per second
    year: 2024,
    headlineText: "Over $200 BILLION paid for college tuition last year.",
    subheadingText: "Our athletes earn scholarships.",
    callToActionText: "Stop writing checks. Start getting offers."
  };