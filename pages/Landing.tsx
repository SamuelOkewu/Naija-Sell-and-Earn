
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../constants';

const Landing: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalSlides = Math.min(MOCK_PRODUCTS.length, 10);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  useEffect(() => {
    if (sliderRef.current) {
      const scrollAmount = activeSlide * (sliderRef.current.clientWidth / 1.2);
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [activeSlide]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Start an Online Business with <span className="text-green-600">₦0 Inventory</span>.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Connect directly with top suppliers in Balogun and Alaba market. Sell their products online and earn 5% commission on every sale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/auth" className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:bg-green-700 hover:scale-105 transition-all">
              Become a Seller
            </Link>
            <Link to="/auth" className="bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-50 transition-all">
              List as Supplier
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Proof */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Total Sellers', value: '1,200+' },
            { label: 'Total Commissions Paid', value: '₦5.2M+' },
            { label: 'Active Suppliers', value: '250+' },
            { label: 'Items Sold', value: '15,000+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Trending Products</h2>
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveSlide(i)}
                className={`w-3 h-3 rounded-full transition-all ${activeSlide === i ? 'bg-green-600 w-8' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
        
        <div 
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto hide-scrollbar px-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {MOCK_PRODUCTS.slice(0, 10).map((product) => (
            <div key={product.id} className="min-w-[300px] md:min-w-[400px] flex-shrink-0" style={{ scrollSnapAlign: 'start' }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How it Works</h2>
          <p className="text-gray-500">Simple three-step process to financial freedom.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          {[
            { title: 'Pick a Product', desc: 'Browse through thousands of quality items from verified Nigerian suppliers.' },
            { title: 'Share Your Link', desc: 'Generate a unique affiliate link and share it on WhatsApp, Instagram, or TikTok.' },
            { title: 'Earn Commission', desc: 'Once a customer buys using your link, you get 5% commission automatically.' }
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
