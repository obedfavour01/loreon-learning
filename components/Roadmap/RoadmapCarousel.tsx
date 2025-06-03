"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Course } from './types';
import CourseCard from './CourseCard';

interface CarouselProps {
  courses: Course[];
}

const RoadmapCarousel: React.FC<CarouselProps> = ({ courses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const newCardWidth = containerWidth / visibleCards;
      setCardWidth(newCardWidth);
    }
  }, [visibleCards, containerRef]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? courses.length - visibleCards : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === courses.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    const maxStartIndex = courses.length - visibleCards;
    const adjustedIndex = Math.min(index, maxStartIndex);
    setCurrentIndex(adjustedIndex);
  };

  return (
    <div className="w-full">
      <div 
        ref={containerRef}
        className="relative overflow-hidden"
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(-${currentIndex * cardWidth}px)`,
          }}
        >
          {courses.map((course) => (
            <div 
              key={course.id} 
              style={{ width: `${cardWidth}px`, flexShrink: 0, padding: '0 8px' }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mt-8 space-x-4">
        <button 
          onClick={goToPrevious}
          className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex-1 max-w-md h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gray-400 transition-all duration-300 rounded-full"
            style={{ width: `${(currentIndex / (courses.length - visibleCards)) * 100}%` }}
          />
        </div>
        
        <button 
          onClick={goToNext}
          className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: courses.length - visibleCards + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-gray-700'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadmapCarousel;