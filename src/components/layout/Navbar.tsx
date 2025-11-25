'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Services', href: '/services' },
  { name: 'For Buyers', href: '#' },
  { name: 'For Sellers', href: '#' },
  { name: 'Resources', href: '#' },
];

// Arrow icon for buttons
const ArrowIcon = () => (
  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
    <path d="M1.8 12.5423L0.54 11.2823L10.188 1.7063L10.152 2.5523L5.886 2.5883H1.17V0.950296H12.132V11.9123H10.494V7.1783L10.53 2.7863L11.268 3.0023L1.8 12.5423Z" fill="currentColor"/>
  </svg>
);


// Logo icon
const LogoIcon = () => (
  <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.4591 23.996L16.4118 18.3721C16.4118 18.3721 24.1707 12.0345 26.791 6.16874C26.7723 6.14897 17.7054 10.7632 17.7054 10.7632L14.0061 5.62295C20.772 0.983474 24.7214 1.69848 25.7767 3.16527L30.1387 9.22647C31.7551 11.4726 26.029 19.6752 20.4587 23.996H20.4591ZM9.95881 -0.000976563L14.0061 5.62295C14.0061 5.62295 6.24723 11.9605 3.62693 17.8263C3.64561 17.846 12.7126 13.2319 12.7126 13.2319L16.4118 18.3721C9.64591 23.0115 5.69657 22.2965 4.64125 20.8297L0.278806 14.7685C-1.33764 12.5224 4.38893 4.31985 9.95881 -0.000976563Z" fill="currentColor"/>
  </svg>
);

// Logo text
const LogoText = () => (
  <span className="text-2xl font-bold tracking-tighter">secondr</span>
);


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    // Header wrapper - pour centrer la pill quand scrollé
    <header
      className={cn(
        "fixed z-[1000] text-white w-full font-sans",
        !isLoaded && "opacity-0 -translate-y-4",
        isLoaded && "opacity-100 translate-y-0"
      )}
      style={{
        top: '0.4em',
        left: 0,
        right: 0,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Container principal - devient une pill quand scrollé */}
      <div 
        className={cn(
          "flex items-center",
          isScrolled && "mx-auto w-fit rounded-full"
        )}
        style={{
          background: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(15px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(15px)' : 'none',
          padding: isScrolled ? '0.5rem 1rem' : '1em 0',
          maxWidth: isScrolled ? 'fit-content' : '90em',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: isScrolled ? '1rem' : '1.25em',
          paddingRight: isScrolled ? '1rem' : '1.25em',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Logo (brand) */}
        <Link 
          href="/" 
          className="brand flex items-center gap-3 text-white shrink-0"
        >
          <div className="c-nav_logo-icon w-[37px] h-[29px] flex items-center">
            <LogoIcon />
          </div>
          {/* Logo text - visible quand pas de scroll */}
          <div 
            className="c-nav_logo-text overflow-hidden flex items-center"
            style={{ 
              opacity: isScrolled ? 0 : 1,
              width: isScrolled ? 0 : 'auto',
              maxWidth: isScrolled ? 0 : '150px',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <LogoText />
          </div>
        </Link>

        {/* Navigation centrale */}
        <nav 
          className={cn(
            "c-nav_menu hidden lg:flex items-center rounded-full",
            !isScrolled && "mx-4"
          )}
          style={{
            padding: isScrolled ? '0' : '0.6rem 0.8rem',
            marginLeft: isScrolled ? '0.5rem' : 'auto',
            marginRight: isScrolled ? '0.5rem' : 'auto',
            background: isScrolled ? 'transparent' : 'rgba(30, 30, 30, 0.95)',
            backdropFilter: isScrolled ? 'none' : 'blur(15px)',
            WebkitBackdropFilter: isScrolled ? 'none' : 'blur(15px)',
            transition: 'padding 0.4s cubic-bezier(0.4, 0, 0.2, 1), margin 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-0.5 text-xs font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap uppercase"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Boutons à droite */}
        <div className="c-nav_buttons-wrapper hidden lg:flex items-center gap-2 shrink-0">
          <Link
            href="/contact"
            className="c-sonar-button flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#3448ff] hover:bg-[#4358ff] rounded-full transition-all uppercase"
          >
            <span>Request Access</span>
            <ArrowIcon />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="c-nav_menu-btn lg:hidden p-2 text-white ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "lg:hidden overflow-hidden mx-3",
          isMobileMenuOpen ? "max-h-[500px] mt-4" : "max-h-0 mt-0"
        )}
        style={{
          transition: 'max-height 0.3s ease-out, margin-top 0.3s ease-out',
        }}
      >
        <div 
          className="p-4 rounded-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
          }}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#3448ff] hover:bg-[#4358ff] rounded-full transition-colors uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Access
                <ArrowIcon />
            </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
