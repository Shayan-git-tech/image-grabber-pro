
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <a 
            href="https://chrome.google.com/webstore/category/extensions" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Add to Chrome
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-extension-dark p-2">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#features" onClick={toggleMenu} className="font-medium text-gray-600 hover:text-extension-blue transition-colors">Features</a>
            <a href="#how-it-works" onClick={toggleMenu} className="font-medium text-gray-600 hover:text-extension-blue transition-colors">How it Works</a>
            <a href="#faq" onClick={toggleMenu} className="font-medium text-gray-600 hover:text-extension-blue transition-colors">FAQ</a>
            <a 
              href="https://chrome.google.com/webstore/category/extensions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block text-center"
            >
              Add to Chrome
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
