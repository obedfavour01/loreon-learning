import React from 'react';
import { courses } from './data/courseData';
import RoadmapCarousel from "./RoadmapCarousel";

function Roadmap() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12">
        <div className="flex justify-center mb-6">
          <button className="px-6 py-2 border border-gray-700 rounded-full text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-colors duration-300">
            WEEKLY WORKFLOW
          </button>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Your Learning Journey
        </h1>
        
        <RoadmapCarousel courses={courses} />
      </main>
    </div>
  );
}


export default Roadmap
