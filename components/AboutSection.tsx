"use client";

import { Award, Users, Coffee, Heart } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Coffee, value: '500+', label: 'Projects Completed' },
    { icon: Heart, value: '99%', label: 'Client Satisfaction' },
  ];

  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Graphic Design', level: 90 },
    { name: 'Brand Identity', level: 88 },
    { name: 'Web Design', level: 92 },
    { name: 'Illustration', level: 85 },
    { name: 'Typography', level: 90 },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0">
                <img
                  src="/images/about/about-image.jpg"
                  alt="Fernando working on design"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  onError={(e) => {
                    // Fallback to Pexels image if local image doesn't exist
                    e.currentTarget.src = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm Fernando, a passionate creative designer with over a decade of experience 
                  crafting beautiful, functional designs that tell stories and solve problems.
                </p>
                <p>
                  My journey began with a simple love for visual storytelling, and has evolved 
                  into a comprehensive approach to design that bridges the gap between aesthetics 
                  and user experience.
                </p>
                <p>
                  I believe great design isn't just about making things look pretty—it's about 
                  creating meaningful connections between brands and their audiences.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-3">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}