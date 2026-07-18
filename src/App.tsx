import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
// @ts-ignore
import SplitText from './content/TextAnimations/SplitText/SplitText.jsx';
import { Utensils, Clock, Truck, Gift, Phone, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect on backgrounds
    gsap.utils.toArray<HTMLElement>('.fold-bg').forEach((bg) => {
      // The background image will move down slower than the scroll, creating parallax
      gsap.to(bg, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: bg.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-brand-dark font-sans text-brand-dark">
      
      {/* Fold 1: Hero */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/fold-bg-1.png" 
            alt="Hero Background" 
            className="fold-bg w-full h-[130%] object-cover absolute -top-[15%] left-0"
          />
          {/* Glassmorphic Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-20">
          <div className="inline-block mb-6 bg-brand-orange/20 p-4 rounded-full backdrop-blur-md">
            <Utensils size={48} className="text-brand-orange mx-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-xl">
            <SplitText text="PUBLIC CANTEEN" delay={50} className="inline-block" />
          </h1>
          <p className="text-xl md:text-3xl font-medium text-brand-green mb-8 tracking-wide drop-shadow-md">
            Fresh Food &bull; Healthy Living &bull; Happy Customers
          </p>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light bg-black/30 p-6 rounded-2xl backdrop-blur-md">
            At Public Canteen, we serve fresh, hygienic, nutritious, and home-style meals prepared with care and quality ingredients.
          </p>
        </div>
      </section>

      {/* Fold 2: Services */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center py-20">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/fold-bg-2.png" 
            alt="Services Background" 
            className="fold-bg w-full h-[130%] object-cover absolute -top-[15%] left-0"
          />
          <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <h2 className="text-5xl font-bold text-center mb-16 text-white drop-shadow-lg">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl hover:shadow-brand-green/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <img src="/assets/img1.jpeg" alt="Delicious Food" className="w-full h-56 object-cover" />
              <div className="p-8">
                <ul className="space-y-6">
                  <li className="flex items-center gap-4"><CheckCircle className="text-brand-green flex-shrink-0" size={28} /> <span className="font-semibold text-xl">Fresh Breakfast</span></li>
                  <li className="flex items-center gap-4"><CheckCircle className="text-brand-green flex-shrink-0" size={28} /> <span className="font-semibold text-xl">Delicious Veg Thali</span></li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl hover:shadow-brand-green/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <img src="/assets/img2.jpeg" alt="Healthy Meals" className="w-full h-56 object-cover" />
              <div className="p-8">
                <ul className="space-y-6">
                  <li className="flex items-center gap-4"><CheckCircle className="text-brand-green flex-shrink-0" size={28} /> <span className="font-semibold text-xl">Tasty Fish Thali</span></li>
                  <li className="flex items-center gap-4"><CheckCircle className="text-brand-green flex-shrink-0" size={28} /> <span className="font-semibold text-xl">Affordable Prices</span></li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl hover:shadow-brand-green/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <img src="/assets/img3.jpeg" alt="Timely Delivery" className="w-full h-56 object-cover" />
              <div className="p-8 h-full flex flex-col justify-center">
                <div className="flex items-center gap-5 bg-brand-green/10 p-6 rounded-2xl border border-brand-green/20">
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

      {/* Fold 3: Schedule & Offer */}
      <section className="relative w-full min-h-[100vh] overflow-hidden flex flex-col items-center justify-center py-20">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/fold-bg-3.png" 
            alt="Offer Background" 
            className="fold-bg w-full h-[130%] object-cover absolute -top-[15%] left-0"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full flex flex-col gap-12">
          
          {/* Grand Launch Offer */}
          <div className="bg-gradient-to-br from-brand-orange to-red-600 rounded-[2.5rem] p-10 text-white shadow-2xl transform hover:scale-[1.01] transition-transform duration-300 border border-white/20 backdrop-blur-xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Gift size={40} className="animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-extrabold">Grand Launch Offer!</h2>
            </div>
            <p className="text-center text-xl mb-8 font-bold bg-white/20 inline-block px-6 py-2 rounded-full mx-auto table border border-white/30 tracking-wide">
              16th July – 31st July 2026
            </p>
            <div className="text-center mb-10 text-xl font-medium max-w-2xl mx-auto">
              <p className="mb-6">Join our WhatsApp group during this period and receive a <strong className="text-yellow-300">FREE Breakfast</strong> the following day!</p>
              <div className="flex items-center justify-center gap-3 bg-white text-brand-dark px-6 py-4 rounded-2xl w-fit mx-auto shadow-xl">
                <Utensils className="text-brand-orange" size={28} />
                <span className="font-bold">Includes: 4 Puri + Chana Masala</span>
              </div>
            </div>
            <div className="text-center">
              <a href="https://wa.me/919395279215" className="inline-flex items-center gap-3 bg-white text-brand-orange hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl shadow-2xl transition-colors hover:scale-105 transform duration-200">
                <Phone size={28} />
                Join WhatsApp & Order Now
              </a>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white/10 backdrop-blur-lg rounded-[2.5rem] p-10 shadow-2xl border border-white/20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="text-brand-orange" size={40} />
                <h2 className="text-4xl font-bold text-white">Order Timings</h2>
              </div>
              <p className="text-xl text-gray-200 border-l-4 border-brand-green pl-6 py-2 bg-black/20 rounded-r-2xl">
                Please place your order before <strong className="text-white font-extrabold">9:00 PM</strong> for the next day's meals.
              </p>
            </div>
            <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl w-full">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                  <span className="text-2xl font-semibold text-gray-500">🌅 Breakfast</span>
                  <span className="text-2xl font-extrabold text-brand-dark">7:00 AM – 7:30 AM</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-2xl font-semibold text-gray-500">🍛 Lunch</span>
                  <span className="text-2xl font-extrabold text-brand-dark">12:00 PM – 12:30 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-white/10 text-white py-12 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 tracking-wider">PUBLIC CANTEEN</h2>
          <p className="text-xl text-brand-green italic mb-8">“Taste the Goodness... Feel the Health.” 🌿🍽️</p>
          
          <div className="bg-white/5 rounded-2xl p-6 inline-block mb-8 border border-white/10">
            <p className="text-gray-400 mb-2 uppercase tracking-widest text-sm font-bold">For Orders & Enquiries</p>
            <a href="tel:+919395279215" className="text-4xl font-black text-brand-orange hover:text-brand-green transition-colors">+91 9395279215</a>
          </div>
          
          <p className="text-gray-500 text-sm">
            Stay connected for our daily menu, special offers, and exciting updates. <br />
            &copy; {new Date().getFullYear()} Public Canteen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
