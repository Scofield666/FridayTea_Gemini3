import React from 'react';
import { OUR_STORY } from '../constants';
import { SectionHeading } from './SectionHeading';
import { Leaf, Sun, Heart } from 'lucide-react';

const icons = [Leaf, Sun, Heart];

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Our Story" subtitle="The Essence of Friday Tea" />

        <div className="grid md:grid-cols-3 gap-10">
          {OUR_STORY.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-tea">
                <div className="mb-6 text-tea flex justify-center">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-center leading-relaxed">
                  {item.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};