"use client";

import React from "react";
import { Button } from "../../atoms/Button";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-white">
      <div className="relative max-w-5xl px-6 mx-auto text-center w-full">
        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-green-700 bg-green-100 rounded-full">
          <span className="relative flex w-2 h-2 mr-2">
            <span className="absolute inline-flex w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-2 h-2 bg-green-600 rounded-full"></span>
          </span>
          Ahora transmitiendo sonidos naturales
        </div>

        <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block font-serif italic text-gray-900">
            Escucha la naturaleza
          </span>
          <span className="mt-3 text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 sm:text-4xl block">
            en su estado más puro
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-600">
          Sumérgete en una experiencia auditiva inigualable con nuestras
          grabaciones profesionales de alta fidelidad. Perfectas para
          relajación, meditación o concentración.
        </p>

        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button
            variant="primary"
            size="lg"
            className="group relative px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 transition-all duration-300 ease-out rounded-full shadow-lg hover:shadow-green-200"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Explorar sonidos
            </span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 font-medium transition-all duration-300 border border-gray-300 rounded-full hover:bg-gray-50 hover:border-green-600 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Ver colecciones
          </Button>
        </div>
      </div>
    </div>
  );
};

// Add these styles to your global CSS
/* 
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
*/
