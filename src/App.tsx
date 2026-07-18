"use client";
import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { useReducedMotion } from 'motion/react';
// @ts-ignore
import SplitText from './content/TextAnimations/SplitText/SplitText.jsx';
import { Utensils, Clock, Gift, Phone, ShieldCheck, Sun, Calendar, X } from 'lucide-react';

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
          className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer" 
          onClick={onClose}
        />
        <div 
          ref={modalRef} 
          className="relative w-full max-w-lg bg-zinc-900/60 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
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
    <div className="p-6 border-b border-white/10">
      {context.isOpen && (
        <div className="text-3xl font-heading font-black text-zinc-50">
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
  <div className="p-6 text-zinc-300 font-medium leading-relaxed">
    {children}
  </div>
);

LiquidModal.Footer = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 bg-black/40 border-t border-white/10 flex items-center justify-end gap-4">
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
  <section className="relative w-full h-full flex flex-col items-center justify-center px-4 overflow-y-auto custom-scrollbar">
    <div className="absolute inset-0 z-0">
      <img 
        src="/assets/fold-bg-2.png" 
        alt="Services Background" 
        className="w-full h-full object-cover"
      />
      {/* Lightened background overlay to support light glass theme */}
      <div className="absolute inset-0 bg-zinc-900/40 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
    </div>
    <div className="max-w-7xl mx-auto w-full relative z-10 min-h-max py-24">
      <h2 className="text-5xl md:text-6xl font-heading font-black text-center mb-16 text-zinc-950 tracking-tight drop-shadow-md">Our Menu & Packages</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Card 1: Daily Menu (Spans 7 columns) */}
        <div className="lg:col-span-7 bg-white/60 backdrop-blur-3xl rounded-3xl p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col h-full border border-white/60 relative overflow-hidden">
          {/* subtle interior light glare */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-70"></div>
          
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="p-3 bg-white/60 backdrop-blur-md border border-white/50 rounded-xl text-brand-accent shadow-sm">
              <Sun size={28} />
            </div>
            <h3 className="font-heading font-bold text-3xl text-zinc-950">Daily Menu</h3>
          </div>
          
          <div className="space-y-8 flex-1 relative z-10">
            {/* Breakfast */}
            <div>
              <div className="flex justify-between items-baseline border-b border-zinc-950/10 pb-2 mb-3">
                <h4 className="font-bold text-2xl text-zinc-900">Breakfast</h4>
                <span className="font-serif font-bold text-brand-accent text-3xl drop-shadow-sm">₹100</span>
              </div>
              <p className="text-zinc-700 mb-2 font-medium">4 Puri + Chana Masala</p>
              <div className="inline-flex items-center gap-2 text-sm font-semibold bg-white/50 backdrop-blur-md border border-white/40 text-zinc-800 px-3 py-1.5 rounded-full shadow-sm">
                <Clock size={16} /> Cooked at 6:00 AM. Never frozen.
              </div>
            </div>

            {/* Lunch */}
            <div>
              <div className="flex justify-between items-baseline border-b border-zinc-950/10 pb-2 mb-3">
                <h4 className="font-bold text-2xl text-zinc-900">Lunch</h4>
              </div>
              <div className="space-y-3 mb-3">
                <div className="flex justify-between items-center bg-white/40 backdrop-blur-md p-4 rounded-xl border border-white/60 shadow-sm transition-all duration-300 hover:bg-white/70 hover:border-brand-accent/40 hover:shadow-md cursor-default">
                  <span className="font-semibold text-lg text-zinc-900">Veg Thali</span>
                  <span className="font-serif font-bold text-brand-accent text-2xl drop-shadow-sm">₹125</span>
                </div>
                <div className="flex justify-between items-center bg-white/40 backdrop-blur-md p-4 rounded-xl border border-white/60 shadow-sm transition-all duration-300 hover:bg-white/70 hover:border-brand-accent/40 hover:shadow-md cursor-default">
                  <span className="font-semibold text-lg text-zinc-900">Fish Thali</span>
                  <span className="font-serif font-bold text-brand-accent text-2xl drop-shadow-sm">₹150</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold bg-white/50 backdrop-blur-md border border-white/40 text-zinc-800 px-3 py-1.5 rounded-full shadow-sm">
                <Clock size={16} /> At your door before 12:30 PM. Period.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Stack (Spans 5 columns) */}
        <div className="lg:col-span-5 flex flex-col gap-8 h-full">
          
          {/* Card 2: Monthly Subscriptions */}
          <div className="bg-white/60 backdrop-blur-3xl rounded-3xl p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col border border-white/60 flex-1 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-70"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-white/60 backdrop-blur-md border border-white/50 rounded-xl text-brand-accent shadow-sm">
                <Calendar size={28} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-zinc-950">Monthly Plans</h3>
            </div>

            <div className="space-y-3 flex-1 relative z-10">
              <div className="bg-white/40 backdrop-blur-md p-3 rounded-xl border border-white/60 flex justify-between items-center shadow-sm transition-all duration-300 hover:bg-white/70 hover:shadow-md cursor-default">
                <div className="flex flex-col">
                  <span className="font-bold text-zinc-900">Veg Thali</span>
                  <span className="text-zinc-600 text-xs font-semibold uppercase tracking-wider">Lunch & Dinner</span>
                </div>
                <span className="font-serif font-bold text-brand-accent text-xl drop-shadow-sm">₹5,500</span>
              </div>
              
              <div className="bg-white/40 backdrop-blur-md p-3 rounded-xl border border-white/60 flex justify-between items-center shadow-sm transition-all duration-300 hover:bg-white/70 hover:shadow-md cursor-default">
                <div className="flex flex-col">
                  <span className="font-bold text-zinc-900">Non-Veg Thali</span>
                  <span className="text-zinc-600 text-xs font-semibold uppercase tracking-wider">Lunch & Dinner</span>
                </div>
                <span className="font-serif font-bold text-brand-accent text-xl drop-shadow-sm">₹6,500</span>
              </div>

              <div className="bg-white/40 backdrop-blur-md p-3 rounded-xl border border-white/60 flex justify-between items-center shadow-sm transition-all duration-300 hover:bg-white/70 hover:shadow-md cursor-default">
                <div className="flex flex-col">
                  <span className="font-bold text-zinc-900">Breakfast + Meal</span>
                  <span className="text-zinc-600 text-xs font-semibold uppercase tracking-wider">Veg Option</span>
                </div>
                <span className="font-serif font-bold text-brand-accent text-xl drop-shadow-sm">₹4,750</span>
              </div>

              <div className="bg-white/40 backdrop-blur-md p-3 rounded-xl border border-white/60 flex justify-between items-center shadow-sm transition-all duration-300 hover:bg-white/70 hover:shadow-md cursor-default">
                <div className="flex flex-col">
                  <span className="font-bold text-zinc-900">Breakfast + Meal</span>
                  <span className="text-zinc-600 text-xs font-semibold uppercase tracking-wider">Non-Veg Option</span>
                </div>
                <span className="font-serif font-bold text-brand-accent text-xl drop-shadow-sm">₹5,750</span>
              </div>
            </div>
          </div>

          {/* Card 3: Important Rules & Contact */}
          <div className="bg-brand-accent/90 backdrop-blur-3xl rounded-3xl p-8 shadow-[0_30px_60px_-15px_rgba(225,29,72,0.4)] flex flex-col text-white relative overflow-hidden border border-white/20">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-40"></div>
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
            
            <div className="relative z-10 flex-1 flex flex-col justify-between space-y-6">
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 font-bold text-lg text-white">
                  <Clock size={20} /> Strict Timing
                </div>
                <p className="font-medium text-white/90 leading-relaxed">
                  Order <strong className="text-white font-black drop-shadow-sm">before 9:00 PM today</strong> for tomorrow's meals.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 font-semibold text-white/95">
                  <ShieldCheck className="text-white flex-shrink-0" size={20} /> 
                  Zero preservatives. Real ingredients.
                </div>
              </div>

              <div className="pt-4 text-center">
                <MagneticButton href="tel:9395279215" className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md text-brand-text px-6 py-4 rounded-2xl font-black text-2xl shadow-xl transition-all duration-300 w-full justify-center border border-white hover:bg-white hover:shadow-2xl">
                  <Phone size={24} className="text-brand-accent" />
                  Call 9395279215
                </MagneticButton>
              </div>

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
            <p>
              Experience the pinnacle of everyday dining. Our Monthly Plan guarantees 60 fresh meals delivered directly to your door, exactly when you need them.
            </p>
            
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-zinc-50 font-bold mb-1">Standard Tier</div>
                <div className="text-sm text-zinc-400">Breakfast & Lunch</div>
              </div>
              <div className="text-right">
                <div className="text-brand-accent font-serif font-bold text-xl italic">₹3600<span className="text-sm not-italic text-zinc-500">/mo</span></div>
              </div>
            </div>
          </div>
        </LiquidModal.Body>
        <LiquidModal.Footer>
          <button onClick={() => setIsModalOpen(false)} className="px-6 py-2 rounded-xl text-zinc-400 font-bold hover:text-white transition-colors">
            Cancel
          </button>
          <MagneticButton href="https://wa.me/919395279215" className="px-6 py-3 bg-brand-accent text-white rounded-xl font-bold shadow-lg hover:bg-brand-accent/90 transition-colors">
            Proceed via WhatsApp
          </MagneticButton>
        </LiquidModal.Footer>
      </LiquidModal>
    </main>
  );
}

export default App;
