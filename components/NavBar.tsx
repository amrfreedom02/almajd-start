'use client';
import { useState, useEffect, useCallback } from 'react';

const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'من نحن', href: '#about' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'لماذا نحن', href: '#why' },
  { label: 'عملاؤنا', href: '#clients' },
  { label: 'تواصل معنا', href: '#contact' },
];

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

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-5 h-4 relative flex flex-col justify-between items-center">
      <span
        className="block w-5 h-0.5 rounded-full transition-all duration-300 ease-out origin-center"
        style={{
          background: '#c4a06a',
          transform: open ? 'rotate(45deg) translateY(7px)' : 'rotate(0) translateY(0)',
        }}
      />
      <span
        className="block w-5 h-0.5 rounded-full transition-all duration-300 ease-out"
        style={{
          background: '#c4a06a',
          opacity: open ? 0 : 1,
          transform: open ? 'translateX(-10px)' : 'translateX(0)',
        }}
      />
      <span
        className="block w-5 h-0.5 rounded-full transition-all duration-300 ease-out origin-center"
        style={{
          background: '#c4a06a',
          transform: open ? 'rotate(-45deg) translateY(-7px)' : 'rotate(0) translateY(0)',
        }}
      />
    </div>
  );
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const smoothScroll = useCallback((href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(26,34,16,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(155,122,75,0.2)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); smoothScroll('#hero'); }}
          className="flex items-center gap-2 h-12 sm:h-14"
        >
          <div
            className="h-full rounded-lg p-1"
            style={{
              border: '2px solid rgba(196,160,106,0.8)',
              background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(30,25,15,0.9))',
              boxShadow: '0 0 20px rgba(196,160,106,0.4), 0 4px 12px rgba(0,0,0,0.5)',
            }}
          >
            <img
              src={LOGO_URL}
              alt="المجد ستار"
              className="h-full w-auto object-contain"
              style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))' }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const fallback = e.currentTarget.parentElement?.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
          </div>
          <LogoFallback className="h-12 sm:h-14 px-3 sm:px-4 text-sm sm:text-base hidden logo-fallback" />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={(e) => { e.preventDefault(); smoothScroll(link.href); }}
              className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-all duration-200"
              style={{ color: 'rgba(255,255,255,0.8)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#c4a06a';
                (e.currentTarget as HTMLElement).style.background = 'rgba(155,122,75,0.1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); smoothScroll('#contact'); }}
          className="hidden md:block px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #9b7a4b, #c4a06a)',
            color: '#fff',
            boxShadow: '0 4px 15px rgba(155,122,75,0.4)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
        >
          احجز استشارة
        </a>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer"
          style={{ color: '#c4a06a', background: 'rgba(155,122,75,0.1)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 md:hidden transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]`}
        style={{
          width: '280px',
          height: '100dvh',
          background: '#1a2210',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10 pt-2">
            <div className="flex items-center gap-2 h-12">
              <div
                className="h-full rounded-lg p-1"
                style={{
                  border: '2px solid rgba(196,160,106,0.8)',
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(30,25,15,0.9))',
                  boxShadow: '0 0 20px rgba(196,160,106,0.4), 0 4px 12px rgba(0,0,0,0.5)',
                }}
              >
                <img
                  src={LOGO_URL}
                  alt="المجد ستار"
                  className="h-full w-auto object-contain"
                  style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))' }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
              </div>
              <LogoFallback className="h-12 px-3 text-sm hidden logo-fallback" />
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer"
              style={{ color: '#c4a06a', background: 'rgba(155,122,75,0.1)' }}
              aria-label="Close menu"
            >
              <HamburgerIcon open={true} />
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => { e.preventDefault(); smoothScroll(link.href); }}
                className="py-3 px-4 rounded-lg text-sm font-medium cursor-pointer"
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  borderBottom: '1px solid rgba(155,122,75,0.1)',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(1rem)',
                  transition: `all 0.4s cubic-bezier(0.32,0.72,0,1) ${120 + i * 60}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-6">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); smoothScroll('#contact'); }}
              className="block text-center py-3 rounded-full font-bold text-white cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #9b7a4b, #c4a06a)' }}
            >
              احجز استشارة
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}