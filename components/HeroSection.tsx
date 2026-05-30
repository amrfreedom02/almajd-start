'use client';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

const HERO_VIDEO_URL = 'https://public.readdy.ai/ai/video_res/019e79c5-5ac0-7a03-a9ad-554d450ea1e1.mp4';

const LOGO_URL = 'https://static.readdy.ai/image/f01d069de9648afc1fc061d75fe35c05/f141cd39aba6c917f1071efe3f465f97.png';

function LogoFallback({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg ${className}`}
      style={{
        background: 'rgba(0,0,0,0.8)',
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

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '100dvh',
        background: 'linear-gradient(135deg, #0a0f0a 0%, #1a1a0a 50%, #0f0a0a 100%)',
      }}
    >
      <video
        src={HERO_VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      <div
        className="relative flex flex-col items-center justify-center text-center px-4 w-full min-h-[100dvh] py-24 md:py-28"
        style={{ zIndex: 10 }}
      >
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 w-full max-w-3xl mx-auto">
          <div className="mb-2">
            <div
              className="rounded-xl p-2 inline-block"
              style={{
                border: '2px solid rgba(196,160,106,0.8)',
                background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(30,25,15,0.9))',
                boxShadow: '0 0 30px rgba(196,160,106,0.5), 0 4px 20px rgba(0,0,0,0.6)',
              }}
            >
              <img
                src={LOGO_URL}
                alt="المجد ستار"
                className="h-20 sm:h-24 md:h-36 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))' }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
            </div>
            <LogoFallback className="h-20 sm:h-24 md:h-36 px-4 sm:px-6 text-xl sm:text-2xl md:text-3xl hidden logo-fallback" />
          </div>

          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
            style={{
              background: 'rgba(155,122,75,0.3)',
              border: '1px solid rgba(155,122,75,0.5)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <ShieldCheck size={16} style={{ color: '#c4a06a' }} />
            </div>
            <span className="text-xs sm:text-sm md:text-base font-medium" style={{ color: '#c4a06a' }}>
              خدمات أمنية احترافية
            </span>
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight"
            style={{
              color: '#ffffff',
              textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.8)',
              letterSpacing: '-0.01em',
            }}
          >
            شركة المجد ستار
            <span className="block mt-1 md:mt-2" style={{ color: '#c4a06a' }}>
              للخدمات الأمنية
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold max-w-2xl mx-auto"
            style={{
              color: '#ffffff',
              lineHeight: 1.6,
              textShadow: '0 3px 20px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)',
            }}
          >
            درعك الآمن وثقتك الدائمة
          </p>

          <p
            className="text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2 sm:px-4"
            style={{
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.8,
              textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)',
            }}
          >
            المجد للخدمات الأمنية ، شريكك الموثوق في الحماية والحراسة وتقديم
            الحلول الأمنية المتكاملة، والمجد يعمل على حماية المنشآت والأفراد
            وتنظيم وتأمين الفعاليات والمهرجانات ، إضافة إلى تقديم الاستشارات
            الأمنية وأنظمة الرقابة الحديثة.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full sm:w-auto mt-2">
            <a
              href="#contact"
              className="group relative px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-bold whitespace-nowrap overflow-hidden cursor-pointer w-full sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, #9b7a4b, #c4a06a)',
                color: '#ffffff',
                boxShadow: '0 0 30px rgba(155,122,75,0.5), 0 8px 32px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'scale(1.06) translateY(-2px)';
                el.style.boxShadow = '0 0 50px rgba(155,122,75,0.8), 0 12px 40px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'scale(1) translateY(0)';
                el.style.boxShadow = '0 0 30px rgba(155,122,75,0.5), 0 8px 32px rgba(0,0,0,0.3)';
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>احجز استشارتك الأمنية الآن</span>
                <div className="w-5 h-5 flex items-center justify-center">
                  <ArrowLeft size={20} />
                </div>
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #c4a06a, #9b7a4b)' }}
              />
            </a>

            <a
              href="#services"
              className="px-5 py-2.5 md:px-8 md:py-4 rounded-full text-sm md:text-lg font-medium whitespace-nowrap cursor-pointer w-full sm:w-auto text-center"
              style={{
                border: '2px solid rgba(155,122,75,0.5)',
                color: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                background: 'rgba(255,255,255,0.05)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = '#9b7a4b';
                el.style.background = 'rgba(155,122,75,0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(155,122,75,0.5)';
                el.style.background = 'rgba(255,255,255,0.05)';
              }}
            >
              تعرف على خدماتنا
            </a>
          </div>

          <div className="grid grid-cols-2 sm:flex justify-center gap-3 sm:gap-4 md:gap-8 mt-6 md:mt-10 w-full max-w-lg sm:max-w-none">
            {[
              { num: '+500', label: 'عميل محمي' },
              { num: '+10', label: 'سنوات خبرة' },
              { num: '24/7', label: 'خدمة مستمرة' },
              { num: '100%', label: 'التزام وثقة' },
            ].map((stat, i) => (
              <div key={i} className="text-center py-2">
                <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold" style={{ color: '#c4a06a', textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm md:text-base font-medium mt-1" style={{ color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div
          className="w-8 h-12 rounded-full border-2 flex items-start justify-center p-1"
          style={{ borderColor: 'rgba(155,122,75,0.5)' }}
        >
          <div className="w-1.5 h-3 rounded-full" style={{ background: '#9b7a4b' }} />
        </div>
      </div>
    </section>
  );
}