"use client";

import { Mail, Linkedin, Instagram, Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/fernandoalexisfuentes/', 
      label: 'LinkedIn' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/fernandofuentes/', 
      label: 'Instagram' 
    },
    { 
      icon: Mail, 
      href: 'mailto:fernando.fuentes1113@gmail.com', 
      label: 'Email' 
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (href: string) => {
    if (href === '#contact') {
      scrollToContact();
    } else if (href === '#projects') {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Simple Black Text */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-2xl font-bold text-black hover:text-gray-700 transition-colors duration-300"
            >
              Fernando Fuentes
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={social.label}
                className="text-gray-500 hover:text-gray-900 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors w-full text-left"
                >
                  {link.name}
                </button>
              ))}
              
              {/* Phone Number in Mobile Menu */}
              <div className="px-3 py-2 border-t border-gray-100 mt-2">
                <a
                  href="tel:+12819606520"
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-base font-medium">281-960-6520</span>
                </a>
              </div>
              
              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 px-3 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}