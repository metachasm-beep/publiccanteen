import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';
// @ts-ignore
import SplitText from './content/TextAnimations/SplitText/SplitText.jsx';
import { Utensils, Clock, Truck, Gift, Phone, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize Lenis for smooth scrolling
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
    // Tunnel Parallax Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Add slight scrub smoothing
      },
    });

    // Fold 1 Animation (0 to 1)
    tl.to('.fold-1-bg', { scale: 3, duration: 1, ease: 'power1.inOut' }, 0)
      .to('.fold-1-content', { opacity: 0, duration: 0.5, ease: 'power1.inOut' }, 0)
      .to('.fold-1', { autoAlpha: 0, duration: 0.5, ease: 'power1.inOut' }, 0.5);

    // Fold 2 Animation (1 to 2)
    tl.to('.fold-2-bg', { scale: 3, duration: 1, ease: 'power1.inOut' }, 1)
      .to('.fold-2-content', { opacity: 0, duration: 0.5, ease: 'power1.inOut' }, 1)
      .to('.fold-2', { autoAlpha: 0, duration: 0.5, ease: 'power1.inOut' }, 1.5);

    // Fold 3 Animation (2 to 3 - just a subtle zoom to finish)
    tl.to('.fold-3-bg', { scale: 1.1, duration: 1, ease: 'power1.out' }, 2);

  }, { scope: containerRef });

  return (
    // The container is tall enough to allow scrolling (3 folds = ~300vh, +100vh for natural end = 400vh)
    <div ref={containerRef} className="h-[400vh] bg-brand-dark font-sans text-brand-dark">
      
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* =========================================
            FOLD 3: SCHEDULE & OFFER (BOTTOM LAYER)
        ========================================= */}
        <section className="fold-3 absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-center">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/fold-bg-3.png" 
              alt="Offer Background" 
              className="fold-3-bg w-full h-full object-cover transform origin-center"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          </div>

          {/* Content */}
          <div className="fold-3-content relative z-10 max-w-5xl mx-auto px-4 w-full flex flex-col gap-12 pt-10 h-full overflow-y-auto custom-scrollbar items-center justify-center">
            
            {/* Grand Launch Offer */}
            <div className="bg-gradient-to-br from-brand-orange to-red-600 rounded-[2.5rem] p-10 text-white shadow-2xl border border-white/20 backdrop-blur-xl w-full max-w-3xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 text-center">
                <Gift size={40} className="animate-pulse flex-shrink-0" />
                <h2 className="text-3xl md:text-5xl font-extrabold">Grand Launch Offer!</h2>
              </div>
              <p className="text-center text-lg mb-6 font-bold bg-white/20 inline-block px-6 py-2 rounded-full mx-auto table border border-white/30 tracking-wide">
                16th July – 31st July 2026
              </p>
              <div className="text-center mb-8 text-lg font-medium">
                <p className="mb-4">Join our WhatsApp group during this period and receive a <strong className="text-yellow-300">FREE Breakfast</strong> the following day!</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white text-brand-dark px-6 py-3 rounded-2xl w-fit mx-auto shadow-xl">
                  <Utensils className="text-brand-orange flex-shrink-0" size={24} />
                  <span className="font-bold text-sm sm:text-base">Includes: 4 Puri + Chana Masala</span>
                </div>
              </div>
              <div className="text-center">
                <a href="https://wa.me/919395279215" className="inline-flex items-center gap-3 bg-white text-brand-orange hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-colors hover:scale-105 transform duration-200">
                  <Phone size={24} />
                  Join WhatsApp & Order Now
                </a>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white/10 backdrop-blur-lg rounded-[2.5rem] p-8 shadow-2xl border border-white/20 flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-4xl">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <Clock className="text-brand-orange" size={32} />
                  <h2 className="text-3xl font-bold text-white">Order Timings</h2>
                </div>
                <p className="text-lg text-gray-200 border-l-0 md:border-l-4 border-brand-green pl-0 md:pl-6 py-2 bg-black/20 md:bg-transparent rounded-r-2xl md:rounded-none">
                  Please place your order before <strong className="text-white font-extrabold">9:00 PM</strong> for the next day's meals.
                </p>
              </div>
              <div className="flex-1 bg-white rounded-3xl p-6 shadow-xl w-full">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-xl font-semibold text-gray-500">🌅 Breakfast</span>
                    <span className="text-xl font-extrabold text-brand-dark">7:00 AM – 7:30 AM</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xl font-semibold text-gray-500">🍛 Lunch</span>
                    <span className="text-xl font-extrabold text-brand-dark">12:00 PM – 12:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================
            FOLD 2: SERVICES (MIDDLE LAYER)
        ========================================= */}
        <section className="fold-2 absolute inset-0 z-20 w-full h-full flex items-center justify-center">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/fold-bg-2.png" 
              alt="Services Background" 
              className="fold-2-bg w-full h-full object-cover transform origin-center"
            />
            <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-md"></div>
          </div>

          {/* Content */}
          <div className="fold-2-content relative z-10 max-w-6xl mx-auto px-4 w-full">
            <h2 className="text-5xl font-bold text-center mb-16 text-white drop-shadow-lg">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                <img src="/assets/img1.jpeg" alt="Delicious Food" className="w-full h-56 object-cover" />
                <div className="p-8">
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4"><CheckCircle className="text-brand-green flex-shrink-0" size={28} /> <span className="font-semibold text-xl">Fresh Breakfast</span></li>
                    <li className="flex items-center gap-4"><CheckCircle className="text-brand-green flex-shrink-0" size={28} /> <span className="font-semibold text-xl">Delicious Veg Thali</span></li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                <img src="/assets/img2.jpeg" alt="Healthy Meals" className="w-full h-56 object-cover" />
                <div className="p-8">
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4"><CheckCircle className="text-brand-green flex-shrink-0" size={28} /> <span className="font-semibold text-xl">Tasty Fish Thali</span></li>
                    <li className="flex items-center gap-4"><CheckCircle className="text-brand-green flex-shrink-0" size={28} /> <span className="font-semibold text-xl">Affordable Prices</span></li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                <img src="/assets/img3.jpeg" alt="Timely Delivery" className="w-full h-56 object-cover" />
                <div className="p-8 h-full flex flex-col justify-center">
                  <div className="flex items-center gap-5 bg-brand-green/10 p-6 rounded-2xl border border-brand-green/30">
                    <Truck className="text-brand-green" size={40} />
                    <div>
                      <h3 className="font-bold text-2xl mb-1">Timely Delivery</h3>
                      <p className="text-gray-600 font-medium">Fresh food at your doorstep</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            FOLD 1: HERO (TOP LAYER)
        ========================================= */}
        <section className="fold-1 absolute inset-0 z-30 w-full h-full flex items-center justify-center">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/assets/fold-bg-1.png" 
              alt="Hero Background" 
              className="fold-1-bg w-full h-full object-cover transform origin-center"
            />
            {/* Glassmorphic Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"></div>
          </div>

          {/* Content */}
          <div className="fold-1-content relative z-10 text-center max-w-4xl mx-auto px-4 mt-10">
            <div className="inline-block mb-6 bg-brand-orange/20 p-5 rounded-full backdrop-blur-lg border border-brand-orange/30">
              <Utensils size={48} className="text-brand-orange mx-auto" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              <SplitText text="PUBLIC CANTEEN" delay={50} className="inline-block" />
            </h1>
            <p className="text-xl md:text-3xl font-medium text-brand-green mb-8 tracking-wide drop-shadow-lg">
              Fresh Food &bull; Healthy Living &bull; Happy Customers
            </p>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light bg-black/40 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
              At Public Canteen, we serve fresh, hygienic, nutritious, and home-style meals prepared with care and quality ingredients.
            </p>
            <div className="mt-12 animate-bounce">
              <p className="text-white/50 text-sm font-semibold tracking-widest uppercase">Scroll Down to Enter</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
