import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Settings2, Zap } from 'lucide-react';

export function MiniCustomizer() {
  const [selectedShape, setSelectedShape] = useState('Street');
  const [selectedSize, setSelectedSize] = useState('8"');
  const [selectedInspiration, setSelectedInspiration] = useState('Punk');

  const shapes = ['Street', 'Old School', 'Cruiser', 'Wide'];
  const sizes = ['7.5"', '8"', '8.25"', '8.5"'];
  const inspirations = ['Punk', 'Hip-hop', 'Jazz', 'Techno', 'Indie'];

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 relative">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-64 h-64 bg-cyan-400 opacity-10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="sticker-card bg-white p-8 lg:p-12 relative z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full font-black text-lg border-4 border-white shadow-lg flex items-center gap-2">
          <Settings2 className="w-5 h-5" />
          QUICK SETUP
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
          {/* Left Column: Controls */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Форма деки
              </h3>
              <div className="flex flex-wrap gap-3">
                {shapes.map((shape) => (
                  <button
                    key={shape}
                    onClick={() => setSelectedShape(shape)}
                    className={`px-4 py-2 font-bold border-2 transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:shadow-none ${
                      selectedShape === shape
                        ? 'bg-cyan-400 border-black text-black'
                        : 'bg-white border-black text-black hover:bg-gray-50'
                    }`}
                  >
                    {shape}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Размер
              </h3>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 font-bold border-2 transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-y-[4px] active:shadow-none ${
                      selectedSize === size
                        ? 'bg-black border-black text-white'
                        : 'bg-white border-black text-black hover:bg-gray-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Вдохновение
              </h3>
              <div className="flex flex-wrap gap-3">
                {inspirations.map((inspiration) => (
                  <button
                    key={inspiration}
                    onClick={() => setSelectedInspiration(inspiration)}
                    className={`px-4 py-2 font-bold border-2 rounded-full transition-all ${
                      selectedInspiration === inspiration
                        ? 'bg-pink-500 border-pink-500 text-white shadow-lg'
                        : 'bg-transparent border-gray-300 text-gray-500 hover:border-pink-500 hover:text-pink-500'
                    }`}
                  >
                    {inspiration}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t-2 border-dashed border-gray-200">
              <p className="opacity-70 mb-6 text-sm">
                * Это только начало. В полном редакторе доступно более 500+ элементов и загрузка своих изображений.
              </p>
              <button className="btn-primary w-full lg:w-auto flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 fill-current" />
                Создать свою деку
              </button>
            </div>
          </div>

          {/* Right Column: Preview */}
          <div className="bg-gray-100 rounded-xl p-8 flex flex-col items-center justify-center border-4 border-black relative overflow-hidden group">
            
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm4 4h2v2H5V5z' fill='%23000000' fill-opacity='0.2'/%3E%3C/svg%3E")` }}></div>

            <div className="text-center space-y-6 relative z-10 w-full">
              <div className="relative group-hover:scale-105 transition-transform duration-500 ease-out">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1620934497739-d44fe111656a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Deck preview"
                  className="w-full max-w-xs h-96 object-contain mx-auto drop-shadow-2xl"
                />
                 {/* Floating Labels */}
                <div className="absolute top-10 right-0 bg-white border border-black px-2 py-1 text-xs font-bold rotate-12 shadow-sm">
                    {selectedShape}
                </div>
              </div>

              <div className="bg-white border-2 border-black p-4 rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.1)] inline-block w-full max-w-sm">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
                  <span className="text-gray-500 text-sm font-bold">SPECS</span>
                  <span className="text-pink-500 font-black">READY TO SKATE</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                   <div>
                      <div className="text-xs text-gray-400 uppercase font-bold">Shape</div>
                      <div className="font-black text-sm">{selectedShape}</div>
                   </div>
                   <div className="border-l border-gray-100">
                      <div className="text-xs text-gray-400 uppercase font-bold">Size</div>
                      <div className="font-black text-sm">{selectedSize}</div>
                   </div>
                   <div className="border-l border-gray-100">
                      <div className="text-xs text-gray-400 uppercase font-bold">Style</div>
                      <div className="font-black text-sm">{selectedInspiration}</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}