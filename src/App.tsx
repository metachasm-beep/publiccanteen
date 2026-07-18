import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
// @ts-ignore
import SplitText from './content/TextAnimations/SplitText/SplitText.jsx';
import { Utensils, Clock, Truck, Gift, Phone, CheckCircle, Sunrise, Coffee } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// React Best Practices: Extract static data
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
  <section className="fold-1 absolute inset-0 z-30 w-full h-full flex items-center justify-center origin-center transform-gpu">
    <div className="absolute inset-0 z-0">
      <img 
        src="/assets/fold-bg-1.png" 
        alt="Hero Background showing fresh restaurant food" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-brown/85 backdrop-blur-[6px]"></div>
    </div>
    <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-10">
      <div className="inline-block mb-6 bg-brand-red p-5 rounded-full backdrop-blur-lg border border-brand-red/30 shadow-lg">
        <Utensils size={48} className="text-brand-light mx-auto" aria-hidden="true" />
      </div>
      <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-brand-light drop-shadow-2xl">
        <SplitText text="PUBLIC CANTEEN" delay={50} className="inline-block" />
      </h1>
      <p className="text-xl md:text-3xl font-medium text-brand-gold mb-8 tracking-wide drop-shadow-lg">
        Fresh Food &bull; Healthy Living &bull; Happy Customers
      </p>
      <p className="text-lg md:text-xl text-brand-light max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light bg-black/30 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
        At Public Canteen, we serve fresh, hygienic, nutritious, and home-style meals prepared with care and quality ingredients.
      </p>
      <div className="mt-12 animate-bounce" aria-hidden="true">
        <p className="text-brand-light/60 text-sm font-semibold tracking-widest uppercase">Scroll Down to Enter</p>
      </div>
    </div>
  </section>
);

const ServicesFold = () => (
  <section className="fold-2 absolute inset-0 z-20 w-full h-full flex items-center justify-center origin-center transform-gpu">
    <div className="absolute inset-0 z-0">
      <img 
        src="/assets/fold-bg-2.png" 
        alt="Services Background showing dining experience" 
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-brand-brown/80 backdrop-blur-md"></div>
    </div>
    <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
      <h2 className="text-5xl font-heading font-bold text-center mb-16 text-brand-light drop-shadow-lg">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {SERVICES.map((service) => (
          <div key={service.id} className="group cursor-pointer bg-brand-light/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/30 hover:bg-white transition-colors duration-300">
            <img src={service.img} alt={service.alt} loading="lazy" className="w-full h-56 object-cover" />
            <div className="p-8">
              <ul className="space-y-6">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <CheckCircle className="text-brand-red flex-shrink-0" size={28} aria-hidden="true" /> 
                    <span className="font-semibold text-xl text-brand-brown">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
        <div className="group cursor-pointer bg-brand-light/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/30 hover:bg-white transition-colors duration-300">
          <img src="/assets/img3.jpeg" alt="Delivery person ensuring timely delivery of Public Canteen meals" loading="lazy" className="w-full h-56 object-cover" />
          <div className="p-8 h-full flex flex-col justify-center">
            <div className="flex items-center gap-5 bg-brand-red/5 group-hover:bg-brand-red/10 transition-colors duration-300 p-6 rounded-2xl border border-brand-red/20">
              <Truck className="text-brand-red" size={40} aria-hidden="true" />
              <div>
                <h3 className="font-heading font-bold text-2xl mb-1 text-brand-brown">Timely Delivery</h3>
                <p className="text-brand-brown/70 font-medium">Fresh food at your doorstep</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OfferFold = () => (
  <section className="fold-3 absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-center origin-center transform-gpu">
    <div className="absolute inset-0 z-0">
      <img 
        src="/assets/fold-bg-3.png" 
        alt="Grand Launch Offer Background" 
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-brand-brown/85 backdrop-blur-sm"></div>
    </div>
    <div className="relative z-10 max-w-5xl mx-auto px-4 w-full flex flex-col gap-12 pt-10 h-full overflow-y-auto custom-scrollbar items-center justify-center">
      
      <div className="bg-brand-red rounded-[2.5rem] p-10 text-brand-light shadow-2xl border border-white/20 backdrop-blur-xl w-full max-w-3xl cursor-pointer hover:bg-brand-red/90 transition-colors duration-300">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 text-center">
          <Gift size={40} className="animate-pulse flex-shrink-0 text-brand-gold" aria-hidden="true" />
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-light">Grand Launch Offer!</h2>
        </div>
        <p className="text-center text-lg mb-6 font-bold bg-white/20 inline-block px-6 py-2 rounded-full mx-auto table border border-white/30 tracking-wide text-brand-light">
          16th July – 31st July 2026
        </p>
        <div className="text-center mb-8 text-lg font-medium">
          <p className="mb-4 text-brand-light">Join our WhatsApp group during this period and receive a <strong className="text-brand-gold font-bold">FREE Breakfast</strong> the following day!</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-brand-light text-brand-brown px-6 py-3 rounded-2xl w-fit mx-auto shadow-xl">
            <Utensils className="text-brand-red flex-shrink-0" size={24} aria-hidden="true" />
            <span className="font-bold text-sm sm:text-base">Includes: 4 Puri + Chana Masala</span>
          </div>
        </div>
        <div className="text-center">
          <a 
            href="https://wa.me/919395279215" 
            aria-label="Join our WhatsApp group to order now"
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] gap-3 bg-brand-gold text-brand-brown hover:bg-yellow-400 px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-colors duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red"
          >
            <Phone size={24} aria-hidden="true" />
            Join WhatsApp & Order Now
          </a>
        </div>
      </div>

      <div className="bg-brand-light/95 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl border border-white/20 flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-4xl">
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <Clock className="text-brand-red" size={32} aria-hidden="true" />
            <h2 className="text-3xl font-heading font-bold text-brand-brown">Order Timings</h2>
          </div>
          <p className="text-lg text-brand-brown/80 border-l-0 md:border-l-4 border-brand-red pl-0 md:pl-6 py-2">
            Please place your order before <strong className="text-brand-red font-extrabold">9:00 PM</strong> for the next day's meals.
          </p>
        </div>
        <div className="flex-1 bg-white rounded-3xl p-6 shadow-xl w-full border border-gray-100">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <span className="flex items-center gap-2 text-xl font-semibold text-brand-brown/60">
                <Sunrise size={24} className="text-brand-gold" aria-hidden="true" /> Breakfast
              </span>
              <span className="text-xl font-extrabold text-brand-brown">7:00 AM – 7:30 AM</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="flex items-center gap-2 text-xl font-semibold text-brand-brown/60">
                <Coffee size={24} className="text-brand-red" aria-hidden="true" /> Lunch
              </span>
              <span className="text-xl font-extrabold text-brand-brown">12:00 PM – 12:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Improved Tunnel Parallax: scale the whole fold, use ease: 'none' for precise scroll linking
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      // Initially, fold-2 and fold-3 could be slightly scaled down and faded to enhance the tunnel depth
      gsap.set('.fold-2', { scale: 0.8, autoAlpha: 0 });
      gsap.set('.fold-3', { scale: 0.8, autoAlpha: 0 });

      // Fly through fold 1, reveal fold 2
      tl.to('.fold-1', { scale: 3, autoAlpha: 0, duration: 1, ease: 'none' }, 0)
        .to('.fold-2', { scale: 1, autoAlpha: 1, duration: 1, ease: 'none' }, 0);

      // Fly through fold 2, reveal fold 3
      tl.to('.fold-2', { scale: 3, autoAlpha: 0, duration: 1, ease: 'none' }, 1)
        .to('.fold-3', { scale: 1, autoAlpha: 1, duration: 1, ease: 'none' }, 1);
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-[300vh] bg-brand-light font-sans text-brand-brown">
      <main className="sticky top-0 h-screen w-full overflow-hidden perspective-[1000px]">
        {/* Render in reverse order so fold-1 is on top naturally in DOM */}
        <OfferFold />
        <ServicesFold />
        <HeroFold />
      </main>
    </div>
  );
}

export default App;
