import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080" /*随机图片服务*/
          // src="images/Main Pic.jpg" /*随机图片服务*/
          // alt="Tea Background" 
          // className="w-full h-full object-cover"
          // style={{ transform: 'scale(0.6)' }} // 👈 关键：轻微缩小图像
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <p className="text-lg md:text-xl font-light tracking-[0.2em] mb-4 uppercase animate-fade-in-up">
          Tea from the World
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight shadow-black drop-shadow-lg">
          Crafted by <br/> <span className="italic text-tea-light">Friday Tea</span>
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-10 opacity-90">
          Reimagining tea with pure leaves and modern elegance.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
           <a href="#menu">
             <Button variant="white">View Menu</Button>
           </a>
           <a href="#contact">
             <Button variant="primary" className="bg-tea-accent hover:bg-orange-800 text-white border-none">Find Us</Button>
           </a>
        </div>
      </div>
    </section>
  );
};