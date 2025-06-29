"use client";

import { ExternalLink, Eye } from 'lucide-react';
import { useState } from 'react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'branding', name: 'Branding' },
    { id: 'web', name: 'Web Design' },
    { id: 'ui-ux', name: 'UI/UX' },
    { id: 'print', name: 'Print Design' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      category: 'web',
      tags: ['UI/UX', 'Web Design', 'E-commerce'],
      image: '/images/portfolio/project-1.jpg',
      fallbackImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
    },
    {
      id: 2,
      title: 'Tech Startup Brand Identity',
      category: 'branding',
      tags: ['Branding', 'Logo Design', 'Identity'],
      image: '/images/portfolio/project-2.jpg',
      fallbackImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity system for a innovative tech startup, including logo, colors, and guidelines.',
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'ui-ux',
      tags: ['Mobile App', 'UI/UX', 'Fintech'],
      image: '/images/portfolio/project-3.jpg',
      fallbackImage: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'User-centered design for a mobile banking application with focus on security and ease of use.',
    },
    {
      id: 4,
      title: 'Restaurant Menu Design',
      category: 'print',
      tags: ['Print Design', 'Menu', 'Restaurant'],
      image: '/images/portfolio/project-4.jpg',
      fallbackImage: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant menu design for a high-end restaurant, balancing readability with sophisticated aesthetics.',
    },
    {
      id: 5,
      title: 'SaaS Dashboard Interface',
      category: 'ui-ux',
      tags: ['Dashboard', 'SaaS', 'Data Visualization'],
      image: '/images/portfolio/project-5.jpg',
      fallbackImage: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complex data dashboard design with intuitive navigation and clear information hierarchy.',
    },
    {
      id: 6,
      title: 'Fashion Brand Campaign',
      category: 'branding',
      tags: ['Campaign', 'Fashion', 'Visual Identity'],
      image: '/images/portfolio/project-6.jpg',
      fallbackImage: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Creative campaign design for a luxury fashion brand, including digital and print materials.',
    },
    {
      id: 7,
      title: 'Healthcare App Design',
      category: 'ui-ux',
      tags: ['Mobile App', 'Healthcare', 'UX Research'],
      image: '/images/portfolio/project-7.jpg',
      fallbackImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intuitive healthcare application design focused on accessibility and patient experience.',
    },
    {
      id: 8,
      title: 'Corporate Annual Report',
      category: 'print',
      tags: ['Print Design', 'Corporate', 'Layout'],
      image: '/images/portfolio/project-8.jpg',
      fallbackImage: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional annual report design with clear data visualization and corporate branding.',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="works" className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my recent work spanning branding, web design, UI/UX, and print design. 
            Each project represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image - 1:1 Aspect Ratio */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to Pexels image if local image doesn't exist
                    e.currentTarget.src = project.fallbackImage;
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info - Centered */}
              <div className="p-6 text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}