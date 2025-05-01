
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className=" mx-auto px-12 pt-36 pb-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <h1 className="font-serif text-6xl md:text-8xl leading-tight mb-8 animate-fade-up bg-gradient-to-r from-black via-gray-700 to-gray-900 bg-clip-text text-transparent drop-shadow-sm">
            Where good ideas find you
          </h1>
          <p className="text-gray-700 text-xl md:text-2xl leading-relaxed animate-fade-up delay-100">
            Read and share new perspectives on just about any topic. Everyone's welcome.
            <span className="block mt-6 text-gray-600 italic">Join our community of curious minds.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-fade-up delay-200">
            <Link 
              to="/register"
              className="bg-black text-white px-10 py-5 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl text-lg font-semibold tracking-wide text-center"
            >
              Start reading
            </Link>
            <Link 
              to="/about"
              className="border-2 border-black text-black px-10 py-5 rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg font-semibold tracking-wide text-center backdrop-blur-sm"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="hidden md:block relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 rounded-2xl blur-xl opacity-75 -z-10 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
            alt="Hero image" 
            className="rounded-2xl object-cover w-full h-[600px] shadow-2xl transform group-hover:scale-[1.03] transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
