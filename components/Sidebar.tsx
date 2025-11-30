'use client';
import { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export default function Sidebar({ social }: SidebarProps) {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { label: 'ABOUT ME', href: '#about', id: 'about' },
    { label: 'RESUME', href: '#resume', id: 'resume' },
    { label: 'PORTFOLIO', href: '#portfolio', id: 'portfolio' },
    { label: 'BLOG', href: '#blog', id: 'blog' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-0 h-screen w-80 bg-gray-900 z-50">
        <nav className="flex flex-col h-full p-12 justify-center">
          <ul className="space-y-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className="group flex items-center justify-between text-gray-400 hover:text-white transition-colors text-lg font-light tracking-wider"
                >
                  <span>{item.label}</span>
                  <span 
                    className={`w-3 h-3 rounded-full border-2 transition-all ${
                      activeSection === item.id 
                        ? 'border-white bg-white' 
                        : 'border-gray-600 group-hover:border-white'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright at bottom */}
        <div className="absolute bottom-8 left-12 text-gray-600 text-sm">
          © {new Date().getFullYear()} @copyright
        </div>
      </aside>

      {/* Mobile Sidebar Toggle */}
      <button 
        className="lg:hidden fixed top-6 left-6 z-50 p-3 bg-gray-900 text-white rounded-lg"
        onClick={() => {/* Toggle mobile menu */}}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </>
  );
}

