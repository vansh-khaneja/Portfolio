'use client';
import { useState, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
}

interface PortfolioNewProps {
  projects: Project[];
}

export default function PortfolioNew({ projects }: PortfolioNewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'right' && currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section id="portfolio" className="py-32 px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-gray-400 text-sm font-mono mb-8 tracking-widest">
          // PORTFOLIO
        </div>

        {/* Background Text */}
        <div 
          className="text-9xl font-bold mb-8 opacity-5 select-none"
          style={{
            WebkitTextStroke: '2px #e5e7eb',
            WebkitTextFillColor: 'transparent',
          }}
        >
          PORTFOLIO
        </div>

        <h2 className="text-5xl font-bold text-gray-900 mb-4 -mt-20">My Latest Works</h2>
        <p className="text-gray-600 mb-16 max-w-2xl">
          Explore a selection of projects that showcase my skills and creativity
        </p>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="min-w-full px-4">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                    <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative group">
                      <div className="text-9xl opacity-10">💻</div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
                        >
                          View Live
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-colors"
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={currentIndex === projects.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

