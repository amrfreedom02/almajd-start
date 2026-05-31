export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-24 sm:py-32 md:py-40 overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #faf9f7 100%)' }}>
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-[0.03]" style={{ background: '#9b7a4b', filter: 'blur(120px)' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]" style={{ background: '#4b5a3b', filter: 'blur(120px)' }} />

      <div className="w-full px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6" style={{ background: 'rgba(155,122,75,0.08)', border: '1px solid rgba(155,122,75,0.18)' }}>
            <i className="ri-headphone-line" style={{ fontSize: '16px', color: '#9b7a4b' }} />
            <span className="text-sm font-semibold" style={{ color: '#9b7a4b' }}>نقدم لكم</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 tracking-tight" style={{ color: '#4b5a3b' }}>
            خدماتنا الأمنية المتكاملة
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #9b7a4b, #c4a06a)' }} />
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#7a7a6a', lineHeight: 1.8 }}>
            حلول أمنية متكاملة مصممة خصيصاً لتلبية احتياجاتك بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl sm:rounded-[28px] cursor-default transition-all duration-400"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(75,90,59,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.04), 0 0 0 0 rgba(155,122,75,0)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow = '0 32px 64px rgba(75,90,59,0.12), 0 8px 24px rgba(0,0,0,0.06)';
                el.style.borderColor = 'rgba(155,122,75,0.2)';
                el.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.04), 0 0 0 0 rgba(155,122,75,0)';
                el.style.borderColor = 'rgba(75,90,59,0.06)';
                el.style.transform = 'translateY(0)';
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl sm:rounded-t-[28px] transition-all duration-400 group-hover:h-1.5" style={{ background: 'linear-gradient(90deg, #9b7a4b, #c4a06a)' }} />

              <div className="p-7 sm:p-9">
                <div className="flex items-center justify-between mb-7 sm:mb-8">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:rounded-[20px]"
                    style={{ background: 'rgba(75,90,59,0.06)' }}
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center" style={{ color: '#4b5a3b' }}>
                      <i className={`${service.icon} text-2xl sm:text-3xl`}></i>
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-300" style={{ color: '#4b5a3b' }}>
                    0{i + 1}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#4b5a3b' }}>
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-7 sm:mb-8" style={{ color: '#7a7a6a', lineHeight: 1.8 }}>
                  {service.desc}
                </p>

                <div className="flex items-center justify-between pt-5 sm:pt-6" style={{ borderTop: '1px solid rgba(75,90,59,0.08)' }}>
                  <span className="text-sm font-bold whitespace-nowrap" style={{ color: '#9b7a4b' }}>
                    اكتشف المزيد
                  </span>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1" style={{ background: 'rgba(155,122,75,0.1)', color: '#9b7a4b' }}>
                    <i className="ri-arrow-left-line" style={{ fontSize: '16px' }}></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: 'ri-building-2-line', title: 'حراسة المنشآت', desc: 'حماية شاملة للمباني التجارية والصناعية والمؤسسات الحكومية على مدار الساعة' },
  { icon: 'ri-calendar-line', title: 'تأمين الفعاليات', desc: 'تأمين كامل للمؤتمرات والمعارض والفعاليات الرياضية والثقافية بأحدث التقنيات' },
  { icon: 'ri-video-line', title: 'أنظمة المراقبة', desc: 'تركيب وصيانة أنظمة كاميرات المراقبة الذكية مع التحليل الآلي للمخاطر' },
  { icon: 'ri-shield-user-line', title: 'الحماية الشخصية', desc: 'فرق أمنية متخصصة لحماية الشخصيات العامة والهامة بأعلى مستويات السرية' },
  { icon: 'ri-time-line', title: 'الاستجابة السريعة', desc: 'فرق طوارئ مجهزة بالكامل للتدخل الفوري في الحالات الأمنية الطارئة' },
  { icon: 'ri-file-list-3-line', title: 'استشارات أمنية', desc: 'تقييم شامل للمخاطر ووضع خطط أمنية متكاملة مخصصة لاحتياجات كل عميل' },
];