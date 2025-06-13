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

  // Handle mobile link clicks
  const handleMobileLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Render a navigation link
  const renderNavLink = (item: NavItem, isMobile = false) => (
    <Link
      key={item.name}
      href={item.href}
      className={`${
        isMobile
          ? "block px-4 py-3 rounded-md text-base"
          : "text-sm px-4 py-2.5"
      } font-medium transition-colors ${
        isActive(item.href)
          ? "text-green-600 font-semibold"
          : "text-gray-700 hover:text-green-600"
      } ${isMobile ? "hover:bg-gray-50" : ""}`}
      onClick={isMobile ? handleMobileLinkClick : undefined}
      aria-current={isActive(item.href) ? "page" : undefined}
    >
      {item.name}
    </Link>
  );

  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {leftNavItems.map((item) => renderNavLink(item))}
          </nav>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-black">Zamorana</span>
            </Link>
          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {rightNavItems.map((item) => renderNavLink(item))}
          </nav>

          {/* Mobile menu button and logo */}
          <div className="md:hidden flex items-center justify-between w-full">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-green-600 transition-colors rounded-md"
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
              <span className="text-3xl font-bold text-black">Zamorana</span>
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
