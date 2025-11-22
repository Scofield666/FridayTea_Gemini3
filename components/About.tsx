import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';
import { PDF_IMAGES } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4">About Us</h2>
           <p className="text-xl md:text-2xl font-serif text-tea-dark italic mb-2">Tea from the World, Crafted by Friday Tea</p>
           <p className="text-stone-500 font-light tracking-wide text-sm uppercase">Reimagining tea with pure leaves and modern elegance</p>
        </div>

        {/* Content Block 1: Image of Cups + Text */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2">
             <div className="relative group">
                <div className="absolute inset-0 bg-tea transform rotate-2 rounded-lg opacity-10 group-hover:rotate-3 transition-transform duration-500"></div>
                <img 
                  src={PDF_IMAGES.teaCupsRow} 
                  alt="Friday Tea Cups" 
                  className="relative rounded-lg shadow-xl w-full h-auto object-cover transform group-hover:-translate-y-1 transition-transform duration-500"
                />
             </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed text-stone-600">
              <span className="text-3xl font-serif text-tea float-left mr-2 leading-none">F</span>
              ounded in 2025, Friday Tea is dedicated to bringing the world’s finest teas to our customers, crafting an exceptional tea experience with every cup. We focus on the pure essence and aroma of tea itself, creating freshly handcrafted beverages that honor nature’s original taste.
            </p>
          </div>
        </div>

        {/* Content Block 2: Farm Text + Image */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-24">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute inset-0 bg-stone-800 transform -rotate-2 rounded-lg opacity-10 group-hover:-rotate-3 transition-transform duration-500"></div>
              <img 
                src={PDF_IMAGES.teaFarm} 
                alt="Tea Farm" 
                className="relative rounded-lg shadow-xl w-full h-auto object-cover transform group-hover:-translate-y-1 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6 text-right md:text-left">
            <p className="text-xl font-serif italic text-stone-800">
              "At Friday Tea, we believe every visit should feel like a happy Friday—relaxed, joyful, and refreshing."
            </p>
            <p className="text-lg leading-relaxed text-stone-600">
              All our teas are sourced from world-class tea estates and made with <span className="font-bold text-tea-accent">zero additives</span>. Health and purity are our only standards.
            </p>
          </div>
        </div>

        {/* Content Block 3: Truck Image + Text */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             <div className="relative group">
                <div className="absolute inset-0 bg-tea-accent transform rotate-1 rounded-lg opacity-10 group-hover:rotate-2 transition-transform duration-500"></div>
                <img 
                  src={PDF_IMAGES.cateringTruck} 
                  alt="Friday Tea Catering" 
                  className="relative rounded-lg shadow-xl w-full h-auto object-cover transform group-hover:-translate-y-1 transition-transform duration-500"
                />
             </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <p className="text-lg leading-relaxed text-stone-600">
              Currently, Friday Tea focuses on weekend events and private catering, sharing our love for tea through moments of connection, celebration, and mindfulness.
            </p>
            <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm">
               <p className="font-medium text-stone-800 mb-4">
                 Our Tea Beverages Made from premium tea leaves, each cup of Friday tea is handcrafted to perfection.
               </p>
               <a href="#menu">
                 <Button variant="primary" className="w-full md:w-auto">View Our Menu</Button>
               </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};