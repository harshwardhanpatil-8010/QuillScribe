import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 animate-fade-up bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Where good ideas find you
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">
            Read and share new perspectives on just about any topic. Everyone's welcome. 
            <span className="block mt-4 text-gray-500">Join our community of curious minds.</span>
          </p>
          <div className="flex gap-4 pt-4">
            <Link 
              to="/register"
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-medium"
            >
              Start reading
            </Link>
            <Link 
              to="/about"
              className="border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 text-lg font-medium"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl blur opacity-75 -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
            alt="Hero image" 
            className="rounded-2xl object-cover w-full h-[500px] shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;