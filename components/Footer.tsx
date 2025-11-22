import React from 'react';
import { Mail, Phone, Instagram, Facebook, MapPin, Smartphone } from 'lucide-react';
import { CONTACT_INFO, PDF_IMAGES } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-400 py-20 border-t border-stone-800">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Contact Row - Highlighting Phone */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-16 gap-8 md:gap-16 border-b border-stone-800 pb-16">
           <div className="text-center">
              <p className="uppercase tracking-widest text-xs font-bold text-tea mb-2">Call Us</p>
              <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`} className="text-3xl md:text-4xl font-serif text-white hover:text-tea-accent transition-colors">
                {CONTACT_INFO.phone}
              </a>
           </div>
           <div className="hidden md:block w-px h-16 bg-stone-800"></div>
           <div className="text-center">
              <p className="uppercase tracking-widest text-xs font-bold text-tea mb-2">Email Us</p>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl md:text-2xl font-serif text-white hover:text-tea-accent transition-colors">
                {CONTACT_INFO.email}
              </a>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Find Us Section (Page 4 specific) */}
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-serif font-bold text-white mb-8 flex items-center gap-3">
              Find Us <span className="w-12 h-1 bg-tea inline-block"></span>
            </h4>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
               {/* Image placeholder from PDF Page 4 "Picture with fruit" */}
               <div className="w-full md:w-1/2">
                 <div className="aspect-[4/3] rounded-lg overflow-hidden relative group">
                    <img 
                      src={PDF_IMAGES.fruitTea} 
                      alt="Weekend Pop-up" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                       <p className="text-white font-serif italic">Find our weekend pop-up locations.</p>
                    </div>
                 </div>
               </div>

               <div className="w-full md:w-1/2 space-y-6">
                 <p className="leading-relaxed text-lg">
                   Check our social media QR code to know exactly where we are this weekend! We love sharing our love for tea through moments of connection.
                 </p>
                 
                 {/* QR Code Placeholder */}
                 <div className="flex items-center gap-4 bg-stone-800/50 p-4 rounded-lg">
                    <div className="w-20 h-20 bg-white p-1 flex-shrink-0">
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Instagram" alt="QR Code" className="w-full h-full" />
                    </div>
                    <div>
                      <p className="text-white font-bold mb-1">Scan for Location</p>
                      <p className="text-sm text-stone-500">Follow our journey on Instagram for daily updates.</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-serif font-bold text-white mb-8">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-8">
               <a href="#" className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all duration-300 group">
                 <Instagram size={20} />
               </a>
               <a href="#" className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-all duration-300 group">
                 <Facebook size={20} />
               </a>
            </div>
            <p className="text-sm text-stone-500">
              &copy; {new Date().getFullYear()} Friday Tea.<br/>
              All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};