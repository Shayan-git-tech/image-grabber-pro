
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 hero-gradient relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Download Images <span className="text-gradient">Smarter</span>, Not Harder
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The ultimate Chrome extension for effortlessly downloading images from any webpage in JPG, PNG, or original format with smart filters and previews.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://chrome.google.com/webstore/detail/mbibhjoejfgphfilkcidhdecijbiblfo" className="btn-primary text-center">
                Add to Chrome
              </a>
              <a href="#features" className="btn-secondary text-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <div className="bg-white p-3 rounded-xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Smart Image Downloader Extension Preview" 
                  className="rounded-lg w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 flex items-center">
                  <div className="bg-green-500 rounded-full h-3 w-3 mr-2"></div>
                  <span className="text-sm font-medium">Downloaded Successfully</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-extension-blue rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-extension-teal rounded-full opacity-10 blur-xl"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 md:mt-24 bg-white py-10 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-extension-dark">100K+</div>
              <div className="text-gray-500">Downloads</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-extension-dark">4.8/5</div>
              <div className="text-gray-500">User Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-extension-dark">3+</div>
              <div className="text-gray-500">File Formats</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-extension-dark">Free</div>
              <div className="text-gray-500">Forever</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
