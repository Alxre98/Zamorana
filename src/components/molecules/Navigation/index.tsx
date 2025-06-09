"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isActive
          ? "bg-green-100 text-green-800"
          : "text-gray-700 hover:bg-gray-100"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export const Navigation: React.FC = () => {
  return (
    <nav className="flex space-x-4">
      <NavLink href="/">Inicio</NavLink>
      <NavLink href="/about">Acerca</NavLink>
      <NavLink href="/contact">Contacto</NavLink>
    </nav>
  );
};
