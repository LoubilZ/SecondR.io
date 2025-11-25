"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterCTA() {
  const brokerLogos = [
    { src: "/logo/Anthropic.png", alt: "Anthropic" },
    { src: "/logo/Revolut.png", alt: "Revolut" },
    { src: "/logo/xA2.png", alt: "xAI" },
    { src: "/logo/Stripe3.png", alt: "Stripe" },
  ];

  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-black">

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-degular text-white text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 max-w-3xl leading-tight">
          Watch your portfolio flourish.
        </h2>

        {/* CTA Button with broker logos */}
        <Link 
          href="/contact"
          className="group relative flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Broker logos */}
          <div className="relative flex items-center -space-x-2">
            {brokerLogos.map((logo, index) => (
              <div
                key={index}
                className="relative w-8 h-8 rounded-full bg-white/10 border border-white/20 overflow-hidden"
                style={{ zIndex: brokerLogos.length - index }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain p-1"
                />
              </div>
            ))}
          </div>

          <span className="relative text-white font-medium">
            Get started
          </span>
        </Link>
      </div>
    </section>
  );
}

