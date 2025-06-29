"use client";

import { ArrowRight } from 'lucide-react';
import { memo } from 'react';

// Memoize tech stack icons to prevent re-renders
const TechStackIcons = memo(() => (
  <div className="pt-8">
    <p className="text-sm font-medium text-gray-500 mb-4">Built my portfolio with:</p>
    <div className="flex items-center justify-center lg:justify-start space-x-6">
      {/* React Logo - From provided SVG with rotation animation */}
      <div className="flex items-center space-x-2 group">
        <svg 
          className="w-8 h-8 text-[#61DAFB] group-hover:scale-110 transition-transform duration-300 animate-spin-slow" 
          viewBox="-10.5 -9.45 21 18.9" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ animationDuration: '10s' }}
        >
          <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
          </g>
        </svg>
        <span className="text-sm font-medium text-gray-700">React</span>
      </div>

      {/* Next.js Logo - From provided SVG */}
      <div className="flex items-center space-x-2 group">
        <svg 
          className="w-8 h-8 text-black group-hover:scale-110 transition-transform duration-300" 
          viewBox="0 0 256 256" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="xMidYMid"
        >
          <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="currentColor"/>
        </svg>
        <span className="text-sm font-medium text-gray-700">Next.js</span>
      </div>

      {/* Tailwind CSS Logo */}
      <div className="flex items-center space-x-2 group">
        <svg className="w-8 h-8 text-[#06B6D4] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
        <span className="text-sm font-medium text-gray-700">Tailwind</span>
      </div>
    </div>
  </div>
));

TechStackIcons.displayName = 'TechStackIcons';

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-white min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 tracking-tight">
                Hello, I'm{' '}
                <span className="text-blue-600">Fernando</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-600">
                Sr. Creative Marketing Specialist, Full-Stack Web Developer, and UI/UX Designer — a rare blend of strategy, design, and code.
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                For over 15 years, I've helped brands break through the noise with bold, high-performing designs.
              </p>
              
              <p className="text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Fluent in English, Spanish and Pickleball.
              </p>
              
              <div className="pt-6">
                <button
                  onClick={scrollToProjects}
                  className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group text-lg"
                >
                  Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Tech Stack Section */}
              <TechStackIcons />
            </div>
          </div>

          {/* Right Column - Larger Square Image with optimized loading */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <div className="aspect-square w-full">
                <img
                  src="/images/hero/fernando-fuentes-3.png"
                  alt="Fernando - Creative Designer"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  onError={(e) => {
                    // Fallback to Pexels image if local image doesn't exist
                    e.currentTarget.src = "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom section separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}