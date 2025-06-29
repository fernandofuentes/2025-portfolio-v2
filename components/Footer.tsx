"use client";

import { Mail, Phone, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Centered Content */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-blue-400">Fernando Fuentes</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Sr. Creative Marketing Specialist
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <a 
                href="tel:+12819606520" 
                className="text-lg text-gray-300 hover:text-white transition-colors"
              >
                281.960.6520
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <a 
                href="mailto:fernando.fuentes1113@gmail.com" 
                className="text-lg text-gray-300 hover:text-white transition-colors"
              >
                fernando.fuentes1113@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Linkedin className="w-5 h-5 text-blue-400" />
              <a 
                href="https://www.linkedin.com/in/fernandoalexisfuentes/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-white transition-colors"
              >
                linkedin.com/in/fernandoalexisfuentes
              </a>
            </div>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Transforming brands through strategic design and innovative digital experiences. 
            Ready to elevate your brand to the next level?
          </p>
          
          <div className="mb-12">
            <a
              href="mailto:fernando.fuentes1113@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              Start a Project
              <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Fernando Fuentes. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and lots of coffee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}