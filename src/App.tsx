
// @ts-ignore
import SplitText from './content/TextAnimations/SplitText/SplitText.jsx';
// @ts-ignore
import Aurora from './content/Backgrounds/Aurora/Aurora.jsx';
import { Utensils, Clock, Truck, Gift, Phone, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-brand-light font-sans text-brand-dark">
      {/* Background Aurora */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <Aurora colorStops={['#2ecc71', '#f39c12', '#27ae60']} amplitude={1.5} blend={0.6} />
      </div>

      <div className="relative z-10">
        {/* Header / Hero */}
        <header className="pt-16 pb-12 px-4 text-center max-w-4xl mx-auto">
          <div className="inline-block mb-4 text-brand-orange">
            <Utensils size={48} className="mx-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-brand-dark">
            <SplitText text="PUBLIC CANTEEN" delay={50} className="inline-block" />
          </h1>
          <p className="text-xl md:text-2xl font-medium text-brand-green mb-8 tracking-wide">
            Fresh Food &bull; Healthy Living &bull; Happy Customers
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            At Public Canteen, we serve fresh, hygienic, nutritious, and home-style meals prepared with care and quality ingredients.
          </p>
        </header>

        {/* Grand Launch Offer */}
        <section className="px-4 py-8 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-brand-orange to-red-500 rounded-3xl p-8 text-white shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift size={32} />
              <h2 className="text-3xl font-bold">Grand Launch Offer!</h2>
            </div>
            <p className="text-center text-lg mb-6 font-semibold bg-white/20 inline-block px-4 py-2 rounded-full mx-auto table">
              16th July – 31st July 2026
            </p>
            <div className="text-center mb-6 text-lg">
              <p>Join our WhatsApp group during this period and receive a <strong>FREE Breakfast</strong> the following day!</p>
              <div className="mt-4 flex items-center justify-center gap-2 bg-white text-brand-dark px-4 py-3 rounded-xl w-fit mx-auto shadow-md">
                <Utensils className="text-brand-orange" size={24} />
                <span className="font-bold">Includes: 4 Puri + Chana Masala</span>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="https://wa.me/919395279215" className="inline-flex items-center gap-2 bg-white text-brand-orange hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-colors">
                <Phone size={24} />
                Join WhatsApp & Order Now
              </a>
            </div>
          </div>
        </section>

        {/* Services & Images */}
        <section className="px-4 py-16 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-brand-dark">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <img src="/assets/img1.jpeg" alt="Delicious Food" className="w-full h-48 object-cover" />
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-green flex-shrink-0" /> <span className="font-medium text-lg">Fresh Breakfast Every Morning</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-green flex-shrink-0" /> <span className="font-medium text-lg">Delicious Veg Thali</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <img src="/assets/img2.jpeg" alt="Healthy Meals" className="w-full h-48 object-cover" />
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-green flex-shrink-0" /> <span className="font-medium text-lg">Tasty Fish Thali</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-green flex-shrink-0" /> <span className="font-medium text-lg">Affordable Prices</span></li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <img src="/assets/img3.jpeg" alt="Timely Delivery" className="w-full h-48 object-cover" />
              <div className="p-6 h-full flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 bg-green-50 p-4 rounded-xl">
                  <Truck className="text-brand-green" size={32} />
                  <div>
                    <h3 className="font-bold text-xl">Timely Delivery</h3>
                    <p className="text-gray-600">Fresh food at your doorstep</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="px-4 py-16 bg-white border-t border-b border-gray-100">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-brand-orange" size={32} />
                <h2 className="text-3xl font-bold text-brand-dark">Order & Delivery Timing</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 border-l-4 border-brand-green pl-4">
                Please place your order before <strong className="text-brand-dark">9:00 PM</strong> for the next day's breakfast and lunch.
              </p>
            </div>
            <div className="flex-1 bg-gray-50 rounded-2xl p-8 shadow-inner border border-gray-100 w-full">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                  <span className="text-xl font-medium text-gray-600">🌅 Breakfast</span>
                  <span className="text-xl font-bold text-brand-dark">7:00 AM – 7:30 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium text-gray-600">🍛 Lunch</span>
                  <span className="text-xl font-bold text-brand-dark">12:00 PM – 12:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-dark text-white py-12 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">PUBLIC CANTEEN</h2>
            <p className="text-xl text-brand-green italic mb-8">“Taste the Goodness... Feel the Health.” 🌿🍽️</p>
            
            <div className="bg-white/10 rounded-2xl p-6 inline-block mb-8">
              <p className="text-gray-300 mb-2">For Orders & Enquiries</p>
              <a href="tel:+919395279215" className="text-3xl font-bold hover:text-brand-green transition-colors">+91 9395279215</a>
            </div>
            
            <p className="text-gray-400 text-sm">
              Stay connected for our daily menu, special offers, and exciting updates. <br />
              &copy; {new Date().getFullYear()} Public Canteen. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
