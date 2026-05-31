'use client';
import { useEffect, useRef, useState } from 'react';

const reasons = [
  { title: 'الاحترافية والانضباط', desc: 'نلتزم بأعلى درجات الجدية والمسؤولية في تنفيذ المهام الأمنية.' },
  { title: 'كوادر مؤهلة ومدربة', desc: 'فريق أمني قادر على التعامل مع المنشآت، الشخصيات، الحشود، والمهام الخاصة بكفاءة عالية.' },
  { title: 'حلول أمنية متكاملة', desc: 'من الحراسة الميدانية إلى أنظمة المراقبة والاستشارات الأمنية والاستجابة السريعة.' },
  { title: 'استجابة سريعة وفعالة', desc: 'جاهزية عالية للتعامل مع الحالات الطارئة والمهام التي تحتاج تدخلاً فورياً.' },
  { title: 'ثقة والتزام', desc: 'نعمل بشفافية وحرص كامل على حماية مصالح عملائنا وممتلكاتهم وسمعتهم.' },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" ref={sectionRef} className="relative w-full py-16 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20luxury%20commercial%20building%20exterior%20with%20glass%20facades%20and%20security%20infrastructure%20at%20dusk%2C%20dramatic%20architectural%20visualization%20with%20golden%20warm%20lighting%20reflecting%20on%20windows%2C%20dark%20olive%20green%20sky%2C%20premium%20corporate%20headquarters%20security%20concept%2C%20cinematic%20wide%20angle%20photography%2C%20professional%20real%20estate&width=1920&height=1080&seq=why-bg-1&orientation=landscape')`,
          filter: 'brightness(0.3) saturate(0.6)',
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,34,16,0.95) 0%, rgba(75,90,59,0.4) 50%, rgba(26,34,16,0.85) 100%)' }} />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4" style={{ background: 'rgba(155,122,75,0.15)', border: '1px solid rgba(155,122,75,0.3)', backdropFilter: 'blur(10px)' }}>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-star-fill text-xs" style={{ color: '#9b7a4b' }}></i>
            </div>
            <span className="text-xs md:text-sm font-medium" style={{ color: '#9b7a4b' }}>ما يميزنا</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-3 md:mb-4" style={{ color: '#ffffff' }}>لماذا تختار المجد ستار؟</h2>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
            لأن المجد للخدمات الأمنية لا تقدم خدمة حراسة تقليدية، بل تقدم منظومة أمنية متكاملة مصممة لحماية ما يهمك. نتميز بـ:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5 mb-8 md:mb-12">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(155,122,75,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                transitionDelay: `${i * 100}ms`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(75,90,59,0.3)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(155,122,75,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(155,122,75,0.2)';
              }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4" style={{ background: 'rgba(155,122,75,0.15)' }}>
                <div className="w-6 h-6 flex items-center justify-center" style={{ color: '#9b7a4b' }}>
                  <i className="ri-checkbox-circle-line text-base"></i>
                </div>
              </div>
              <h3 className="text-sm md:text-base font-bold mb-1 md:mb-2" style={{ color: '#ffffff' }}>{reason.title}</h3>
              <p className="text-xs md:text-sm" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className={`flex justify-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#contact"
            className="group relative px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold whitespace-nowrap overflow-hidden cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #9b7a4b, #c4a06a)',
              color: '#ffffff',
              boxShadow: '0 0 40px rgba(155,122,75,0.5), 0 8px 32px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(155,122,75,0.7), 0 12px 40px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(155,122,75,0.5), 0 8px 32px rgba(0,0,0,0.3)';
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>احجز استشارتك الآن</span>
              <div className="w-5 h-5 flex items-center justify-center"><i className="ri-arrow-left-line text-lg"></i></div>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}