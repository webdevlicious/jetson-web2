// tuitionCounter.tsx
import React, { useState, useEffect, useRef } from 'react';
import { tuitionData, TuitionCounterData } from './data/tuitionData';

export const TuitionCounter = ({ 
  data = tuitionData 
}: { data?: TuitionCounterData }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  
  // Format number as currency
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Calculate if element is in viewport
  const useIsInViewport = (ref: React.RefObject<HTMLElement>): boolean => {
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting)
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref]);
  
    return isIntersecting;
  };

  const isInViewport = useIsInViewport(countRef);
  
  useEffect(() => {
    if (!isInViewport) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / data.animationDuration, 1);
      const currentCount = Math.floor(progress * data.targetAmount);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInViewport, data.targetAmount, data.animationDuration]);

  return (
    <div className="w-full bg-gray-900 text-white px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Text section */}
          <div className="md:w-3/5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Over <span className="text-yellow-400">$200 BILLION</span> paid for college tuition last year.
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
              {data.subheadingText}
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
              {data.callToActionText}
            </p>
          </div>
          
          {/* Counter section */}
          <div 
            ref={countRef}
            className="md:w-2/5 bg-gray-800 p-6 rounded-lg shadow-xl text-center"
          >
            <p className="text-lg uppercase tracking-wider mb-2">Total Tuition Paid</p>
            <div className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-bold">
              {formatCurrency(count)}
            </div>
            <p className="text-sm mt-2 text-gray-400">in the USA ({data.year})</p>
          </div>
        </div>
      </div>
    </div>
  );
};