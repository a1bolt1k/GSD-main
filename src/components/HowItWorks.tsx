import React from 'react';
import { Shapes, Music, Eye, Truck, ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: <Shapes className="w-10 h-10" />,
      title: 'Выбери форму и размер',
      description: 'Street, Old School, Cruiser или Wide — на любой стиль катания'
    },
    {
      number: 2,
      icon: <Music className="w-10 h-10" />,
      title: 'Выбери стиль через музыку',
      description: 'Punk, Hip-hop, Jazz, Techno — фильтруй визуалы через звук'
    },
    {
      number: 3,
      icon: <Eye className="w-10 h-10" />,
      title: 'Получи превью и подтверди',
      description: 'Посмотри на финальный результат перед производством'
    },
    {
      number: 4,
      icon: <Truck className="w-10 h-10" />,
      title: 'Производство и доставка',
      description: 'Создаём твою деку и отправляем прямо к тебе'
    }
  ];

  return (
    <section id="how-it-works" className="max-w-[1200px] mx-auto px-6 py-20 relative">
      <h2 className="text-center mb-16 text-5xl font-black uppercase">
        Как это <span className="gradient-text">работает</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10">
        {steps.map((step, index) => (
          <div key={step.number} className="relative group">
             {/* Connecting arrow (not on last item) */}
            {index < steps.length - 1 && (
               <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-black z-20 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 opacity-20" />
               </div>
            )}
            
            <div className="sticker-card p-6 text-center space-y-6 bg-white h-full flex flex-col items-center hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 mx-auto bg-black text-white rounded-full flex items-center justify-center relative border-4 border-cyan-400 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <span className="font-black text-3xl italic">{step.number}</span>
                <div className="absolute -top-2 -right-2 bg-pink-500 rounded-full p-2 border-2 border-white">
                   {step.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <h4 className="m-0 text-xl font-bold uppercase mb-2 leading-tight">{step.title}</h4>
                <p className="opacity-70 font-medium">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar visual */}
      <div className="relative max-w-4xl mx-auto hidden lg:block">
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden border-2 border-black">
          <div className="h-full bg-cyan-400 w-full animate-pulse"></div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-6 h-6 bg-pink-500 rounded-full border-2 border-black"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-6 h-6 bg-yellow-400 rounded-full border-2 border-black"></div>
        <div className="absolute top-1/2 -translate-y-1/2 left-2/3 w-6 h-6 bg-cyan-400 rounded-full border-2 border-black"></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-6 h-6 bg-black rounded-full border-2 border-white"></div>
      </div>
    </section>
  );
}