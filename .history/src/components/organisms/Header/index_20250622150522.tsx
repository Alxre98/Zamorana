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
    { name: "Sobre nosotros", href: "/about" },
  ];

  const rightNavItems: NavItem[] = [
    { name: "Contacto", href: "/contact" },
    { name: "Colecciones", href: "/colecciones" },
  ];

  const isActive = (href: string) => pathname === href;

  // Handle mobile link clicks
  const handleMobileLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Render a navigation link
  const renderNavLink = (item: NavItem, isMobile = false) => (
    <Link
      key={item.name}
      href={item.href}
      className={`relative group ${
        isMobile ? "block px-6 py-4 text-base" : "text-base py-2.5 px-2"
      } font-medium transition-all whitespace-nowrap text-gray-600 hover:text-gray-900 ${
        isMobile ? "hover:bg-gray-50" : ""
      }`}
      onClick={isMobile ? handleMobileLinkClick : undefined}
      aria-current={isActive(item.href) ? "page" : undefined}
    >
      {item.name}
      <span
        className={`absolute left-0 w-full h-3 overflow-hidden transform origin-left transition-all duration-500 ease-out ${
          isActive(item.href)
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
        style={{
          bottom: "6px",
        }}
      >
        <svg
          width="100%"
          height="12"
          viewBox="0 0 100 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-current"
          preserveAspectRatio="none"
        >
          <path
            d="M2,10 C15,8 25,6 35,9 C45,12 55,10 65,7 C75,4 85,5 98,2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            className={`transition-all duration-700 ease-in-out ${
              isActive(item.href)
                ? "stroke-dashoffset-0"
                : "stroke-dashoffset-[200%]"
            }`}
            style={{
              strokeDasharray: "100%",
              strokeDashoffset: isActive(item.href) ? "0%" : "200%",
            }}
          />
        </svg>
      </span>
    </Link>
  );

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex justify-between items-center h-20">
          {/* Left Navigation */}
          <nav className="hidden md:flex flex-1 justify-start">
            <div className="flex space-x-8">
              {leftNavItems.map((item) => renderNavLink(item))}
            </div>
          </nav>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="group relative inline-block">
              <span className="relative z-10 text-2xl font-light tracking-widest text-gray-800 transition-all duration-300">
                ZAMORANA
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-3 overflow-hidden">
                <svg
                  width="100%"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5,10 C15,5 30,12 45,6 C60,0 80,10 95,4 C110,-2 130,6 145,2 C160,-2 180,8 195,5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="0"
                    className="animate-draw"
                    style={{
                      strokeDasharray: "200",
                      strokeDashoffset: "200",
                      animation: "draw 1.2s ease-out forwards",
                    }}
                  />
                </svg>
              </div>
            </Link>
          </div>
          <style jsx global>{`
            @keyframes draw {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>

          {/* Right Navigation */}
          <nav className="hidden md:flex flex-1 justify-end">
            <div className="flex space-x-8">
              {rightNavItems.map((item) => renderNavLink(item))}
            </div>
          </nav>

          {/* Mobile menu button and logo */}
          <div className="md:hidden flex items-center justify-between w-full px-4 col-span-3">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -ml-2 text-gray-600 hover:text-green-700 transition-colors duration-200"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen ? "true" : "false"}
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
              <span className="text-2xl font-bold text-black">Zamorana</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden transition-all duration-300 ease-in-out">
            <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-100">
              {/* Left Navigation - Mobile */}
              <div className="space-y-1">
                <h3 className="px-4 pt-3 pb-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Navegación
                </h3>
                {leftNavItems.map((item) => renderNavLink(item, true))}
              </div>

              {/* Right Navigation - Mobile */}
              <div className="space-y-1 pt-3 border-t border-gray-100">
                <h3 className="px-4 pt-2 pb-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Explora
                </h3>
                {rightNavItems.map((item) => renderNavLink(item, true))}
              </div>

              {/* Auth Button - Mobile */}
              <div className="pt-2 border-t border-gray-100">
                <Link
                  href="/auth/login"
                  className="block w-full px-6 py-3 text-center text-gray-700 hover:bg-gray-50 font-medium transition-colors duration-200"
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
