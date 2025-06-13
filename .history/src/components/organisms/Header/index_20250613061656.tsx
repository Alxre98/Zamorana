"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../../atoms/Icon";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftNavItems = [
    { name: "Inicio", href: "/" },
    { name: "Explorar", href: "/explore" },
  ];

  const rightNavItems = [
    { name: "Descubrir", href: "/discover" },
    { name: "Colecciones", href: "/collections" },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Section */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Zamorana
              </span>
            </Link>

            {/* Left Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              {leftNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                    pathname === item.href
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {rightNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                  pathname === item.href
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="ml-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-emerald-500 rounded-md hover:opacity-90 transition-opacity">
              Iniciar sesión
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -mr-2 text-gray-700 hover:text-green-600 transition-colors rounded-md"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-controls="mobile-menu"
              type="button"
            >
              <span className="sr-only">
                {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              </span>
              {isMenuOpen ? (
                <Icon name="Close" className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Icon name="Menu" className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 h-auto"
                : "opacity-0 h-0 overflow-hidden"
            }`}
          >
            <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
              {/* Left Navigation - Mobile */}
              <div className="space-y-1">
                <h3 className="px-3 pt-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Navegación
                </h3>
                {leftNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.href
                        ? "bg-green-50 text-green-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Right Navigation - Mobile */}
              <div className="space-y-1 pt-2 border-t border-gray-100">
                <h3 className="px-3 pt-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Explora
                </h3>
                {rightNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === item.href
                        ? "bg-green-50 text-green-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Auth Button - Mobile */}
              <div className="pt-2 border-t border-gray-100">
                <button className="w-full mt-2 px-4 py-2 text-base font-medium text-white text-center bg-gradient-to-r from-green-600 to-emerald-500 rounded-md hover:opacity-90">
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
