"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./ServicesSection.module.css";
import servicesData from "@/data/services.json";

// Types
interface ServiceData {
  id: string;
  iconId: string;
  title: string;
  description: string;
}

interface IconProps {
  className?: string;
}

// Icon Components - Séparés pour une meilleure réutilisabilité
const ServiceIcons: Record<string, React.FC<IconProps>> = {
  home: () => (
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke="#E6E6E6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" d="M11.0311 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V9.6943C20.25 9.25388 20.0564 8.83571 19.7207 8.55071L12.9689 2.81986C12.4096 2.34663 11.5904 2.34663 11.0311 2.81986L4.28109 8.53139C3.94426 8.8164 3.75 9.23525 3.75 9.67647V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H12V16.75"/>
      </svg>
    ),
  analysis: () => (
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.2499 11.9998C21.2499 17.1084 17.1085 21.2498 11.9999 21.2498C6.89124 21.2498 2.74988 17.1084 2.74988 11.9998C2.74988 6.89112 6.89124 2.74976 11.9999 2.74976C17.1085 2.74976 21.2499 6.89112 21.2499 11.9998Z" stroke="#E6E6E6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.2516 10.2515L15.2499 8.74976L13.7482 13.7481L8.74988 15.2498L10.2516 10.2515Z" stroke="#E6E6E6" strokeWidth="1" strokeLinejoin="round"/>
      </svg>
    ),
  calendar: () => (
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.74999 1.75V3.75M16.25 1.75V3.75M4.78845 3.75H19.2115C20.04 3.75 20.7115 4.42157 20.7115 5.25V19.0577C20.7115 19.8861 20.04 20.5577 19.2115 20.5577H4.78845C3.96002 20.5577 3.28845 19.8861 3.28845 19.0577V5.25C3.28845 4.42157 3.96003 3.75 4.78845 3.75Z" stroke="#E6E6E6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <text textAnchor="middle" fill="#E6E6E6" style={{fontFamily: 'inherit', fontSize: '12px', fontWeight: 'bold'}}><tspan x="12" y="15.75">25</tspan></text>
      </svg>
    ),
  bookmark: () => (
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.25 7.75H8.75M19.25 20.25V5.25C19.25 4.42157 18.5784 3.75 17.75 3.75H6.25C5.42157 3.75 4.75 4.42157 4.75 5.25V20.25L11.3479 17.0648C11.7599 16.8659 12.2401 16.8659 12.6521 17.0648L19.25 20.25Z" stroke="#E6E6E6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  chart: () => (
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <mask id="path-1-inside-1" fill="white">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V6.9393L14.5304 13.4089C14.2375 13.7018 13.7626 13.7018 13.4697 13.4089L10.591 10.5303C9.71235 9.65157 8.28773 9.65157 7.40905 10.5303L3 14.9393V6ZM3 17.0606V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V9.06062L15.591 14.4696C14.7123 15.3483 13.2877 15.3483 12.409 14.4696L9.53037 11.5909C9.23747 11.298 8.7626 11.298 8.46971 11.5909L3 17.0606Z"/>
          </mask>
          <path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V6.9393L14.5304 13.4089C14.2375 13.7018 13.7626 13.7018 13.4697 13.4089L10.591 10.5303C9.71235 9.65157 8.28773 9.65157 7.40905 10.5303L3 14.9393V6ZM3 17.0606V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V9.06062L15.591 14.4696C14.7123 15.3483 13.2877 15.3483 12.409 14.4696L9.53037 11.5909C9.23747 11.298 8.7626 11.298 8.46971 11.5909L3 17.0606Z" fill="#E1E0DC" fillOpacity="0.8"/>
        <path d="M21 6.9393L21.1768 7.11608L21.25 7.04285V6.9393H21ZM14.5304 13.4089L14.7071 13.5857H14.7071L14.5304 13.4089ZM13.4697 13.4089L13.6465 13.2322L13.4697 13.4089ZM10.591 10.5303L10.4143 10.707L10.591 10.5303ZM7.40905 10.5303L7.23227 10.3535H7.23227L7.40905 10.5303ZM3 14.9393H2.75V15.5429L3.17678 15.1161L3 14.9393ZM3 17.0606L2.82322 16.8838L2.75 16.9571V17.0606H3ZM21 9.06062H21.25V8.45707L20.8232 8.88384L21 9.06062ZM15.591 14.4696L15.4143 14.2928L15.591 14.4696ZM12.409 14.4696L12.2323 14.6464L12.409 14.4696ZM9.53037 11.5909L9.70715 11.4141H9.70715L9.53037 11.5909ZM8.46971 11.5909L8.29293 11.4141H8.29293L8.46971 11.5909Z" fill="url(#paint0_linear_chart)" fillOpacity="0.8" mask="url(#path-1-inside-1)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_chart" x1="8.5" y1="7.5" x2="20.6938" y2="15.1776" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  telescope: () => (
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.13175 10.9205L2.93434 12.3441C2.17753 12.6811 1.83717 13.5677 2.17412 14.3245L2.58086 15.2381C2.91781 15.9949 3.80448 16.3353 4.56128 15.9983L7.75869 14.5747M11.6604 7.36293L7.54943 9.19324C6.54036 9.64251 6.08655 10.8247 6.53582 11.8338L7.34929 13.6609C7.79856 14.67 8.98078 15.1238 9.98985 14.6745L14.1008 12.8442M18.5619 3.19545L13.0806 5.63587C11.8193 6.19746 11.252 7.67523 11.8136 8.93658L13.0338 11.6772C13.5954 12.9386 15.0732 13.5058 16.3345 12.9442L21.8158 10.5038C22.068 10.3915 22.1815 10.0959 22.0692 9.84367L19.222 3.44886C19.1097 3.19659 18.8142 3.08313 18.5619 3.19545Z" stroke="#E6E6E6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.25 21.25L10.5 14.5L13.75 21.25" stroke="#E6E6E6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  settings: () => (
      <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 2.7698C11.4917 2.29345 12.5083 2.29345 13.3333 2.7698L19.3269 6.2302C20.152 6.70655 20.6603 7.58689 20.6603 8.5396V15.4604C20.6603 16.4131 20.152 17.2934 19.3269 17.7698L13.3333 21.2302C12.5083 21.7066 11.4917 21.7066 10.6667 21.2302L4.67308 17.7698C3.84801 17.2934 3.33975 16.4131 3.33975 15.4604V8.5396C3.33975 7.58689 3.84801 6.70655 4.67308 6.2302L10.6667 2.7698Z" stroke="#E6E6E6" strokeWidth="1"/>
        <circle cx="12" cy="12.0001" r="3.33333" stroke="#E6E6E6" strokeWidth="1"/>
      </svg>
    ),
  search: () => (
    <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 17L21 21M19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11Z" stroke="#E6E6E6" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  ),
};

// Helper pour récupérer l'icône
const getIcon = (iconId: string): React.ReactNode => {
  const IconComponent = ServiceIcons[iconId];
  return IconComponent ? <IconComponent /> : null;
};

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [linePath, setLinePath] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const dockBarRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);

  // Data from JSON
  const { sectionTitle, backgroundImage, services } = servicesData as {
    sectionTitle: string;
    backgroundImage: string;
    services: ServiceData[];
  };

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate the path based on active button and description position
  const calculatePath = useCallback(() => {
    if (!buttonRefs.current[activeIndex] || !descriptionRef.current || !svgContainerRef.current) {
      setLinePath("");
      return;
    }

    const button = buttonRefs.current[activeIndex];
    const description = descriptionRef.current;
    const svgContainer = svgContainerRef.current;

    const buttonRect = button!.getBoundingClientRect();
    const descRect = description.getBoundingClientRect();
    const containerRect = svgContainer.getBoundingClientRect();

    // Find the title element to calculate its height
    const titleElement = description.querySelector('h3');

    // Start point: bottom center of button (with 8px gap)
    const startX = buttonRect.left + buttonRect.width / 2 - containerRect.left;
    const startY = buttonRect.bottom - containerRect.top + 8;

    if (isMobile) {
      // Mobile: vertical line down to text, then horizontal to center, then down to title
      const centerX = descRect.left + descRect.width / 2 - containerRect.left;
      // Calculate middle of title for proper alignment
      const titleHeight = titleElement ? titleElement.getBoundingClientRect().height : 0;
      const endY = descRect.top + (titleHeight / 2) - containerRect.top;
      
      // Path: down from icon, horizontal to center, then down to text
      const midY1 = startY + 50;
      const path = `M ${startX} ${startY} V ${midY1} H ${centerX} V ${endY}`;
      setLinePath(path);
    } else {
      // Desktop: horizontal arrival to text side
      const titleHeight = titleElement ? titleElement.getBoundingClientRect().height : 0;
      const endX = descRect.left - containerRect.left - 12;
      const endY = descRect.top + (titleHeight / 2) - containerRect.top;
      const midY = endY;
      const path = `M ${startX} ${startY} V ${midY} H ${endX}`;
      setLinePath(path);
    }
  }, [activeIndex, isMobile]);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Recalculate path when activeIndex changes or on resize
  useEffect(() => {
    calculatePath();
    
    const handleResize = () => calculatePath();
    window.addEventListener('resize', handleResize);
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(calculatePath, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [activeIndex, calculatePath]);

  // Handle interaction based on device
  const handleInteraction = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleInteraction(index);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % services.length;
      handleInteraction(nextIndex);
      buttonRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + services.length) % services.length;
      handleInteraction(prevIndex);
      buttonRefs.current[prevIndex]?.focus();
    }
  }, [handleInteraction, services.length]);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Title */}
      <h2 className={`font-degular ${styles.title} ${isVisible ? styles.titleVisible : ''}`}>
        {sectionTitle}
      </h2>

      {/* Main Container */}
      <div className={styles.mainContainer}>
        {/* Stone Image - Feature Card with Fey Effect */}
        <div className={styles.stoneWrapper}>
          {/* Blur Layers - Aura Effect */}
          <div className={styles.blurLayer1} />
          <div className={styles.blurLayer2} />
          <div className={styles.blurLayer3} />
          <div className={styles.blurLayer4} />
          <div className={styles.blurLayer5} />
          
          {/* Main Image */}
          <Image
            src={backgroundImage}
            alt="Abstract rock texture"
            width={1440}
            height={820}
            className={styles.stoneImage}
            priority
          />
          
          {/* Gradient Overlay */}
          <div className={styles.gradientOverlay} />
        </div>

        {/* Dock + Line + Description Container */}
        <div className={styles.dockSection} ref={svgContainerRef}>
          {/* Dock Bar */}
          <div className={styles.dockContainer}>
            <div className={styles.dockBar} ref={dockBarRef} role="tablist" aria-label="Services">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => { buttonRefs.current[index] = el; }}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-controls={`service-panel-${service.id}`}
                  aria-label={service.title}
                  tabIndex={index === activeIndex ? 0 : -1}
                  className={`${styles.dockButton} ${index === activeIndex ? styles.active : ''}`}
                  onMouseEnter={() => !isMobile && handleInteraction(index)}
                  onClick={() => handleInteraction(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                >
                  {getIcon(service.iconId)}
                </div>
              ))}
            </div>

            {/* Search Button (separate) - hidden on mobile */}
            <div className={styles.searchButton} aria-hidden="true">
              {getIcon('search')}
            </div>
          </div>

          {/* Connector Line SVG */}
            <svg 
              className={styles.connectorLine} 
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              overflow: 'visible'
            }}
            >
              <path
              d={linePath}
                stroke="#828282"
                strokeWidth="1"
              strokeDasharray="2, 2"
                fill="none"
              style={{ transition: 'd 0.15s ease' }}
              />
            </svg>

          {/* Description Area */}
          <div className={styles.lineDescriptionArea} role="tabpanel">
            <div className={styles.descriptionWrapper} ref={descriptionRef}>
              {services.map((service, index) => (
                <div
                  key={`desc-${service.id}`}
                  id={`service-panel-${service.id}`}
                  className={`${styles.descriptionBlock} ${index === activeIndex ? styles.descriptionVisible : ''}`}
                  aria-hidden={index !== activeIndex}
                >
                  <h3 className={styles.descriptionTitle} dangerouslySetInnerHTML={{ __html: service.title }} />
                  <p className={styles.descriptionText}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator - Mobile only */}
          <div className={styles.dotsIndicator} role="tablist" aria-label="Service navigation">
            {services.map((service, index) => (
              <button
                key={`dot-${service.id}`}
                type="button"
                className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to ${service.title}`}
                aria-selected={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
