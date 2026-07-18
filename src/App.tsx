"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { useReducedMotion } from 'motion/react';
// @ts-ignore
import SplitText from './content/TextAnimations/SplitText/SplitText.jsx';
import { Utensils, Clock, Truck, Gift, Phone, CheckCircle, Sunrise, Coffee } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, Observer);

const SERVICES = [
  {
    id: 1,
    img: "/assets/img1.jpeg",
    alt: "Delicious Fresh Breakfast and Veg Thali at Public Canteen",
    items: ["Fresh Breakfast", "Delicious Veg Thali"]
  },
  {
    id: 2,
    img: "/assets/img2.jpeg",
    alt: "Healthy Tasty Fish Thali and Affordable Meals at Public Canteen",
    items: ["Tasty Fish Thali", "Affordable Prices"]
  }
];

// Clean Code: Component extraction
const HeroFold = () => (
  <section className="relative w-full h-full flex flex-col items-center justify-center p-4 custom-scrollbar overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img 
        src="/assets/fold-bg-1.png" 
        alt="Hero Background showing fresh restaurant food" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-text/85 backdrop-blur-[6px]"></div>
    </div>
    <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-8 min-h-max py-20">
      {/* 1. Badge */}
      <div className="bg-brand-accent p-5 rounded-2xl backdrop-blur-lg shadow-lg">
        <Utensils size={40} className="text-white" aria-hidden="true" />
      </div>
      
      {/* 2. Headline */}
      <h1 className="text-6xl md:text-8xl font-heading font-black text-brand-bg tracking-tighter leading-none">
        <SplitText text="PUBLIC CANTEEN" delay={50} className="inline-block" />
      </h1>
      
      {/* 3. Subtext (concrete, 20 words) */}
      <p className="text-xl md:text-2xl text-brand-bg/90 max-w-xl font-medium leading-relaxed">
        Daily home-style meals, prepared fresh and delivered across your neighborhood.
      </p>
    </div>
  </section>
);

const ServicesFold = () => (
  <section className="relative w-full h-full flex flex-col items-center justify-center bg-brand-bg px-4 overflow-y-auto custom-scrollbar">
    <div className="max-w-6xl mx-auto w-full relative z-10 min-h-max py-20">
      <h2 className="text-5xl font-heading font-bold text-center mb-12 text-brand-text">Our Services</h2>
      
      {/* Bento Diversity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Full-bleed image with overlay */}
        <div className="group relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto lg:h-[400px]">
          <img src={SERVICES[0].img} alt={SERVICES[0].alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-text/90 via-brand-text/40 to-transparent"></div>
          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <ul className="space-y-4">
              {SERVICES[0].items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <CheckCircle className="text-brand-accent flex-shrink-0" size={24} aria-hidden="true" /> 
                  <span className="font-semibold text-lg text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 2: Tinted Background */}
        <div className="group rounded-2xl overflow-hidden shadow-xl bg-brand-accent/5 border border-brand-accent/10 flex flex-col h-auto lg:h-[400px]">
          <div className="p-6 pb-0">
             <img src={SERVICES[1].img} alt={SERVICES[1].alt} loading="lazy" className="w-full h-48 object-cover rounded-2xl shadow-sm" />
          </div>
          <div className="p-8 flex-1 flex flex-col justify-center">
            <ul className="space-y-4">
              {SERVICES[1].items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <CheckCircle className="text-brand-accent flex-shrink-0" size={24} aria-hidden="true" /> 
                  <span className="font-semibold text-lg text-brand-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card 3: Clean White Card */}
        <div className="group rounded-2xl overflow-hidden shadow-xl bg-white border border-zinc-200 flex flex-col h-auto lg:h-[400px]">
          <img src="/assets/img3.jpeg" alt="Delivery person ensuring timely delivery" loading="lazy" className="w-full h-56 object-cover" />
          <div className="p-8 flex-1 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <Truck className="text-brand-accent flex-shrink-0 mt-1" size={32} aria-hidden="true" />
              <div>
                <h3 className="font-heading font-bold text-2xl mb-1 text-brand-text">Timely Delivery</h3>
                <p className="text-zinc-500 font-medium leading-relaxed">Fresh food straight to your doorstep.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const OfferFold = () => (
  <section className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-brand-text overflow-y-auto custom-scrollbar">
    <div className="absolute inset-0 z-0 min-h-max">
      <img 
        src="/assets/fold-bg-3.png" 
        alt="Grand Launch Offer Background" 
        className="w-full h-full object-cover opacity-20 grayscale"
        loading="lazy"
      />
    </div>
    
    <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col gap-8 min-h-max py-20 justify-center">
      
      {/* Grand Launch Offer */}
      <div className="bg-brand-accent rounded-2xl p-10 text-brand-bg shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
        {/* subtle decorative blur */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 blur-3xl rounded-full"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <Gift size={48} className="text-white mb-6 animate-pulse" aria-hidden="true" />
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 text-center">Grand Launch Offer!</h2>
          <p className="font-mono text-sm md:text-base font-bold bg-black/20 text-white px-4 py-2 rounded-lg mb-8">
            16th July – 31st July 2026
          </p>
          
          <div className="text-center mb-10 max-w-lg">
            <p className="text-lg text-white/90 mb-4">Join our WhatsApp group during this period and receive a <strong className="text-white font-bold underline decoration-2 underline-offset-4">FREE Breakfast</strong> the following day!</p>
            <div className="inline-flex items-center gap-2 bg-white text-brand-accent px-4 py-2 rounded-xl font-bold text-sm shadow-md">
              <Utensils size={16} aria-hidden="true" />
              Includes: 4 Puri + Chana Masala
            </div>
          </div>
          
          {/* Tactile CTA */}
          <a 
            href="https://wa.me/919395279215" 
            aria-label="Order on WhatsApp"
            className="inline-flex items-center justify-center min-h-[56px] px-8 gap-3 bg-white text-brand-text rounded-2xl font-bold text-lg shadow-xl hover:bg-zinc-100 active:scale-[0.98] active:-translate-y-[1px] transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-accent"
          >
            <Phone size={24} aria-hidden="true" />
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Schedule */}
      <div className="bg-brand-bg rounded-2xl p-8 shadow-xl border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-8 w-full">
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
            <Clock className="text-brand-accent" size={28} aria-hidden="true" />
            <h2 className="text-3xl font-heading font-bold text-brand-text">Order Timings</h2>
          </div>
          <p className="text-lg text-zinc-600">
            Please place your order before <strong className="text-brand-text font-bold">9:00 PM</strong> for the next day's meals.
          </p>
        </div>
        <div className="w-full md:w-72 bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
            <span className="flex items-center gap-2 text-zinc-500 font-medium">
              <Sunrise size={20} aria-hidden="true" /> Breakfast
            </span>
            <span className="font-bold text-brand-text">7:00 AM</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="flex items-center gap-2 text-zinc-500 font-medium">
              <Coffee size={20} aria-hidden="true" /> Lunch
            </span>
            <span className="font-bold text-brand-text">12:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Observer SwipeStack (Single Fold Visibility)
export function SwipeStack({ cards }: { cards: React.ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = useRef(0);
  const animating = useRef(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".swipe-card");
      
      // Initialize layout: stack them with decreasing z-index so 0 is on top
      gsap.set(sections, { zIndex: (i, _target, targets) => targets.length - i });
      
      // Hide all except the first one and move them down
      if (sections.length > 1) {
        gsap.set(sections.slice(1), { autoAlpha: 0, yPercent: 100 });
      }

      const gotoSection = (index: number, direction: number) => {
        if (animating.current) return;
        animating.current = true;
        
        const currentSection = sections[currentIndex.current];
        const targetSection = sections[index];
        
        // Prepare target section starting position
        gsap.set(targetSection, {
          yPercent: direction === 1 ? 100 : -100,
          autoAlpha: 1
        });
        
        // Animate current section away
        gsap.to(currentSection, {
          yPercent: direction === 1 ? -100 : 100,
          autoAlpha: 0,
          duration: 1.0,
          ease: "power3.inOut"
        });
        
        // Animate target section in
        gsap.to(targetSection, {
          yPercent: 0,
          duration: 1.0,
          ease: "power3.inOut",
          onComplete: () => {
            animating.current = false;
          }
        });
        
        currentIndex.current = index;
      };

      const intentHandler = (direction: number, observer: any) => {
        if (animating.current) return;
        
        const event = observer.event;
        // Check boundary conditions for elements with internal scrolling
        if (event && event.target) {
          const target = event.target as HTMLElement;
          const scrollable = target.closest('.custom-scrollbar');
          
          if (scrollable) {
            // Mobile devices might have fractional scroll values, add a 2px tolerance
            const isAtBottom = Math.abs(scrollable.scrollHeight - scrollable.clientHeight - scrollable.scrollTop) <= 2;
            const isAtTop = scrollable.scrollTop <= 2;
            
            if (direction === 1 && !isAtBottom) {
              return; // We are scrolling down, but haven't reached the bottom of the internal container
            }
            if (direction === -1 && !isAtTop) {
              return; // We are scrolling up, but haven't reached the top of the internal container
            }
          }
        }

        const nextIndex = currentIndex.current + direction;
        if (nextIndex >= 0 && nextIndex < sections.length) {
          gotoSection(nextIndex, direction);
        }
      };

      Observer.create({
        target: window,
        type: "wheel,touch,pointer",
        wheelSpeed: -1,
        // direction 1 = next section (swipe up/scroll down)
        // direction -1 = prev section (swipe down/scroll up)
        onUp: (self) => intentHandler(1, self), 
        onDown: (self) => intentHandler(-1, self),
        tolerance: 10,
        preventDefault: false, // Must be false to allow internal scrolling of .custom-scrollbar
      });
      
    }, containerRef);
    
    return () => ctx.revert();
  }, [reduce]);

  // If reduce motion is on, render them sequentially without absolute stacking
  if (reduce) {
    return (
      <div className="relative w-full bg-brand-bg">
        {cards.map((card, i) => (
          <div key={i} className="min-h-screen w-full">
            {card}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-full bg-brand-bg overflow-hidden">
      {cards.map((card, i) => (
        <div
          key={i}
          className="swipe-card absolute inset-0 w-full h-full bg-brand-bg overflow-hidden"
        >
          {card}
        </div>
      ))}
    </div>
  );
}

function App() {
  const folds = [
    <HeroFold key="hero" />,
    <ServicesFold key="services" />,
    <OfferFold key="offer" />
  ];

  return (
    <main className="w-screen h-screen overflow-hidden bg-brand-bg font-sans text-brand-text">
      <SwipeStack cards={folds} />
    </main>
  );
}

export default App;
