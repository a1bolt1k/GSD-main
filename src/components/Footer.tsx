import React from 'react';
import { Instagram, Twitter, Mail, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white relative overflow-hidden">
      {/* Footer decoration */}
      <div className="absolute left-0 bottom-0 w-full h-2 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500"></div>

      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 space-y-4">
            <h3 className="gradient-text m-0 text-4xl font-black tracking-tighter">GSD</h3>
            <p className="opacity-70 font-medium">
              Собери свою уникальную скейт-деку без компромиссов. Создано скейтерами для скейтеров.
            </p>
            <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-pink-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
               <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-6 font-black uppercase text-lg border-b-2 border-black inline-block pb-1">Продукт</h4>
            <ul className="space-y-3 font-bold opacity-80">
              <li><a href="#how-it-works" className="hover:text-pink-500 transition-colors">Как это работает</a></li>
              <li><a href="#gallery" className="hover:text-pink-500 transition-colors">Галерея</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Цены</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Доставка</a></li>
            </ul>
          </div>

          {/* For Artists */}
          <div>
            <h4 className="mb-6 font-black uppercase text-lg border-b-2 border-black inline-block pb-1">Для артистов</h4>
            <ul className="space-y-3 font-bold opacity-80">
              <li><a href="#artists" className="hover:text-cyan-500 transition-colors">Стать партнёром</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Загрузить дизайн</a></li>
              <li><a href="#" className="hover:text-cyan-500 transition-colors">Условия</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-6 font-black uppercase text-lg border-b-2 border-black inline-block pb-1">Поддержка</h4>
            <ul className="space-y-3 font-bold opacity-80">
              <li><a href="#faq" className="hover:text-yellow-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Возвраты</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Гарантия</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="opacity-50 m-0 font-bold text-sm">
            © 2024 GSD. Все права защищены.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full hover:bg-pink-500 hover:-translate-y-1 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full hover:bg-cyan-500 hover:-translate-y-1 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full hover:bg-yellow-400 hover:-translate-y-1 transition-all">
              <Mail className="w-5 h-5" />
            </a>
             <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full hover:bg-blue-600 hover:-translate-y-1 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
             <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full hover:bg-red-600 hover:-translate-y-1 transition-all">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}