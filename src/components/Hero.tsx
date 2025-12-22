import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Decor Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-400 rounded-full opacity-20 blur-xl animate-pulse delay-700"></div>
      
      {/* Skateboard Wheel Graphic */}
      <div className="absolute top-1/4 right-[10%] w-16 h-16 border-4 border-black rounded-full flex items-center justify-center opacity-10 rotate-12">
        <div className="w-4 h-4 bg-black rounded-full"></div>
      </div>
       <div className="absolute bottom-1/3 left-[5%] w-12 h-12 border-4 border-pink-500 rounded-full flex items-center justify-center opacity-20 -rotate-12">
        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
      </div>

      <section className="max-w-[1200px] mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full font-bold text-sm transform -rotate-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Сделано скейтерами для скейтеров</span>
            </div>
            
            <h1 className="m-0 text-6xl md:text-7xl">
              Собери свою <br/>
              <span className="gradient-text relative inline-block">
                скейт-деку
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-cyan-400 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="opacity-80 max-w-xl text-xl font-medium">
              Выбирай шейп, конкейв и графику. Мы печатаем, прессуем и отправляем деки, которые выдерживают любой спот.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-primary flex items-center gap-2 group">
                Начать кастомизацию
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Галерея работ
              </button>
            </div>

            <div className="flex items-center gap-4 pt-6 opacity-70">
              <div className="flex -space-x-3">
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="User" />
                 </div>
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="User" />
                 </div>
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="User" />
                 </div>
              </div>
              <p className="text-sm font-semibold">
                +1000 райдеров уже катают
              </p>
            </div>
          </div>

          {/* Right: Deck Preview Card */}
          <div className="relative perspective-1000">
             {/* Decorative Elements behind the card */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500 rounded-full opacity-10 blur-2xl"></div>
             
            <div className="sticker-card sticker-card-rotated p-8 bg-white relative z-10">
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-black font-black px-4 py-2 rotate-[-10deg] shadow-lg border-2 border-black z-20">
                NEW DROP
              </div>
              
              <div className="space-y-6">
                <div className="relative bg-gray-100 rounded-lg p-6 border-2 border-dashed border-gray-300">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1517553338287-1dde71d69461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Skateboard deck preview"
                    className="w-full h-80 object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 right-4 bg-white border-2 border-black px-2 py-1 text-xs font-bold shadow-sm rotate-3">
                    CANADIAN MAPLE
                  </div>
                   <div className="absolute bottom-4 left-4 bg-black text-white px-2 py-1 text-xs font-bold shadow-sm -rotate-2">
                    7-PLY
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {['Street', 'Park', 'Bowl', 'Vert'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white border-2 border-black font-bold text-sm shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-y-[1px] hover:shadow-none transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Background "Tape" */}
            <div className="absolute -bottom-6 -right-6 w-full h-12 bg-black opacity-10 rotate-3 z-0"></div>
          </div>
        </div>
      </section>
    </section>
  );
}