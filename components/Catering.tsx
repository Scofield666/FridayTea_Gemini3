import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Citrus, Users, Calendar } from 'lucide-react';
import { PDF_IMAGES } from '../constants';

export const Catering: React.FC = () => {
  return (
    <section id="catering" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
         <img src={PDF_IMAGES.cateringTruck} alt="Background" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/95 to-stone-900/80"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          title="Catering by Friday Tea" 
          subtitle="Bring the Friday feeling to your event"
          light={true}
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-10">
            <p className="text-xl font-light text-stone-300 leading-relaxed">
              We offer pure teas, milk teas, and our signature fruit tea experience, perfect for gatherings of any size. From casual parties to corporate events, Friday Tea brings freshness, creativity, and happiness—just like a perfect Friday.
            </p>

            <div className="space-y-8">
              {/* Service 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-tea rounded-full flex items-center justify-center shadow-lg shadow-tea/20">
                   <Users className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-bold mb-3 text-white">Group Dispensers</h4>
                  <p className="text-stone-400 leading-relaxed">
                    Our pure teas and milk teas are served in insulated dispensers, keeping every cup fresh. Each serving set accommodates <span className="text-tea-light font-bold">15–20 medium cups</span> for your guests to enjoy freely.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-tea-accent rounded-full flex items-center justify-center shadow-lg shadow-tea-accent/20">
                   <Citrus className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-bold mb-3 text-white">Custom Fruit Tea Bar</h4>
                  <p className="text-stone-400 leading-relaxed">
                    For a more interactive touch, our custom fruit tea bar lets guests DIY their own drinks with <span className="text-orange-200 font-bold">8–10 types of freshly cut fruits</span>, brewed green or black tea, and a selection of natural fruit juices.
                    <br/>
                    <span className="text-sm mt-2 block italic opacity-80">Choose 2–3 fruits, your tea base, and decide whether to add juice for a richer flavor.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-6 text-tea-light">
                <Calendar size={24} />
                <span className="text-sm uppercase tracking-widest font-bold">Book Us</span>
              </div>
              <h3 className="text-3xl font-serif mb-6">Planning an Event?</h3>
              <p className="text-stone-400 mb-8">
                Currently, Friday Tea focuses on weekend events and private catering. Let us share our love for tea at your next celebration.
              </p>
              <a href="#contact" className="block w-full bg-white text-stone-900 text-center py-4 rounded-lg font-bold hover:bg-tea hover:text-white transition-all duration-300">
                Contact Us to Order
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};