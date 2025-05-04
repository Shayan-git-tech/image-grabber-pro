
import React from 'react';
import { Download, Chrome } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-extension-blue to-extension-teal text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Download Images Smarter?
            </h2>
            <p className="text-xl opacity-90 mb-8 md:pr-12">
              Join thousands of users who are saving time and enjoying a better image downloading experience with Smart Image Downloader.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://chrome.google.com/webstore/category/extensions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-extension-blue px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <Chrome className="h-5 w-5 mr-2" />
                Add to Chrome
              </a>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white/30 border-2 border-white flex items-center justify-center text-sm">
                      {i}
                    </div>
                  ))}
                </div>
                <span className="ml-3 opacity-90">4.8 stars on Chrome Web Store</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-xl p-4 transform rotate-2 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Smart Image Downloader in action" 
                className="rounded-lg"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-extension-dark px-6 py-2 rounded-full shadow-lg font-medium">
                Download in one click!
              </div>
            </div>
            <div className="absolute -top-6 -right-6 h-20 w-20 bg-yellow-400 rounded-full opacity-70 blur-md"></div>
            <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
