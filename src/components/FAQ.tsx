
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is Smart Image Downloader free to use?",
      answer: "Yes, Smart Image Downloader is completely free to use with all features included. No hidden costs or premium plans required."
    },
    {
      question: "How do I change the default download format?",
      answer: "You can change the default download format in the extension settings. Click on the extension icon, select the settings gear, and choose your preferred default format from the dropdown menu."
    },
    {
      question: "Does it work on all websites?",
      answer: "Smart Image Downloader works on most websites, including social media platforms, blogs, news sites, and image galleries. Some websites with strict content protection may limit functionality."
    },
    {
      question: "Can I download multiple images at once?",
      answer: "Yes, you can select multiple images and download them all at once. The extension will process them in batch while maintaining your format preferences for each."
    },
    {
      question: "Is this extension safe to use?",
      answer: "Absolutely. We don't collect any personal data, and the extension only requests permissions necessary for its core functionality. Your privacy and security are our top priorities."
    },
    {
      question: "How do I report bugs or request features?",
      answer: "You can report bugs or request features through our support page in the Chrome Web Store or by emailing our support team. We're constantly improving based on user feedback."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about Smart Image Downloader.
        </p>
        
        <div className="max-w-3xl mx-auto mt-10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Still have questions? We're here to help!
          </p>
          <a 
            href="mailto:shayankhan12340@gmail.com" 
            className="text-extension-blue font-medium hover:underline mt-2 inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
