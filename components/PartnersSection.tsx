'use client';
import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const partners = [
  { name: 'فندق تاج شمسان', logo: 'https://static.readdy.ai/project_files/f5892100-29bb-4e31-bdc5-33222d4d83f4/6ed220a4-5bae-4677-beeb-4dbf3567595e_--.jpg?v=49fc7a2b6f59e9aa5e3c72b2ebdf45f9' },
  { name: 'تاج مول', logo: 'https://static.readdy.ai/project_files/f5892100-29bb-4e31-bdc5-33222d4d83f4/018590b6-91f5-482d-af43-51023e31bab9_-.jpg?v=b88b3a477c83593c35330169b0a5607b' },
  { name: 'فندق وأجنحة كراون ميلا السياحي', logo: 'https://static.readdy.ai/project_files/f5892100-29bb-4e31-bdc5-33222d4d83f4/8fcfd337-894d-4e0f-8934-f15cfccff398_----.jpg?v=c4258da8a67801231d95284e3f2bda4c' },
  { name: 'محطة الأخوين المركزية للغاز المسال', logo: 'https://static.readdy.ai/project_files/f5892100-29bb-4e31-bdc5-33222d4d83f4/40ae205e-0b15-4122-8e7e-93c9b03097a2_----.jpg?v=dd7fca8f467b473df9ef00a5cf28fbea' },
  { name: 'الوافي للصرافة والتحويلات', logo: 'https://static.readdy.ai/project_files/f5892100-29bb-4e31-bdc5-33222d4d83f4/a187b317-1367-4d00-b5a4-f08789a23e59_--.jpg?v=21411642a9a3d848e7f20292754d48fd' },
  { name: 'سهيل للصرافة والتحويلات', logo: 'https://static.readdy.ai/project_files/f5892100-29bb-4e31-bdc5-33222d4d83f4/4ad9f8da-a6c4-488b-9118-ae62ad353de8_--.jpg?v=907c9c07577dff073d242cd4025c61b3' },
];

export default function PartnersSection() {
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

  const doubled = [...partners, ...partners];

  return (
    <section id="clients" ref={sectionRef} className="relative w-full py-12 md:py-28 overflow-hidden" style={{ background: '#f8f9f5' }}>
      <div className="w-full px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <div className={`text-center mb-8 md:mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4" style={{ background: 'rgba(75,90,59,0.1)', border: '1px solid rgba(75,90,59,0.2)' }}>
            <div className="w-4 h-4 flex items-center justify-center">
              <Star size={14} style={{ color: '#4b5a3b' }} />
            </div>
            <span className="text-xs md:text-sm font-medium" style={{ color: '#4b5a3b' }}>ثقة عملائنا</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-2 md:mb-4" style={{ color: '#4b5a3b' }}>شركاء نعتز بثقتهم</h2>
        </div>
      </div>

      <div className={`relative w-full overflow-hidden transition-all duration-700 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10" style={{ background: 'linear-gradient(to left, #f8f9f5, transparent)' }} />
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10" style={{ background: 'linear-gradient(to right, #f8f9f5, transparent)' }} />

        <div className="flex gap-5 md:gap-10 animate-marquee-rtl py-3 md:py-6" style={{ width: 'max-content' }}>
          {doubled.map((partner, i) => (
            <div
              key={i}
              className="group flex-shrink-0 w-40 h-32 md:w-60 md:h-40 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center cursor-default transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.04]"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(75,90,59,0.08)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(155,122,75,0.35)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 24px 60px rgba(75,90,59,0.14), 0 8px 20px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,90,59,0.08)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)';
              }}
            >
              <div className="flex flex-col items-center justify-center gap-2 md:gap-3 w-full h-full px-4 py-4 md:px-6 md:py-5">
                <div className="relative w-full h-16 md:h-24 flex items-center justify-center overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain rounded-lg transition-all duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.img-fallback') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="img-fallback hidden w-full h-full items-center justify-center rounded-lg" style={{ background: 'rgba(75,90,59,0.06)' }}>
                    <span className="text-xs md:text-sm font-bold text-center px-2" style={{ color: '#4b5a3b' }}>
                      {partner.name}
                    </span>
                  </div>
                </div>
                <span
                  className="text-xs md:text-sm font-semibold transition-all duration-500 group-hover:tracking-wide whitespace-nowrap"
                  style={{ color: 'rgba(100,100,83,0.65)' }}
                >
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 40s linear infinite;
        }
      `}</style>
    </section>
  );
}