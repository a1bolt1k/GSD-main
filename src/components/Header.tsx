import React from 'react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-4 border-black">
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h1 className="gradient-text m-0 p-0 text-3xl font-black italic tracking-tighter">GSD</h1>
            <div className="hidden sm:flex gap-1">
               <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
               <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
               <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wide">
            <a href="#how-it-works" className="hover:text-pink-500 hover:-translate-y-0.5 transition-all">
              Как это работает
            </a>
            <a href="#gallery" className="hover:text-cyan-500 hover:-translate-y-0.5 transition-all">
              Галерея
            </a>
            <a href="#artists" className="hover:text-yellow-500 hover:-translate-y-0.5 transition-all">
              Для артистов
            </a>
            <a href="#faq" className="hover:text-pink-500 hover:-translate-y-0.5 transition-all">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <button className="btn-primary py-2 px-6 text-sm">
            Начать
          </button>
        </div>
      </div>
    </header>
  );
}