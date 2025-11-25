"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import portfolioData from "@/data/portfolio.json";

interface BrokerItem {
  logoImage: string;
  alt: string;
  brandColor: string;
  colors: string[];
}

interface BrokerCarouselProps {
  items: BrokerItem[];
  title: string;
  subtitle: string;
}

function BrokerCarousel({ items, title, subtitle }: BrokerCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [items.length]);

  return (
    <div className="grid justify-center overflow-x-hidden overflow-y-auto bg-black py-10">
      <h1 className="font-degular" style={{color:'#fff',textAlign:'center',fontSize:'4.8rem',marginBottom:'16px',fontWeight:'600',letterSpacing:'-0.012em',lineHeight:'0.9'}}>
        {title}
      </h1>
      <h2 style={{color:'rgba(255,255,255,0.6)',textAlign:'center',fontSize:'1.25rem',marginBottom:'42px',fontWeight:'400',maxWidth:'600px',margin:'0 auto 42px'}}>
        {subtitle}
      </h2>
      <div className="relative w-[90vw] max-w-[1412px] h-[444px] rounded-2xl overflow-hidden">
        {/* Carousel Items */}
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          const zIndex = isActive ? 1 : 0;
          const opacity = isActive ? 1 : 0;

          return (
            <div
              key={index}
              className="absolute left-0 top-0 right-0 bottom-0 transition-opacity duration-1000"
              style={{ zIndex, opacity }}
            >
              {/* Background Image - Hardcoded */}
              <div className="relative w-full h-full">
                <Image
                  alt="Background"
                  src="/bon.jpg"
                  fill
                  className="block object-cover overflow-clip align-middle"
                  priority={index === 0}
                  sizes="(max-width: 1412px) 100vw, 1412px"
                />
              </div>

              {/* Glow Effect Container */}
              <div className="items-center grid justify-items-center absolute left-0 top-0 right-0 bottom-0 z-[1000]">
                {/* Animated Blob SVG Background */}
                <svg 
                  width={isMobile ? "200" : "320"}
                  height={isMobile ? "200" : "320"}
                  viewBox="0 0 320 320" 
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 0,
                    opacity: isMobile ? 0.4 : 0.6
                  }}
                >
                  <defs>
                    <radialGradient id={`feyBlob-${index}`} cx="50%" cy="50%" r="55%">
                      <stop offset="0%" stopColor={item.colors[0]} />
                      <stop offset="70%" stopColor={item.colors[3]} />
                      <stop offset="100%" stopColor={item.colors[6]} />
                    </radialGradient>
                    <filter id={`blur-${index}`} x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation={isMobile ? "16" : "24"} />
                    </filter>
                  </defs>
                  <ellipse 
                    cx="160" 
                    cy="160" 
                    rx="120" 
                    ry="110" 
                    fill={`url(#feyBlob-${index})`} 
                    filter={`url(#blur-${index})`}
                  >
                    <animateTransform 
                      attributeName="transform" 
                      type="rotate" 
                      from="0 160 160" 
                      to="360 160 160" 
                      dur="10s" 
                      repeatCount="indefinite"
                    />
                  </ellipse>
                </svg>

                {/* Wave Container - same size as circle */}
                <div style={{ 
                  position: 'relative', 
                  width: '182px', 
                  height: '182px', 
                  zIndex: 10,
                  display: 'grid',
                  placeItems: 'center'
                }}>
                  {/* Center Circle - BEHIND the waves */}
                  <div 
                    style={{ 
                      position: 'absolute',
                      width: '182px',
                      height: '182px',
                      background: '#000',
                      borderRadius: '50%',
                      zIndex: 1,
                      display: 'grid',
                      placeItems: 'center'
                    }} 
                  >
                    {/* Inner colored circle with logo */}
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: item.brandColor,
                        display: 'grid',
                        placeItems: 'center',
                        zIndex: 100
                      }}
                    >
                      <Image
                        alt={item.alt}
                        src={item.logoImage}
                        width={36}
                        height={36}
                        style={{ 
                          color: "transparent",
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Animated Waves - ON TOP of the circle */}
                  {item.colors.map((color, colorIndex) => {
                    const boxShadowSpecs = isMobile ? [
                      `0px 2px 8px 4px ${color}`,
                      `0px 8px 24px 4px ${color}`,
                      `0px 3px 10px 2px ${color}`,
                      `0px 2px 8px 1px ${color}`,
                      `1px 5px 10px 3px ${color}`,
                      `1px 3px 8px 2px ${color}`,
                      `1px 3px 12px 1px ${color}`
                    ] : [
                      `0px 5px 18px 10px ${color}`,
                      `0px 18px 60px 10px ${color}`,
                      `0px 8px 20px 4px ${color}`,
                      `0px 4px 16px 2px ${color}`,
                      `2px 12px 22px 8px ${color}`,
                      `2px 7px 18px 6px ${color}`,
                      `2px 6px 29px 2px ${color}`
                    ];
                    
                    return (
                      <span
                        key={colorIndex}
                        className={`wave wave-${colorIndex}`}
                        style={{
                          boxShadow: boxShadowSpecs[colorIndex],
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          zIndex: 10
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Radial Gradient Overlay */}
              <div 
                className="pointer-events-none absolute left-0 top-0 right-0 bottom-0 z-[2] opacity-[0.95]"
                style={{
                  backgroundImage: "radial-gradient(30% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50.8%, rgb(0, 0, 0) 100%)"
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="bg-black w-full">
      <BrokerCarousel 
        items={portfolioData.items} 
        title={portfolioData.section.title}
        subtitle={portfolioData.section.subtitle}
      />
    </section>
  );
}
