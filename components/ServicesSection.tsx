'use client';
import { useEffect, useRef, useState } from 'react';
import { Headphones, Building2, CalendarDays, Video, UserCheck, Clock, FileText, ArrowLeft } from 'lucide-react';

const services = [
  { icon: Building2, title: 'حراسة المنشآت', desc: 'حماية شاملة للمباني التجارية والصناعية والمؤسسات الحكومية على مدار الساعة' },
  { icon: CalendarDays, title: 'تأمين الفعاليات', desc: 'تأمين كامل للمؤتمرات والمعارض والفعاليات الرياضية والثقافية بأحدث التقنيات' },
  { icon: Video, title: 'أنظمة المراقبة', desc: 'تركيب وصيانة أنظمة كاميرات المراقبة الذكية مع التحليل الآلي للمخاطر' },
  { icon: UserCheck, title: 'الحماية الشخصية', desc: 'فرق أمنية متخصصة لحماية الشخصيات العامة والهامة بأعلى مستويات السرية' },
  { icon: Clock, title: 'الاستجابة السريعة', desc: 'فرق طوارئ مجهزة بالكامل للتدخل الفوري في الحالات الأمنية الطارئة' },
  { icon: FileText, title: 'استشارات أمنية', desc: 'تقييم شامل للمخاطر ووضع خطط أمنية متكاملة مخصصة لاحتياجات كل عميل' },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative w-full py-16 sm:py-20 md:py-32 overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-5" style={{ background: '#9b7a4b', filter: 'blur(100px)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: '#4b5a3b', filter: 'blur(100px)' }} />

      <div className="w-full px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(155,122,75,0.1)', border: '1px solid rgba(155,122,75,0.2)' }}>
            <Headphones size={16} style={{ color: '#9b7a4b' }} />
            <span className="text-sm font-medium" style={{ color: '#9b7a4b' }}>نقدم لكم</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-4" style={{ color: '#4b5a3b' }}>خدماتنا الأمنية المتكاملة</h2>
          <p className="text-sm sm:text-base sm:text-lg max-w-2xl mx-auto px-2" style={{ color: '#646453', lineHeight: 1.8 }}>
            حلول أمنية متكاملة مصممة خصيصاً لتلبية احتياجاتك بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, visible }: { service: typeof services[0]; index: number; visible: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const IconComp = service.icon;

  return (
    <div
      ref={cardRef}
      className={`group rounded-2xl sm:rounded-3xl p-5 sm:p-8 cursor-default transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.5)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transitionDelay: `${index * 100}ms`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(75,90,59,0.2)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,90,59,0.3)';
      }}
    >
      <div
        className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300"
        style={{ background: 'rgba(75,90,59,0.08)' }}
      >
        <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center" style={{ color: '#4b5a3b' }}>
          <IconComp size={20} className="sm:hidden" />
          <IconComp size={24} className="hidden sm:block" />
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#4b5a3b' }}>{service.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#646453', lineHeight: 1.8 }}>{service.desc}</p>

      <div className="flex items-center gap-2 mt-4 sm:mt-6 pt-3 sm:pt-4" style={{ borderTop: '1px solid rgba(75,90,59,0.08)' }}>
        <span className="text-sm font-medium" style={{ color: '#9b7a4b' }}>اكتشف المزيد</span>
        <div className="w-5 h-5 flex items-center justify-center transition-transform duration-300 group-hover:-translate-x-1" style={{ color: '#9b7a4b' }}>
          <ArrowLeft size={16} />
        </div>
      </div>
    </div>
  );
}