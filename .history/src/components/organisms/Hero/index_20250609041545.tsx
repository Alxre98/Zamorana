"use client";

import React from "react";
import { Button } from "../../atoms/Button";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-white to-green-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 -right-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-5xl px-6 mx-auto text-center">
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

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 mx-auto mt-16 max-w-7xl sm:grid-cols-4">
          {[
            { value: "500+", label: "Sonidos naturales" },
            { value: "24/7", label: "Disponibilidad" },
            { value: "4K", label: "Calidad de audio" },
            { value: "100%", label: "Libres de derechos" },
          ].map((stat, index) => (
            <div
              key={index}
              className="px-4 py-3 bg-white bg-opacity-50 rounded-lg backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="w-full h-16 sm:h-24 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity="0.25"
            className="fill-current text-green-50"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-current text-green-50"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-current text-white"
          ></path>
        </svg>
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
