"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "../../atoms/Icon";

interface NavItem {
  name: string;
  href: string;
}

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftNavItems: NavItem[] = [
    { name: "Inicio", href: "/" },
    { name: "Explorar", href: "/explore" },
  ];

  const rightNavItems: NavItem[] = [
    { name: "Descubrir", href: "/discover" },
    { name: "Colecciones", href: "/collections" },
  ];

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Navigation */}
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

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-black">Zamorana</span>
            </Link>
          </div>

          {/* Right Navigation */}
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
          </nav>

          {/* Mobile menu button and logo */}
          <div className="md:hidden flex items-center justify-between w-full">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-green-600 transition-colors rounded-md"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={!!isMenuOpen}
            >
              {isMenuOpen ? (
                <Icon name="Close" className="w-6 h-6" />
              ) : (
                <Icon name="Menu" className="w-6 h-6" />
              )}
            </button>

            <Link
              href="/"
              className="absolute left-1/2 transform -translate-x-1/2"
            >
              <span className="text-3xl font-bold text-black">Zamorana</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden transition-all duration-300 ease-in-out">
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
                <Link
                  href="/login"
                  className="block w-full mt-2 px-4 py-2 text-base font-medium text-white text-center bg-gradient-to-r from-green-600 to-emerald-500 rounded-md hover:opacity-90 transition-colors"
                  onClick={handleLinkClick}
                  aria-label="Iniciar sesión"
                >
                  Iniciar sesión
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
