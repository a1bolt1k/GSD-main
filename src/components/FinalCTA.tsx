import React, { useState } from 'react';
import { Mail, Zap } from 'lucide-react';

export function FinalCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо! Мы отправим новости на ${email}`);
    setEmail('');
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rotate-12 rounded-lg opacity-20 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-400 -rotate-12 rounded-full opacity-20 -z-10 animate-pulse animation-delay-1000"></div>

      <div className="sticker-card p-8 lg:p-16 text-center bg-white relative border-4 border-black shadow-[8px_8px_0px_#000]">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-6 py-2 font-black text-xl rotate-2 border-2 border-black shadow-lg uppercase flex items-center gap-2">
           <Zap className="w-6 h-6 fill-current" />
           Join the Crew
        </div>
        
        <h2 className="mb-6 text-4xl md:text-5xl font-black uppercase">
          Готов собрать свою <span className="gradient-text">первую деку</span>?
        </h2>
        
        <p className="opacity-80 mb-8 max-w-2xl mx-auto text-xl font-medium">
          Подпишись на наши обновления и получи скидку 15% на первый заказ. 
          Или оставь заявку на кастом прямо сейчас.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Твой email"
                required
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-black text-black rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-200 placeholder:text-gray-400 font-bold"
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] active:translate-y-[4px] active:shadow-none transition-all">
              Подписаться
            </button>
          </div>
        </form>

        <a href="#" className="inline-block font-bold text-lg border-b-2 border-black hover:text-pink-500 hover:border-pink-500 transition-colors">
          или оставить заявку на кастом прямо сейчас →
        </a>
      </div>
    </section>
  );
}