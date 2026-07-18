"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { useReducedMotion } from 'motion/react';
// @ts-ignore
import SplitText from './content/TextAnimations/SplitText/SplitText.jsx';
import { Utensils, Clock, Truck, Gift, Phone, CheckCircle, Sunrise, Coffee, Calendar, ShieldCheck, Sun, Info } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, Observer);



// Clean Code: Component extraction
const HeroFold = () => (
  <section className="relative w-full h-full flex flex-col items-center justify-center p-4 custom-scrollbar overflow-y-auto">
    <div className="absolute inset-0 z-0">
      <img 
        src="/assets/fold-bg-1.png" 
        alt="Hero Background showing fresh restaurant food" 
        className="w-full h-full object-cover"
      />
      {/* Light overlay for text contrast, no heavy blur or opacity */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
    <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-8 min-h-max py-20">
      {/* 1. Badge */}
      <div className="bg-brand-accent p-5 rounded-2xl backdrop-blur-lg shadow-lg">
        <Utensils size={40} className="text-white" aria-hidden="true" />
      </div>
      
      {/* 2. Headline */}
      <h1 className="text-6xl md:text-8xl font-heading font-black text-white tracking-tighter leading-none">
        <SplitText text="PUBLIC CANTEEN" delay={50} className="inline-block" />
      </h1>
      
      {/* 3. Subtext (concrete, 20 words) */}
      <p className="text-xl md:text-2xl text-white max-w-xl font-medium leading-relaxed">
        Daily home-style meals, prepared fresh and delivered across your neighborhood.
      </p>
    </div>
  </section>
);

const ServicesFold = () => (
  <section className="relative w-full h-full flex flex-col items-center justify-center px-4 overflow-y-auto custom-scrollbar">
    <div className="absolute inset-0 z-0">
      <img 
        src="/assets/fold-bg-2.png" 
        alt="Services Background" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
    <div className="max-w-7xl mx-auto w-full relative z-10 min-h-max py-24">
      <h2 className="text-5xl md:text-6xl font-heading font-black text-center mb-16 text-white tracking-tight">Our Menu & Packages</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Card 1: Daily Menu */}
        <div className="bg-brand-bg/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl flex flex-col h-full border border-white/10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-brand-accent/10 rounded-xl text-brand-accent">
              <Sun size={28} />
            </div>
            <h3 className="font-heading font-bold text-3xl text-brand-text">Daily Menu</h3>
          </div>
          
          <div className="space-y-8 flex-1">
            {/* Breakfast */}
            <div>
              <div className="flex justify-between items-baseline border-b border-zinc-200 pb-2 mb-3">
                <h4 className="font-bold text-xl text-brand-text">Breakfast</h4>
                <span className="font-bold text-brand-accent text-xl">₹100</span>
              </div>
              <p className="text-zinc-600 mb-2">4 Puri + Chana Masala</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-full">
                <Clock size={14} /> Delivery: 7:00 AM - 7:30 AM
              </div>
            </div>

            {/* Lunch */}
            <div>
              <div className="flex justify-between items-baseline border-b border-zinc-200 pb-2 mb-3">
                <h4 className="font-bold text-xl text-brand-text">Lunch</h4>
              </div>
              <div className="space-y-3 mb-3">
                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-zinc-100 shadow-sm">
                  <span className="font-semibold text-zinc-800">Veg Thali</span>
                  <span className="font-bold text-brand-accent">₹125</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-zinc-100 shadow-sm">
                  <span className="font-semibold text-zinc-800">Fish Thali</span>
                  <span className="font-bold text-brand-accent">₹150</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold bg-zinc-100 text-zinc-600 px-3 py-1.5 rounded-full">
                <Clock size={14} /> Delivery: 12:00 PM - 12:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Monthly Subscriptions */}
        <div className="bg-brand-accent rounded-3xl p-8 shadow-2xl flex flex-col h-full text-white relative overflow-hidden">
          {/* subtle decorative blur */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 blur-3xl rounded-full"></div>
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-white/20 rounded-xl text-white backdrop-blur-sm">
                <Calendar size={28} />
              </div>
              <h3 className="font-heading font-bold text-3xl">Monthly Plans</h3>
            </div>

            <div className="space-y-4 flex-1">
              <div className="bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-lg">Veg Thali</span>
                  <span className="font-bold text-xl">₹5,500</span>
                </div>
                <span className="text-white/80 text-sm font-medium">Lunch & Dinner (2x Daily)</span>
              </div>
              
              <div className="bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-lg">Non-Veg Thali</span>
                  <span className="font-bold text-xl">₹6,500</span>
                </div>
                <span className="text-white/80 text-sm font-medium">Lunch & Dinner (2x Daily)</span>
              </div>

              <div className="bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-lg">Breakfast + 1 Meal</span>
                  <span className="font-bold text-xl">₹4,750</span>
                </div>
                <span className="text-white/80 text-sm font-medium">Veg Option</span>
              </div>

              <div className="bg-black/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-lg">Breakfast + 1 Meal</span>
                  <span className="font-bold text-xl">₹5,750</span>
                </div>
                <span className="text-white/80 text-sm font-medium">Non-Veg Option</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Important Rules & Contact */}
        <div className="bg-brand-bg/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl flex flex-col h-full border border-white/10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-zinc-900 rounded-xl text-white">
              <Info size={28} />
            </div>
            <h3 className="font-heading font-bold text-3xl text-brand-text">How to Order</h3>
          </div>

          <div className="flex-1 flex flex-col justify-between space-y-6">
            
            <div className="bg-brand-accent/10 border border-brand-accent/20 p-5 rounded-2xl text-brand-accent">
              <div className="flex items-center gap-2 mb-2 font-bold text-lg">
                <Clock size={20} /> Strict Order Timing
              </div>
              <p className="font-medium text-brand-text leading-relaxed">
                You must place your order <strong className="text-brand-accent font-black">before 9:00 PM today</strong> for tomorrow's breakfast and lunch.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-700 font-medium">
                <ShieldCheck className="text-brand-accent flex-shrink-0" size={20} /> 
                Fresh & Hygienic Home-Style Food
              </li>
              <li className="flex items-center gap-3 text-zinc-700 font-medium">
                <CheckCircle className="text-brand-accent flex-shrink-0" size={20} /> 
                High Nutritional Value
              </li>
              <li className="flex items-center gap-3 text-zinc-700 font-medium">
                <Truck className="text-brand-accent flex-shrink-0" size={20} /> 
                Always On-Time Delivery
              </li>
            </ul>

            <div className="pt-6 border-t border-zinc-200 text-center">
              <p className="text-zinc-500 font-medium mb-3 text-sm uppercase tracking-widest">Call for orders & enquiries</p>
              <a href="tel:9395279215" className="inline-flex items-center gap-3 bg-zinc-900 text-white px-6 py-4 rounded-2xl font-black text-2xl shadow-xl hover:bg-zinc-800 active:scale-[0.98] transition-all w-full justify-center">
                <Phone size={24} className="text-brand-accent" />
                9395279215
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
);

const OfferFold = () => (
  <section className="relative w-full h-full flex flex-col items-center justify-center p-4 overflow-y-auto custom-scrollbar">
    <div className="absolute inset-0 z-0">
      <img 
        src="/assets/fold-bg-3.png" 
        alt="Grand Launch Offer Background" 
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/40"></div>
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
