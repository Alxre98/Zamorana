"use client";

import React, { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = memo(({ href, children, className = "" }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      prefetch={true}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isActive
          ? "bg-green-100 text-green-800"
          : "text-gray-700 hover:bg-gray-100"
      } ${className}`}
    >
      {children}
    </Link>
  );
});

NavLink.displayName = "NavLink";

// Memoize the navigation component to prevent unnecessary re-renders
export const Navigation = memo(() => {
  // Prefetch routes on component mount
  React.useEffect(() => {
    // This will prefetch the pages in the background
    const prefetchRoutes = async () => {
      const { default: Router } = await import("next/router");
      ["/", "/about", "/contact"].forEach((route) => {
        Router.prefetch(route);
      });
    };
    prefetchRoutes();
  }, []);

  return (
    <nav className="flex space-x-4">
      <NavLink href="/">Inicio</NavLink>
      <NavLink href="/about">Acerca</NavLink>
      <NavLink href="/contact">Contacto</NavLink>
    </nav>
  );
});

Navigation.displayName = "Navigation";
