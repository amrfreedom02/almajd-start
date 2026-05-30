'use client';
import { useEffect, useRef, useState } from 'react';
import { Info, Eye, Target, CheckCircle2 } from 'lucide-react';

const goals = [
  { text: 'تقديم خدمات أمنية موثوقة تلبي احتياجات المنشآت، والشخصيات، والفعاليات بمستوى عالٍ من الجودة والانضباط.' },
  { text: 'رفع كفاءة الكوادر الأمنية من خلال التدريب المستمر والتأهيل العملي للتعامل مع مختلف الظروف والمواقف.' },
  { text: 'تطوير حلول رقابية حديثة تعتمد على أنظمة الكاميرات والمراقبة والمتابعة المستمرة لتعزيز مستوى الحماية.' },
  { text: 'تعزيز سرعة الاستجابة للمهام الطارئة والمواقف التي تتطلب تدخلاً أمنياً عاجلاً.' },
  { text: 'بناء شراكات طويلة الأمد مع العملاء قائمة على الثقة، والالتزام، والشفافية، وجودة الأداء.' },
  { text: 'تقديم استشارات أمنية احترافية تساعد العملاء على تقييم المخاطر ووضع خطط حماية مناسبة لطبيعة أعمالهم.' },
  { text: 'المساهمة في تنظيم بيئات آمنة للفعاليات والمهرجانات والمنشآت العامة والخاصة.' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<'vision' | 'mission'>('vision');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative w-full py-16 sm:py-20 md:py-32 overflow-hidden" style={{ background: '#f8f9f5' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: '#4b5a3b', filter: 'blur(80px)' }} />

      <div className="w-full px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(75,90,59,0.1)', border: '1px solid rgba(75,90,59,0.2)' }}>
            <div className="w-4 h-4 flex items-center justify-center"><Info size={16} style={{ color: '#4b5a3b' }} /></div>
            <span className="text-sm font-medium" style={{ color: '#4b5a3b' }}>تعرف علينا</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-4" style={{ color: '#4b5a3b' }}>منظومة أمنية متكاملة تفوق التوقعات</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-full" style={{ minHeight: '200px' }}>
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20security%20guard%20in%20formal%20dark%20uniform%20standing%20confidently%20at%20a%20modern%20luxury%20building%20entrance%20with%20golden%20accents%2C%20cinematic%20dramatic%20lighting%2C%20olive%20green%20and%20dark%20tones%2C%20highly%20detailed%20photorealistic%20portrait%20style%2C%20shallow%20depth%20of%20field%20background%20with%20bokeh%2C%20corporate%20security%20company%20advertisement%20aesthetic&width=800&height=600&seq=about-img-1&orientation=landscape"
                alt="فريق المجد ستار الأمني"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className={`flex flex-col justify-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-sm sm:text-base mb-6 sm:mb-8" style={{ color: '#646453', lineHeight: 1.9 }}>
              نؤمن في المجد أن الأمن ليس مجرد حراسة، بل هو منظومة متكاملة تبدأ من التخطيط الجيد، وتمر بالتنفيذ الاحترافي، وتنتهي بالاستجابة السريعة لأي موقف يتطلب حماية أو تدخلاً أمنياً. نعمل بفريق مؤهل ومدرب، يمتلك الانضباط، والجاهزية، والقدرة على التعامل مع مختلف البيئات والمهام الأمنية بكفاءة ومسؤولية عالية.
            </p>

            <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
              {(['vision', 'mission'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCard(key)}
                  className="flex-1 py-3 sm:py-4 px-3 sm:px-5 rounded-xl sm:rounded-2xl text-center font-bold cursor-pointer transition-all duration-300 text-sm sm:text-base"
                  style={{
                    background: activeCard === key ? '#4b5a3b' : '#ffffff',
                    color: activeCard === key ? '#ffffff' : '#646453',
                    border: activeCard === key ? 'none' : '1px solid rgba(100,100,83,0.15)',
                    boxShadow: activeCard === key ? '0 8px 30px rgba(75,90,59,0.3)' : '0 2px 10px rgba(0,0,0,0.05)',
                  }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    {key === 'vision' ? <Eye size={16} className="sm:hidden" /> : <Target size={16} className="sm:hidden" />}
                    {key === 'vision' ? <Eye size={20} className="hidden sm:block" /> : <Target size={20} className="hidden sm:block" />}
                  </div>
                  {key === 'vision' ? 'رؤيتنا' : 'رسالتنا'}
                </button>
              ))}
            </div>

            <div
              className="rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-500"
              style={{
                background: '#ffffff',
                border: '1px solid rgba(75,90,59,0.1)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              <p className="text-sm sm:text-base" style={{ color: '#646453', lineHeight: 1.9 }}>
                {activeCard === 'vision'
                  ? 'أن نكون من الشركات الرائدة في مجال الخدمات الأمنية، وأن نصبح الخيار الأول للجهات والمؤسسات والأفراد الباحثين عن حماية موثوقة ، وخدمات أمنية احترافية، وحلول رقابية متطورة تواكب متطلبات العصر.'
                  : 'تقديم خدمات أمنية متكاملة بمعايير عالية من الاحترافية والانضباط، من خلال كوادر مؤهلة، وخطط مدروسة، وتقنيات حديثة، بما يضمن حماية العملاء وممتلكاتهم، وتعزيز شعورهم بالأمان والثقة في كل وقت ومكان.'
                }
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-base sm:text-xl md:text-2xl font-bold text-center mb-6 sm:mb-10" style={{ color: '#4b5a3b' }}>أهدافنا الاستراتيجية</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 max-w-5xl mx-auto">
          {goals.map((goal, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(75,90,59,0.1)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                transitionDelay: `${400 + i * 100}ms`,
              }}
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(75,90,59,0.1)' }}>
                <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center" style={{ color: '#4b5a3b' }}>
                  <CheckCircle2 size={12} className="sm:hidden" />
                  <CheckCircle2 size={14} className="hidden sm:block" />
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium" style={{ color: '#646453', lineHeight: 1.8 }}>{goal.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}