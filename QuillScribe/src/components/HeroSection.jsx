import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className=" container mx-auto px-4 pt-24 pb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6 animate-fade-up">
            Where good ideas find you
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Read and share new perspectives on just about any topic. Everyone's welcome.
          </p>
          <Link to="/register"className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Start reading
          </Link>
        </div>
        <div className="hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
            alt="Hero image" 
            className="rounded-lg object-cover w-full h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

