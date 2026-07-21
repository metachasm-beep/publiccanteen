"use client";
import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { useReducedMotion } from 'motion/react';
// @ts-ignore
import SplitText from './content/TextAnimations/SplitText/SplitText.jsx';
import { Utensils, Gift, Phone, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, Observer);



// Clean Code: Component extraction

// LiquidModal Context
interface LiquidModalContextType {
  isOpen: boolean;
  onClose: () => void;
}
const LiquidModalContext = createContext<LiquidModalContextType | undefined>(undefined);

export const LiquidModal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
      gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.95, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "expo.out", delay: 0.1 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <LiquidModalContext.Provider value={{ isOpen, onClose }}>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div 
          ref={backdropRef} 
          className="absolute inset-0 bg-zinc-950/90 cursor-pointer" 
          onClick={onClose}
        />
        <div 
          ref={modalRef} 
          className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-brand-text bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          {children}
        </div>
      </div>
    </LiquidModalContext.Provider>
  );
};

LiquidModal.Header = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(LiquidModalContext);
  if (!context) return null;
  return (
    <div className="p-6 border-b border-slate-100">
      {context.isOpen && (
        <div className="text-3xl font-heading font-black text-brand-text">
          <SplitText
            text={children as string}
            delay={100}
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
          />
        </div>
      )}
    </div>
  );
};

LiquidModal.Body = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 text-slate-600 font-sans font-medium leading-relaxed">
    {children}
  </div>
);

LiquidModal.Footer = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-4">
    {children}
  </div>
);

const MagneticButton = ({ children, href, onClick, className }: { children: React.ReactNode, href?: string, onClick?: () => void, className?: string }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const xTo = gsap.quickTo(btn, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(btn, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = btn.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      // limit the magnetic strength
      xTo(x * 0.4);
      yTo(y * 0.4);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const baseClass = className || "inline-flex items-center gap-3 bg-zinc-950 text-zinc-50 px-6 py-4 rounded-2xl font-black text-2xl shadow-xl transition-colors w-full justify-center border border-transparent hover:border-brand-accent/50";
  if (onClick) {
    return (
      <button 
        ref={buttonRef as any} 
        onClick={onClick}
        className={baseClass}
      >
        {children}
      </button>
    );
  }

  return (
    <a 
      ref={buttonRef as any} 
      href={href} 
      className={baseClass}
    >
      {children}
    </a>
  );
};

const HeroFold = ({ onOpenModal }: { onOpenModal: () => void }) => (
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

      {/* 4. Trigger Modal */}
      <div className="mt-4">
        <MagneticButton onClick={onOpenModal}>
          Order Details
        </MagneticButton>
      </div>
    </div>
  </section>
);

const ServicesFold = () => (
  <section className="relative w-full h-full flex flex-col lg:flex-row items-stretch justify-center overflow-y-auto lg:overflow-hidden bg-brand-primary text-brand-light custom-scrollbar">
    
    <div className="absolute inset-0 z-0">
      <img 
        src="/assets/fold-bg-2.png" 
        alt="Services Background" 
        className="w-full h-full object-cover opacity-40 mix-blend-overlay grayscale-[10%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/95 to-brand-primary/80"></div>
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row h-full">
      {/* Left Side: Monthly Plan */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/10">
        <div className="w-full max-w-xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter mb-6 text-balance">Monthly Subscription</h2>
          <p className="text-xl md:text-2xl text-brand-light/80 max-w-[45ch] mb-12 font-medium leading-relaxed text-pretty">
            Save up to 20% with our automated monthly delivery. 60 meals delivered fresh. Skip any day. Zero hidden fees.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-12">
            <div>
              <div className="font-heading text-4xl text-brand-cta">₹5,500</div>
              <div className="text-brand-light/60 text-sm font-bold mt-1 uppercase tracking-wider">Veg Thali</div>
            </div>
            <div>
              <div className="font-heading text-4xl text-brand-cta">₹6,500</div>
              <div className="text-brand-light/60 text-sm font-bold mt-1 uppercase tracking-wider">Non-Veg Thali</div>
            </div>
          </div>
          
          <MagneticButton className="inline-flex items-center gap-3 bg-brand-light text-brand-primary px-8 py-4 rounded-full font-bold font-sans text-xl transition-transform duration-200 active:scale-95 hover:bg-white border border-transparent hover:border-brand-cta/30">
            Choose Monthly Plan
          </MagneticButton>
        </div>
      </div>

      {/* Right Side: Daily Menu & Rules */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-24 overflow-y-auto">
        <div className="w-full max-w-lg mx-auto flex flex-col justify-center h-full">
          
          <div className="mb-16">
            <h3 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-6">Daily Menu</h3>
            <p className="text-lg text-brand-light/70 max-w-[45ch] leading-relaxed text-pretty">
              Order before 9:00 PM today for tomorrow's meals. Delivered hot and fresh.
            </p>
            
            <div className="mt-10 space-y-6">
              <div className="flex justify-between items-baseline border-b border-white/10 pb-3 group cursor-default">
                <span className="font-bold text-xl group-hover:text-brand-gold transition-colors">Breakfast</span>
                <span className="font-heading text-2xl font-bold text-brand-cta">₹100</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-white/10 pb-3 group cursor-default">
                <span className="font-bold text-xl group-hover:text-brand-gold transition-colors">Veg Lunch</span>
                <span className="font-heading text-2xl font-bold text-brand-cta">₹125</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-white/10 pb-3 group cursor-default">
                <span className="font-bold text-xl group-hover:text-brand-gold transition-colors">Fish Lunch</span>
                <span className="font-heading text-2xl font-bold text-brand-cta">₹150</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">How it Works</h3>
            <p className="text-brand-light/70 font-sans leading-relaxed max-w-[45ch] mb-8 text-pretty">
              Zero preservatives. Real, fresh ingredients only. Our kitchen operates with strict hygiene standards to bring you home-style meals daily.
            </p>
            
            <div className="inline-block">
              <MagneticButton href="tel:9395279215" className="inline-flex items-center gap-3 bg-brand-cta text-white px-8 py-4 rounded-full font-bold font-sans text-lg shadow-lg shadow-brand-cta/20 transition-transform duration-200 active:scale-95 hover:bg-brand-red">
                <Phone size={20} />
                Call 9395279215
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);



const OfferFold = () => (
  <section className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
    <div className="absolute inset-0 z-0">
      <img 
        src="/assets/fold-bg-3.png" 
        alt="Grand Launch Offer Background" 
        className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale-[30%]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-5xl mx-auto w-full px-6 flex flex-col items-center justify-center text-center">
      
      <div className="inline-flex items-center gap-2 font-mono text-sm font-bold bg-brand-accent text-white px-4 py-2 rounded-full mb-8">
        <Gift size={16} /> 16th July – 31st July 2026
      </div>

      <h2 className="text-5xl md:text-8xl font-heading font-black text-white mb-6 leading-tight tracking-tighter">
        Get A <span className="text-brand-accent">FREE</span><br />
        <span className="font-serif italic font-normal text-6xl md:text-9xl">Breakfast</span>
      </h2>

      <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
        Join our WhatsApp group today and receive a complimentary morning meal (4 Puri + Chana Masala) on us.
      </p>

      <div className="w-full max-w-sm mx-auto">
        <MagneticButton href="https://wa.me/919395279215">
          <Phone size={24} className="text-brand-accent" />
          Join via WhatsApp
        </MagneticButton>
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const folds = [
    <HeroFold key="hero" onOpenModal={() => setIsModalOpen(true)} />,
    <ServicesFold key="services" />,
    <OfferFold key="offer" />
  ];

  return (
    <main className="w-screen h-screen overflow-hidden bg-brand-bg font-sans text-brand-text">
      <SwipeStack cards={folds} />
      
      <LiquidModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LiquidModal.Header>Subscription Plan</LiquidModal.Header>
        <LiquidModal.Body>
          <div className="space-y-6">
            <p className="text-slate-600">
              Experience the pinnacle of everyday dining. Our Monthly Plan guarantees 60 fresh meals delivered directly to your door, exactly when you need them.
            </p>
            
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-slate-900 font-bold text-lg mb-1">Standard Tier</div>
                <div className="text-sm text-slate-500">Breakfast & Lunch</div>
              </div>
              <div className="text-right">
                <div className="text-brand-cta font-heading font-black text-3xl">₹3600<span className="text-sm font-sans font-medium text-slate-400"> /mo</span></div>
              </div>
            </div>
          </div>
        </LiquidModal.Body>
        <LiquidModal.Footer>
          <button onClick={() => setIsModalOpen(false)} className="px-6 py-2 rounded-xl text-slate-500 font-bold hover:text-brand-text transition-colors">
            Cancel
          </button>
          <MagneticButton href="https://wa.me/919395279215" className="px-6 py-3 bg-brand-primary text-white rounded-xl font-bold shadow-lg hover:bg-blue-600 transition-colors inline-block text-center">
            Proceed via WhatsApp
          </MagneticButton>
        </LiquidModal.Footer>
      </LiquidModal>
    </main>
  );
}

export default App;
