"use client"
import React, { useEffect, useRef } from 'react';
import { Course } from './types';
import { X } from 'lucide-react';

interface CourseOverlayProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

const CourseOverlay: React.FC<CourseOverlayProps> = ({ course, isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300">
      <div 
        ref={overlayRef}
        className="relative w-full max-w-2xl max-h-[80vh] bg-gray-900 rounded-xl shadow-2xl overflow-hidden animate-scale-up"
      >
        <div 
          className="h-48 bg-gradient-to-b from-gray-700 to-gray-900"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${course.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black bg-opacity-50 border border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
            aria-label="Close overlay"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(80vh-12rem)]">
          <div className="mb-4">
            <p className="text-gray-400 text-sm font-medium mb-1">WEEK {course.week}</p>
            <h2 className="text-white text-2xl font-bold">{course.title}</h2>
            <p className="text-gray-300 mt-2">{course.description}</p>
          </div>
          <div 
            className="text-gray-300 prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: course.content }} 
          />
        </div>

        <div className="p-6 bg-gray-800 border-t border-gray-700 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-600 rounded-md transition-all duration-300 hover:bg-white hover:text-black"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseOverlay;