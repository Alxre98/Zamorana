"use client";

import React from "react";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-['Inter']">
      {/* Líneas decorativas */}
      <div className="absolute top-1/4 left-1/4 w-24 h-px bg-black transform -rotate-45 origin-left"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-px bg-black transform rotate-12 origin-right"></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-px bg-black transform -rotate-6 origin-left"></div>

      {/* Contenedor principal del hero */}
      <div className="container mx-auto px-4 h-screen flex flex-col justify-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo y texto */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 relative z-20">
            <div className="relative w-48 h-48 mb-6">
              <Image
                src="/zamorana-logo.png"
                alt="Zamorana Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 80vw, 50vw"
              />
            </div>
            <p className="text-sm font-light tracking-widest text-gray-500 mb-8">by Artikko</p>
            <div className="w-24 h-px bg-black my-8 mx-auto md:mx-0"></div>
          </div>

          {/* Imagen con superposición */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full h-96 md:h-[32rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Bosque"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>

            {/* Elemento decorativo circular */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-black rounded-full opacity-30"></div>

            {/* Arco decorativo */}
            <div className="absolute -top-12 -right-12 w-24 h-24 border-2 border-black rounded-full border-b-0 border-l-0 transform -rotate-45 opacity-20"></div>
          </div>
        </div>
      </div>

      
    </div>
  );
};
