
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 py-4",
      scrolled ? "bg-white shadow-md py-3" : "bg-transparent"
    )}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-extension-blue to-extension-teal flex items-center justify-center text-white font-bold text-xl mr-2">S</div>
          <span className="font-bold text-xl text-extension-dark">Smart Image Downloader</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-medium text-gray-600 hover:text-extension-blue transition-colors">Features</a>
          <a href="#how-it-works" className="font-medium text-gray-600 hover:text-extension-blue transition-colors">How it Works</a>
          <a href="#faq" className="font-medium text-gray-600 hover:text-extension-blue transition-colors">FAQ</a>
          <a href="#download" className="btn-primary">Add to Chrome</a>
        </div>
        <div className="md:hidden">
          <button className="text-extension-dark p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
