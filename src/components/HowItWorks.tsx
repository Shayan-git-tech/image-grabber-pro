
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Add to Chrome',
    description: 'Install the extension from the Chrome Web Store with a single click.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
  },
  {
    number: '02',
    title: 'Browse Any Website',
    description: 'Visit websites with images you want to download.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
  },
  {
    number: '03',
    title: 'Open & Select',
    description: 'Click the extension icon and select the images you want.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
  },
  {
    number: '04',
    title: 'Download & Enjoy',
    description: 'Choose your format and download instantly.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Smart Image Downloader is incredibly easy to use. Just follow these simple steps:
        </p>
        
        <div className="space-y-20 mt-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-extension-blue/20 to-extension-teal/20 rounded-xl blur-xl opacity-70"></div>
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="rounded-lg shadow-xl relative z-10 w-full"
                  />
                </div>
              </div>
              <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-extension-blue to-extension-teal flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-extension-blue to-extension-teal ml-4"></div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
