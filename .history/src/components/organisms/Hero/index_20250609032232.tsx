"use client";

import React from "react";
import { Button } from "../../atoms/Button";

export const Hero: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl px-6 mx-auto text-center">
        {/* Leaf decoration */}
        <div className="mb-8">
          <svg
            className="w-16 h-16 mx-auto text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-800 sm:text-5xl md:text-6xl">
          <span className="block font-serif italic">Armonía</span>
          <span className="block mt-2 text-3xl font-light text-green-600 sm:text-4xl">
            en cada sonido natural
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-600">
          Descubre la belleza acústica de la naturaleza con nuestras grabaciones
          inmersivas. Un viaje sensorial que reconecta con lo esencial.
        </p>

        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button
            variant="primary"
            size="lg"
            className="px-8 py-3 text-base font-medium transition-colors duration-200 transform hover:scale-105"
          >
            Explorar sonidos
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-base font-medium transition-colors duration-200 border-green-600 text-green-700 hover:bg-green-50"
          >
            Nuestra misión
          </Button>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-16 space-x-8 opacity-30">
          {[1, 2, 3].map((item) => (
            <svg
              key={item}
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};
