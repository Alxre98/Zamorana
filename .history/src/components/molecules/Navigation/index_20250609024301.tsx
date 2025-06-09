import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "bg-green-100 text-green-800"
            : "text-gray-700 hover:bg-gray-100"
        } ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export const Navigation: React.FC = () => {
  return (
    <nav className="flex space-x-4">
      <NavLink href="/">Inicio</NavLink>
      <NavLink href="/sonidos">Sonidos</NavLink>
      <NavLink href="/acerca">Acerca de</NavLink>
      <NavLink href="/contacto">Contacto</NavLink>
    </nav>
  );
};

export default Navigation;
