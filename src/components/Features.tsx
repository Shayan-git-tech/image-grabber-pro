
import React from 'react';
import { Download, Eye, Filter, Settings, Check } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ComponentType<any>, title: string, description: string }) => (
  <div className="feature-card">
    <div className="mb-6 flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-r from-extension-blue/10 to-extension-teal/10">
      <Icon className="h-6 w-6 text-extension-blue" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-extension-dark">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Download,
      title: "Multiple Format Downloads",
      description: "Download images in JPG, PNG, or original format with a single click, no converters needed."
    },
    {
      icon: Eye,
      title: "Preview Before Download",
      description: "View any image in a sleek preview modal before saving to ensure it's exactly what you need."
    },
    {
      icon: Filter,
      title: "Smart Filtering Options",
      description: "Filter images by resolution, format, or size to quickly find the images that matter to you."
    },
    {
      icon: Settings,
      title: "Customizable Settings",
      description: "Tailor the extension to your workflow with adjustable preferences and shortcuts."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">
          Smart Image Downloader combines powerful functionality with an intuitive interface.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-extension-blue/5 to-extension-teal/5 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-extension-dark">Clean & Minimal Interface</h3>
              <p className="text-gray-600 mb-6">
                We've designed Smart Image Downloader with simplicity in mind. No clutter, no distractions – just a clean, 
                intuitive interface that gets the job done without getting in your way.
              </p>
              <ul className="space-y-3">
                {['Distraction-free UI', 'Intuitive controls', 'Fast performance', 'Keyboard shortcuts'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Smart Image Downloader Interface" 
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
