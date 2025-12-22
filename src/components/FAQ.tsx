import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Сколько времени занимает производство?',
      answer: 'Обычно производство одной деки занимает 7-10 рабочих дней. После этого добавляется время доставки в зависимости от твоего региона (обычно 3-7 дней по России).'
    },
    {
      question: 'Можно ли вернуть деку, если она не понравится?',
      answer: 'Да! У тебя есть 14 дней на возврат. Если дека пришла с браком или не соответствует заказу — мы вернём деньги или сделаем новую бесплатно. Если просто передумал — вернём деньги за вычетом стоимости доставки.'
    },
    {
      question: 'Какого качества будет печать на деке?',
      answer: 'Мы используем термотрансферную печать высокого разрешения. Изображение не стирается, не выцветает и выдерживает удары и трюки. Это тот же метод, который используют топовые бренды.'
    },
    {
      question: 'Можно ли загрузить свой дизайн?',
      answer: 'Конечно! Ты можешь выбрать готовый стиль через музыкальные фильтры или загрузить свою картинку. Для художников и дизайнеров есть отдельная программа партнёрства.'
    },
    {
      question: 'Из чего сделаны деки?',
      answer: 'Все наши деки делаются из 7-слойного канадского клёна — это стандарт индустрии. Каждая дека прессуется под давлением для правильного конкейва и прочности.'
    }
  ];

  return (
    <section id="faq" className="max-w-4xl mx-auto px-6 py-20 relative">
      <div className="absolute top-10 right-10 w-24 h-24 bg-cyan-400 rounded-full blur-2xl opacity-20 pointer-events-none"></div>

      <div className="text-center mb-12">
        <div className="inline-block p-3 bg-black text-white rounded-full mb-4">
           <HelpCircle className="w-8 h-8" />
        </div>
        <h2 className="text-center text-4xl font-black uppercase">
          Частые <span className="gradient-text">вопросы</span>
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="sticker-card bg-white overflow-hidden shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <h4 className="m-0 pr-4 font-bold text-lg">{faq.question}</h4>
              <div className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'bg-pink-500 text-white rotate-180' : 'bg-white text-black'
                }`}>
                 <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
               <div className="overflow-hidden">
                 <div className="px-6 pb-6 border-t-2 border-dashed border-gray-200 pt-4">
                    <p className="opacity-80 m-0 font-medium leading-relaxed">{faq.answer}</p>
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}