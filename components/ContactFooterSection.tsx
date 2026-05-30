'use client';
import { useEffect, useRef, useState } from 'react';
import { Users, MapPin, Phone, Mail, Globe, Facebook, MessageCircle, Instagram } from 'lucide-react';

const LOGO_URL = 'https://static.readdy.ai/image/f01d069de9648afc1fc061d75fe35c05/f141cd39aba6c917f1071efe3f465f97.png';

function LogoFallback({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg ${className}`}
      style={{
        background: 'rgba(0,0,0,0.7)',
        border: '2px solid #c4a06a',
        boxShadow: '0 0 20px rgba(196,160,106,0.4), 0 4px 12px rgba(0,0,0,0.5)',
      }}
    >
      <span className="font-bold whitespace-nowrap" style={{ color: '#c4a06a', fontFamily: 'Pacifico, serif' }}>
        المجد ستار
      </span>
    </div>
  );
}

export default function ContactFooterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `مرحباً، أنا ${formData.name}\nرقمي: ${formData.phone}\nبريدي: ${formData.email}\nالخدمة المطلوبة: ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/967771171890?text=${encoded}`, '_blank');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative w-full overflow-hidden" style={{ background: '#646453' }}>
      <div className="w-full px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto py-16 sm:py-20 md:py-28">
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(155,122,75,0.15)', border: '1px solid rgba(155,122,75,0.3)' }}>
            <Users size={16} style={{ color: '#9b7a4b' }} />
            <span className="text-sm font-medium" style={{ color: '#9b7a4b' }}>تواصل معنا</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-4" style={{ color: '#ffffff' }}>تواصل معنا اليوم</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
              <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8" style={{ color: '#9b7a4b' }}>معلومات التواصل</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(155,122,75,0.15)' }}>
                    <MapPin size={18} className="sm:hidden" style={{ color: '#9b7a4b' }} />
                    <MapPin size={22} className="hidden sm:block" style={{ color: '#9b7a4b' }} />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>العنوان</div>
                    <div className="text-sm sm:text-base font-medium" style={{ color: '#ffffff', lineHeight: 1.7 }}>تعز - جولة المسبح - عمارة صيدلية التضامن</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(155,122,75,0.15)' }}>
                    <Phone size={18} className="sm:hidden" style={{ color: '#9b7a4b' }} />
                    <Phone size={22} className="hidden sm:block" style={{ color: '#9b7a4b' }} />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>الهواتف</div>
                    <div className="text-sm sm:text-base font-medium" style={{ color: '#ffffff', lineHeight: 1.7 }}>04237265 - 776290946 - 733838281</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(155,122,75,0.15)' }}>
                    <Mail size={18} className="sm:hidden" style={{ color: '#9b7a4b' }} />
                    <Mail size={22} className="hidden sm:block" style={{ color: '#9b7a4b' }} />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>البريد الإلكتروني</div>
                    <div className="text-sm sm:text-base font-medium" style={{ color: '#ffffff' }}>info@almajdstar.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(155,122,75,0.15)' }}>
                    <Globe size={18} className="sm:hidden" style={{ color: '#9b7a4b' }} />
                    <Globe size={22} className="hidden sm:block" style={{ color: '#9b7a4b' }} />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>الموقع الإلكتروني</div>
                    <div className="text-sm sm:text-base font-medium" style={{ color: '#ffffff' }}>www.almajdstar.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-8"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: '#9b7a4b' }}>احجز استشارتك الآن</h3>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>الاسم الكامل</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#ffffff',
                    }}
                    placeholder="أدخل اسمك الكامل"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>رقم الهاتف</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#ffffff',
                    }}
                    placeholder="مثال: 773456789"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#ffffff',
                    }}
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>نوع الخدمة المطلوبة</label>
                  <input
                    type="text"
                    name="service_type"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#ffffff',
                    }}
                    placeholder="اكتب نوع الخدمة أو وصف احتياجك"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold whitespace-nowrap cursor-pointer transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #9b7a4b, #c4a06a)',
                    color: '#ffffff',
                    boxShadow: '0 8px 30px rgba(155,122,75,0.4)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(155,122,75,0.6)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(155,122,75,0.4)';
                  }}
                >
                  احجز استشارتك الآن
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="w-full py-6 sm:py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.2)' }}>
        <div className="w-full px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="rounded-lg p-1"
              style={{
                border: '2px solid rgba(196,160,106,0.8)',
                background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(30,25,15,0.9))',
                boxShadow: '0 0 20px rgba(196,160,106,0.4), 0 4px 12px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src={LOGO_URL}
                alt="المجد ستار"
                className="h-10 sm:h-11 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))' }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
            </div>
            <LogoFallback className="h-10 sm:h-11 px-3 text-sm sm:text-base hidden logo-fallback" />
          </div>

          <div className="text-xs sm:text-sm text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
            جميع الحقوق محفوظة © 2026 المجد ستار للخدمات الأمنية
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, href: 'https://www.facebook.com/share/18Raj8YjPd/' },
              { icon: MessageCircle, href: 'https://wa.me/967771171890' },
              { icon: Instagram, href: 'https://www.instagram.com/almajdstar?igsh=Nnp1cWloaHE0YXM3' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(155,122,75,0.2)';
                  (e.currentTarget as HTMLElement).style.color = '#9b7a4b';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                }}
              >
                <item.icon size={16} className="sm:hidden" />
                <item.icon size={18} className="hidden sm:block" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}