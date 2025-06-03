import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Course } from './types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = (e: React.MouseEvent) => {
    // Prevent click from bubbling up to parent elements
    e.stopPropagation();
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <div 
      className="relative flex flex-col h-96 overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg"
      onClick={() => isOverlayOpen && setIsOverlayOpen(false)}
    >
      <div 
        className="h-full bg-gradient-to-b from-gray-600 to-black overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${course.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gray-900 p-4 flex flex-col justify-between">
        <div>
          <p className="text-gray-400 font-medium mb-1">WEEK {course.week}</p>
          <h3 className="text-white text-lg font-semibold">{course.title}</h3>
        </div>
        <button 
          onClick={toggleOverlay}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
          aria-label={`${isOverlayOpen ? 'Close' : 'Learn more about'} ${course.title}`}
        >
          {isOverlayOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </button>
      </div>

      {/* Course Details Overlay */}
      <div 
        className={`absolute inset-0 bg-gray-900 transition-transform duration-500 ease-in-out ${
          isOverlayOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={toggleOverlay}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black z-10"
          aria-label="Close overlay"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="h-full p-6 overflow-y-auto">
          <div className="mb-4">
            <p className="text-gray-400 text-sm font-medium mb-1">WEEK {course.week}</p>
            <h2 className="text-white text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-300 text-sm">{course.description}</p>
          </div>
          <div 
            className="text-gray-300 prose prose-sm prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: course.content }} 
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;