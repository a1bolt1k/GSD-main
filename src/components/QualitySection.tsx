import React from 'react';
import { Award, Paintbrush, Ruler, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function QualitySection() {
  const benefits = [
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: 'Премиальные материалы',
      description: '7-слойный канадский клён — стандарт профессиональных дек'
    },
    {
      icon: <Paintbrush className="w-6 h-6 text-white" />,
      title: 'Стойкая печать',
      description: 'Термотрансферная печать, которая не стирается и не выцветает'
    },
    {
      icon: <Ruler className="w-6 h-6 text-white" />,
      title: 'Точная геометрия',
      description: 'Профессиональные пресс-формы для идеальной формы и конкейва'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: 'Контроль качества',
      description: 'Каждая дека проходит проверку перед отправкой'
    }
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Title */}
        <div className="order-2 lg:order-1">
          <h2 className="mb-8 text-5xl font-black leading-tight">
            Кастом без <span className="gradient-text">компромиссов</span> по качеству
          </h2>
          <p className="opacity-80 mb-8 text-xl font-medium">
            Мы не просто печатаем картинки на дешевых заготовках. 
            Каждая дека GSD — это настоящий профессиональный продукт, 
            созданный с учётом всех стандартов индустрии.
          </p>
          
          <div className="inline-block p-4 bg-yellow-400 border-4 border-black font-black transform -rotate-2 text-xl">
             100% CANADIAN MAPLE
          </div>
        </div>

        {/* Right: Benefits */}
        <div className="space-y-6 order-1 lg:order-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 items-start group">
              <div className="flex-shrink-0 w-12 h-12 bg-black rounded-none flex items-center justify-center border-2 border-transparent group-hover:bg-pink-500 group-hover:scale-110 transition-all shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                {benefit.icon}
              </div>
              <div>
                <h4 className="m-0 mb-2 text-xl font-bold uppercase">{benefit.title}</h4>
                <p className="opacity-70 m-0 font-medium">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workshop Image */}
      <div className="mt-12 sticker-card overflow-hidden bg-white p-2">
        <div className="relative border-2 border-black">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1608371006997-19a3c3ece8dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Workshop"
            className="w-full h-96 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="border-4 border-white px-8 py-4 text-4xl font-black text-white uppercase tracking-widest mix-blend-overlay">
                Manufacture
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}