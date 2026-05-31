export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full py-16 sm:py-20 md:py-32 overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-5" style={{ background: '#9b7a4b', filter: 'blur(100px)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: '#4b5a3b', filter: 'blur(100px)' }} />

      <div className="w-full px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(155,122,75,0.1)', border: '1px solid rgba(155,122,75,0.2)' }}>
            <i className="ri-headphone-line" style={{ fontSize: '16px', color: '#9b7a4b' }} />
            <span className="text-sm font-medium" style={{ color: '#9b7a4b' }}>نقدم لكم</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-4" style={{ color: '#4b5a3b' }}>خدماتنا الأمنية المتكاملة</h2>
          <p className="text-sm sm:text-base sm:text-lg max-w-2xl mx-auto px-2" style={{ color: '#646453', lineHeight: 1.8 }}>
            حلول أمنية متكاملة مصممة خصيصاً لتلبية احتياجاتك بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group rounded-2xl sm:rounded-3xl p-5 sm:p-8 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.5)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
              }}
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6"
                style={{ background: 'rgba(75,90,59,0.08)' }}
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center" style={{ color: '#4b5a3b' }}>
                  <i className={`${service.icon} text-xl sm:hidden`}></i>
                  <i className={`${service.icon} text-2xl hidden sm:block`}></i>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#4b5a3b' }}>{service.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#646453', lineHeight: 1.8 }}>{service.desc}</p>

              <div className="flex items-center gap-2 mt-4 sm:mt-6 pt-3 sm:pt-4" style={{ borderTop: '1px solid rgba(75,90,59,0.08)' }}>
                <span className="text-sm font-medium" style={{ color: '#9b7a4b' }}>اكتشف المزيد</span>
                <div className="w-5 h-5 flex items-center justify-center" style={{ color: '#9b7a4b' }}>
                  <i className="ri-arrow-left-line" style={{ fontSize: '16px' }}></i>
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