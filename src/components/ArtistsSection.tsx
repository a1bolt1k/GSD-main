import React from 'react';
import { Upload, Palette, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ArtistsSection() {
  return (
    <section id="artists" className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="sticker-card p-8 lg:p-12 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full shadow-[4px_4px_0px_#ff006e]">
                 <Palette className="w-8 h-8" />
              </div>
              <h2 className="m-0 text-5xl font-black">
                Перенеси свой <span className="gradient-text">арт</span> на деку
              </h2>
            </div>
            
            <p className="opacity-80 text-xl font-medium">
              Ты художник, дизайнер или иллюстратор? Создавай уникальные дизайны для скейт-дек 
              и зарабатывай на каждой проданной деке с твоим артом.
            </p>

            <ul className="space-y-4 opacity-100 font-bold">
              <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs">1</span>
                Загружай свои работы в формате PNG или PSD
              </li>
              <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs">2</span>
                Получай процент с каждой продажи
              </li>
              <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs">3</span>
                Мы берём на себя производство и доставку
              </li>
              <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <span className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs">4</span>
                Твоё портфолио видят тысячи скейтеров
              </li>
            </ul>

            <button className="btn-primary flex items-center gap-2">
              Стать артистом GSD
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right: Upload Visual */}
          <div className="relative">
             <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 font-black transform rotate-6 border-2 border-black z-20 shadow-lg">
                EARN MONEY
             </div>
             
            <div className="bg-gray-100 rounded-xl p-8 border-4 border-black border-dashed flex flex-col items-center justify-center gap-6 group hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-full relative">
                 <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity rounded-lg"></div>
                 <ImageWithFallback
                    src="https://images.unsplash.com/photo-1517553338287-1dde71d69461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Deck template"
                    className="w-full h-64 object-contain drop-shadow-xl"
                  />
              </div>
              
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                   <Upload className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="m-0 text-xl font-black">DROP ARTWORK HERE</h4>
                  <p className="m-0 opacity-50 font-mono text-sm mt-1">
                    PNG, PSD, AI (max 50MB)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}