import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const designs = [
    {
      name: 'Chill Vibes',
      tag: 'lo-fi hip-hop',
      image: 'https://images.unsplash.com/photo-1542373021-60958a4d3168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwZGVjayUyMGN1c3RvbXxlbnwxfHx8fDE3NjU4MTc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Rebel Soul',
      tag: '90s punk',
      image: 'https://images.unsplash.com/photo-1620934497739-d44fe111656a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwYXJ0JTIwZGVzaWdufGVufDF8fHx8MTc2NTgxNzU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Digital Dreams',
      tag: 'glitch techno',
      image: 'https://images.unsplash.com/photo-1740344463067-394f2edbfebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNrYXRlYm9hcmQlMjBkZWNrfGVufDF8fHx8MTc2NTgxNzU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Urban Flow',
      tag: 'hip-hop',
      image: 'https://images.unsplash.com/photo-1628522994788-53bc1b1502c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBhcnQlMjBncmFmZml0aXxlbnwxfHx8fDE3NjU3OTM4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Smooth Jazz',
      tag: 'jazz fusion',
      image: 'https://images.unsplash.com/photo-1517553338287-1dde71d69461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwZGVjayUyMHZlcnRpY2FsfGVufDF8fHx8MTc2NTgxNzU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Indie Spirit',
      tag: 'indie rock',
      image: 'https://images.unsplash.com/photo-1542373021-60958a4d3168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2F0ZWJvYXJkJTIwZGVjayUyMGN1c3RvbXxlbnwxfHx8fDE3NjU4MTc1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="gallery" className="max-w-[1200px] mx-auto px-6 py-20 relative">
      {/* Background Decor */}
      <div className="absolute right-0 top-20 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute left-0 bottom-20 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <h2 className="text-center mb-4 text-5xl font-black">
        Что можно <span className="gradient-text">собрать</span>
      </h2>
      <p className="text-center opacity-70 mb-12 max-w-2xl mx-auto font-medium">
        Вдохновись готовыми примерами или создай что-то совершенно своё
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {designs.map((design, index) => (
          <div
            key={index}
            className="sticker-card overflow-hidden group cursor-pointer bg-white relative hover:-translate-y-2 transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-100 p-8 flex items-center justify-center border-b-2 border-black">
              <ImageWithFallback
                src={design.image}
                alt={design.name}
                className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
              />
            </div>
            <div className="p-4 bg-white">
              <div className="flex items-center justify-between">
                <h4 className="m-0 text-xl font-bold uppercase italic">{design.name}</h4>
                <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase rounded-sm transform rotate-2">
                  {design.tag}
                </span>
              </div>
            </div>
            
            {/* Hover overlay sticker effect */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity transform rotate-12">
               <div className="bg-yellow-400 border-2 border-black px-2 py-1 text-xs font-black">
                  FRESH!
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}