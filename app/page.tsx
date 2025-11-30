'use client';

import { useState, useEffect } from 'react';
import portfolioData from '@/data/portfolio.json';
import ChatBot from '@/components/ChatBot';

export default function Home() {
  const firstName = portfolioData.personal.name.split(' ')[0];
  const lastName = portfolioData.personal.name.split(' ').slice(1).join(' ');
  const [activeSection, setActiveSection] = useState('about');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sections = ['about', 'resume', 'portfolio', 'blog', 'contact'];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative" style={{
      backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
      backgroundSize: '24px 24px'
    }}>
      {/* Mobile Social Icons - Top Right */}
      <div className="md:hidden fixed top-6 right-6 flex items-center gap-4 z-40">
        <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a href={portfolioData.personal.resume} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
            <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z"/>
            <path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"/>
          </svg>
        </a>
      </div>

      {/* Mobile Name Header */}
      <div className="md:hidden text-left pt-16 pb-4 px-6">
        <h1 className="text-[40px] font-bold leading-none tracking-tight text-gray-900">
          {firstName} {lastName}
        </h1>
      </div>

      {/* Mobile Sticky Navigation */}
      <div className="md:hidden sticky top-4 z-50 mx-4 mb-6">
        <div className="bg-black rounded-2xl shadow-xl">
          <nav className="flex items-center justify-center gap-8 py-3">
            <a href="#about" className={`text-lg font-medium transition-colors ${activeSection === 'about' ? 'text-white border-2 border-dashed border-gray-500 rounded-full w-10 h-10 flex items-center justify-center' : 'text-gray-400'}`}>
              A
            </a>
            <a href="#resume" className={`text-lg font-medium transition-colors ${activeSection === 'resume' ? 'text-white border-2 border-dashed border-gray-500 rounded-full w-10 h-10 flex items-center justify-center' : 'text-gray-400'}`}>
              E
            </a>
            <a href="#portfolio" className={`text-lg font-medium transition-colors ${activeSection === 'portfolio' ? 'text-white border-2 border-dashed border-gray-500 rounded-full w-10 h-10 flex items-center justify-center' : 'text-gray-400'}`}>
              P
            </a>
            <a href="#blog" className={`text-lg font-medium transition-colors ${activeSection === 'blog' ? 'text-white border-2 border-dashed border-gray-500 rounded-full w-10 h-10 flex items-center justify-center' : 'text-gray-400'}`}>
              B
            </a>
            <a href="#contact" className={`text-lg font-medium transition-colors ${activeSection === 'contact' ? 'text-white border-2 border-dashed border-gray-500 rounded-full w-10 h-10 flex items-center justify-center' : 'text-gray-400'}`}>
              C
            </a>
          </nav>
        </div>
      </div>

      {/* Top Right Icons - Hidden on Mobile */}
      <div className="hidden md:flex fixed top-8 right-8 items-center gap-6 z-50">
        <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a href={portfolioData.personal.resume} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
            <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4zm-92 160H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32zm0-80H176a16 16 0 010-32h160a16 16 0 010 32z"/>
            <path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"/>
          </svg>
        </a>
      </div>

      {/* Desktop Floating Navigation Box - Hidden on Mobile */}
      <div className="hidden md:block fixed right-10 top-36 z-40 bg-black text-white p-7 rounded-xl w-72 shadow-2xl">
        <nav>
          <ul className="space-y-5">
            <li>
              <a href="#about" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors text-sm tracking-[0.2em]">
                <span>ABOUT ME</span>
                <span className="w-4 h-4 flex items-center justify-center">
                {activeSection === 'about' ? (
                    <span className="w-4 h-4 rounded-full border-2 border-dashed border-white animate-pulse"></span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                )}
                </span>
              </a>
            </li>
            <li>
              <a href="#resume" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors text-sm tracking-[0.2em]">
                <span>EXPERIENCE</span>
                <span className="w-4 h-4 flex items-center justify-center">
                {activeSection === 'resume' ? (
                    <span className="w-4 h-4 rounded-full border-2 border-dashed border-white animate-pulse"></span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                )}
                </span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors text-sm tracking-[0.2em]">
                <span>PROJECTS</span>
                <span className="w-4 h-4 flex items-center justify-center">
                {activeSection === 'portfolio' ? (
                    <span className="w-4 h-4 rounded-full border-2 border-dashed border-white animate-pulse"></span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                )}
                </span>
              </a>
            </li>
            <li>
              <a href="#blog" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors text-sm tracking-[0.2em]">
                <span>BLOG</span>
                <span className="w-4 h-4 flex items-center justify-center">
                {activeSection === 'blog' ? (
                    <span className="w-4 h-4 rounded-full border-2 border-dashed border-white animate-pulse"></span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                )}
                </span>
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center justify-between text-gray-300 hover:text-white transition-colors text-sm tracking-[0.2em]">
                <span>CONTACT</span>
                <span className="w-4 h-4 flex items-center justify-center">
                {activeSection === 'contact' ? (
                    <span className="w-4 h-4 rounded-full border-2 border-dashed border-white animate-pulse"></span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                )}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <main className="md:pr-[320px] md:pl-12 px-4 md:pt-0">
        {/* Large Name Header - Hidden on Mobile, Visible on Desktop */}
        <div className="hidden md:block pt-8 pb-3">
          <div className="w-full max-w-5xl mx-auto px-8 border-b border-gray-200 pb-3">
            <h1 className="text-[80px] font-bold leading-none tracking-tight">
              <span className="text-gray-900">{firstName}</span>{' '}
              <span 
                style={{
                  WebkitTextStroke: '2px #000',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {lastName}
              </span>
          </h1>
          </div>
        </div>
        {/* About Section */}
        <section id="about" className="flex items-center justify-center md:pt-8 pb-6 pt-0">
          <div className="w-full max-w-5xl mx-auto md:px-8">
            {/* About Card */}
            <div className="bg-white md:border-2 border-gray-100 md:rounded-2xl p-6 md:p-8 md:shadow-lg w-full">
              <div className="text-left md:text-left">
                <div className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 tracking-widest font-mono">// ABOUT ME</div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
                  {portfolioData.personal.title}
                </h2>

                <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                  {portfolioData.personal.description}
                </p>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                  {portfolioData.about.skills.map((skill) => (
                    <div key={skill.name} className="px-4 md:px-6 py-2 md:py-2.5 border border-dashed border-gray-900 rounded-full font-medium text-sm md:text-base">
                      {skill.name}<span className="text-gray-500 ml-1">({skill.level}%)</span>
                    </div>
                  ))}
                </div>

                {/* Stats Cards with Outline Numbers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {portfolioData.about.stats.map((stat, index) => (
                    <div key={index} className="text-left">
                      <div className="flex items-start mb-2">
                        {/* Mobile: Solid text */}
                        <span className="text-5xl font-bold mr-2 text-gray-900 md:hidden">
                          {stat.value}
                        </span>
                        {/* Desktop: Outlined text */}
                        <span 
                          className="hidden md:inline-block text-6xl font-bold mr-2"
                          style={{
                            WebkitTextStroke: '2px #000',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {stat.value}
                        </span>
                        <span className="text-2xl md:text-3xl font-bold mt-1 text-gray-900">+</span>
                      </div>
                      <div className="text-xs md:text-sm font-bold tracking-wider uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section - Education & Experience Card */}
        <section id="resume" className="flex items-center justify-center py-6">
          <div className="w-full max-w-5xl mx-auto md:px-8">
            <div className="bg-white md:border-2 border-gray-100 md:rounded-2xl p-6 md:p-8 md:shadow-lg w-full">
              <div className="text-left">
                <div className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 tracking-widest font-mono">// EXPERIENCE</div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Education & Experience
                </h2>

                {/* Mobile: Show Education first, then Experience */}
                <div className="md:hidden space-y-8">
                  {/* Education */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                    </div>
                    <div className="relative">
                      {portfolioData.education.map((edu, index) => (
                        <div key={edu.id} className="relative pl-6 pb-6 last:pb-0">
                          {index !== portfolioData.education.length - 1 && (
                            <div className="absolute left-0 top-[1.125rem] bottom-0 border-l-2 border-dashed border-gray-200"></div>
                          )}
                          {index === portfolioData.education.length - 1 && (
                            <div className="absolute left-0 top-[1.125rem] border-l-2 border-dashed border-gray-200 h-2"></div>
                          )}
                          <div className="absolute -left-[3px] top-[1.125rem] -translate-y-1/2 w-2 h-2 bg-gray-900 rounded-full"></div>
                          <div className="inline-block px-3 py-1 bg-white border border-dashed border-gray-300 rounded-full text-xs text-gray-500 mb-2">{edu.period}</div>
                          <h4 className="text-base font-bold text-gray-900 mb-1">{edu.degree}</h4>
                          <div className="text-gray-600 text-sm mb-1.5">@ {edu.school}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                      </svg>
                    </div>
                    <div className="relative">
                      {portfolioData.experience.map((exp, index) => (
                        <div key={exp.id} className="relative pl-6 pb-6 last:pb-0">
                          {index !== portfolioData.experience.length - 1 && (
                            <div className="absolute left-0 top-[1.125rem] bottom-0 border-l-2 border-dashed border-gray-200"></div>
                          )}
                          {index === portfolioData.experience.length - 1 && (
                            <div className="absolute left-0 top-[1.125rem] border-l-2 border-dashed border-gray-200 h-2"></div>
                          )}
                          <div className="absolute -left-[3px] top-[1.125rem] -translate-y-1/2 w-2 h-2 bg-gray-900 rounded-full"></div>
                          <div className="inline-block px-3 py-1 bg-white border border-dashed border-gray-300 rounded-full text-xs text-gray-500 mb-2">{exp.period}</div>
                          <h4 className="text-base font-bold text-gray-900 mb-1">{exp.title}</h4>
                          <div className="text-gray-600 text-sm mb-1.5">@ {exp.company}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop: Two columns side by side */}
                <div className="hidden md:grid md:grid-cols-2 gap-8">
                  {/* Experience */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Experience</h3>
                    <div className="relative">
                      {portfolioData.experience.map((exp, index) => (
                        <div key={exp.id} className="relative pl-6 pb-6 last:pb-0">
                          {index !== portfolioData.experience.length - 1 && (
                            <div className="absolute left-0 top-[0.75rem] bottom-0 border-l-2 border-dashed border-gray-200"></div>
                          )}
                          {index === portfolioData.experience.length - 1 && (
                            <div className="absolute left-0 top-[0.75rem] border-l-2 border-dashed border-gray-200 h-2"></div>
                          )}
                          <div className="absolute -left-[3px] top-[0.75rem] -translate-y-1/2 w-2 h-2 bg-gray-900 rounded-full"></div>
                          <div className="text-sm text-gray-500 mb-1">{exp.period}</div>
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h4>
                          <div className="text-gray-600 font-medium mb-1.5">@ {exp.company}</div>
                          <p className="text-gray-600 text-sm">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
                    <div className="relative">
                      {portfolioData.education.map((edu, index) => (
                        <div key={edu.id} className="relative pl-6 pb-6 last:pb-0">
                          {index !== portfolioData.education.length - 1 && (
                            <div className="absolute left-0 top-[0.75rem] bottom-0 border-l-2 border-dashed border-gray-200"></div>
                          )}
                          {index === portfolioData.education.length - 1 && (
                            <div className="absolute left-0 top-[0.75rem] border-l-2 border-dashed border-gray-200 h-2"></div>
                          )}
                          <div className="absolute -left-[3px] top-[0.75rem] -translate-y-1/2 w-2 h-2 bg-gray-900 rounded-full"></div>
                          <div className="text-sm text-gray-500 mb-1">{edu.period}</div>
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{edu.degree}</h4>
                          <div className="text-gray-600 font-medium mb-0.5">{edu.field}</div>
                          <div className="text-gray-600 font-medium mb-1.5">@ {edu.school}</div>
                          <p className="text-gray-600 text-sm">{edu.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="flex items-center justify-center py-6">
          <div className="w-full max-w-5xl mx-auto md:px-8">
            {/* Portfolio Card */}
            <div className="bg-white md:border-2 border-gray-100 md:rounded-2xl p-6 md:p-8 md:shadow-lg w-full">
              <div className="text-left">
                <div className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 tracking-widest font-mono">// PROJECTS</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">My Latest Works</h2>
                <p className="text-sm md:text-base text-gray-600 mb-6">Some of my recent projects</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {portfolioData.projects.map((project) => (
                    <div key={project.id} className="group relative overflow-hidden rounded-xl bg-gray-50 hover:shadow-lg transition-all">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Category badge - visible on both mobile and desktop */}
                        <div className="absolute top-2 left-2 bg-gray-900/40 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide shadow-lg">
                          {project.category}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white border border-gray-200 text-xs rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="flex items-center justify-center py-6">
          <div className="w-full max-w-5xl mx-auto md:px-8">
            {/* Blog Card */}
            <div className="bg-white md:border-2 border-gray-100 md:rounded-2xl p-6 md:p-8 md:shadow-lg w-full">
              <div className="text-left">
                <div className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 tracking-widest font-mono">// BLOGS</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">Blog Posts</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                  {portfolioData.blog.map((post) => (
                    <article key={post.id} className="group flex flex-col">
                      <div className="h-40 md:h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-3 relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-3 py-1.5 bg-gray-900/40 backdrop-blur-md border border-white/10 text-white text-xs font-medium uppercase tracking-wide rounded-full shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mb-1.5">
                        Posted on {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <h3 className="text-base md:text-lg font-bold mb-1.5 group-hover:text-gray-600 transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-3 flex-grow">{post.excerpt}</p>
                      <a href={post.link || `/blog/${post.slug}`} target={post.link ? "_blank" : "_self"} rel={post.link ? "noopener noreferrer" : undefined} className="text-sm font-medium hover:underline inline-flex items-center gap-1 mt-auto">
                        Read more →
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="flex items-center justify-center py-6 pb-20">
          <div className="w-full max-w-5xl mx-auto md:px-8">
            {/* Contact Card */}
            <div className="bg-white md:border-2 border-gray-100 md:rounded-2xl p-6 md:p-8 md:shadow-lg w-full">
              <div className="text-left">
                <div className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 tracking-widest font-mono">// CONTACT</div>
                <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">Reach Me</h2>
                <p className="text-gray-600 mb-5 text-sm">If you want to contact me, just call me or email.</p>

                {/* Email Display */}
                <div className="mb-6 inline-block px-4 py-2 rounded-full border-2 border-dashed border-gray-300 bg-white">
                  <p className="text-gray-900 text-xs md:text-sm font-medium">Email: {portfolioData.personal.email}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                      className="px-0 py-3 bg-transparent border-0 border-b-2 border-dashed border-gray-300 rounded-none focus:outline-none focus:border-gray-900 transition-colors text-sm"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="E-Mail"
                      required
                      className="px-0 py-3 bg-transparent border-0 border-b-2 border-dashed border-gray-300 rounded-none focus:outline-none focus:border-gray-900 transition-colors text-sm"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-dashed border-gray-300 rounded-none focus:outline-none focus:border-gray-900 transition-colors text-sm"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows={4}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-dashed border-gray-300 rounded-none focus:outline-none focus:border-gray-900 resize-none transition-colors text-sm"
                  />
                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-sm">Message sent successfully! I'll get back to you soon.</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-sm">Something went wrong. Please try again or email me directly.</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors text-sm w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
        </div>
        </section>
      </main>

      {/* Chatbot */}
      <ChatBot />
    </div>
  );
}
