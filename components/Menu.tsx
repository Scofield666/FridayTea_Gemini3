import React from 'react';
import { MENU_ITEMS } from '../constants';
import { TeaCategory } from '../types';
import { SectionHeading } from './SectionHeading';

const MenuCard: React.FC<{ item: any }> = ({ item }) => (
  <div className="group bg-white rounded-none overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col md:flex-row border border-stone-100 h-full">
    <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
      <img 
        src={item.imageKey} 
        alt={item.name}
        loading="lazy"
        className="w-full h-full object-cover object-center
                  transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-white/90 backdrop-blur text-stone-900 text-xs px-3 py-1 uppercase tracking-widest font-bold shadow-sm">
          {item.category}
        </span>
      </div>
    </div>
    {/* <div className="md:w-2/5 h-48 md:h-56 relative overflow-hidden flex items-center justify-center bg-stone-50">
      <img 
        src={item.imageKey} 
        alt={item.name}
        loading="lazy"
        className="w-full h-full object-cover object-center"
        style={{ transform: 'scale(0.98)' }} // 微缩 2%，主体不过大
      />
      <div className="absolute top-4 left-4">
        <span className="bg-white/90 backdrop-blur text-stone-900 text-xs px-3 py-1 uppercase tracking-widest font-bold shadow-sm">
          {item.category}
        </span>
      </div>
    </div> */}
    <div className="p-8 md:w-3/5 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2 group-hover:text-tea transition-colors">{item.name}</h3>
        <div className="w-12 h-0.5 bg-tea-accent/30 mb-4"></div>
        <p className="text-stone-600 text-sm mb-6 leading-relaxed font-light">
          {item.description}
        </p>
      </div>
      <div className="flex items-center justify-between pt-6 border-t border-stone-100">
        <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Origin: Nature</span>
        <div className="flex gap-6 font-serif">
          <div className="flex flex-col items-center">
            <span className="text-xs text-stone-400 mb-1">Medium</span>
            <span className="text-lg font-bold text-stone-800">${item.priceMedium.toFixed(2)}</span>
          </div>
          <div className="w-px bg-stone-200"></div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-stone-400 mb-1">Large</span>
            <span className="text-lg font-bold text-stone-800">${item.priceLarge.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Menu: React.FC = () => {
  const pureTeas = MENU_ITEMS.filter(item => item.category === TeaCategory.PureTea);
  const teaLattes = MENU_ITEMS.filter(item => item.category === TeaCategory.TeaLatte);

  return (
    <section id="menu" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Our Menu" 
          subtitle="Handcrafted to Perfection"
        />

        <div className="mb-20">
          <div className="flex items-center mb-10">
            <h3 className="text-3xl font-serif text-stone-800 mr-6">Pure Tea</h3>
            <div className="flex-grow h-px bg-stone-300"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {pureTeas.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-10">
            <h3 className="text-3xl font-serif text-stone-800 mr-6">Tea Latte</h3>
            <div className="flex-grow h-px bg-stone-300"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {teaLattes.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};