"use client";

import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "../../organisms/Header";

interface DefaultTemplateProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const DefaultTemplate: React.FC<DefaultTemplateProps> = ({
  children,
  title = "Zamorana - Sonidos de la Naturaleza",
  description = "Explora y descubre los sonidos más relajantes de la naturaleza",
}) => {
  // Usar title y description para el SEO (puedes implementar esto más adelante)
  React.useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />

      <main className="flex-grow">{children}</main>

      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">
            &copy; {new Date().getFullYear()} Zamorana. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};
