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

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

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
        className={`absolute left-0 -bottom-1 w-full h-0.5 bg-current transform origin-left transition-all duration-300 ease-out ${
          isActive(item.href)
            ? "scale-x-100 opacity-100"
            : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
        }`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 8C3 6 5 4 9 1' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' vector-effect='non-scaling-stroke'/%3E%3C/svg%3E%0A\")",
          backgroundSize: "10px 10px",
          height: "2px",
          bottom: "4px",
        }}
      />
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
            <Link href="/" className="group">
              <span className="text-2xl font-light tracking-widest text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                ZAMORANA
              </span>
            </Link>
          </div>

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
