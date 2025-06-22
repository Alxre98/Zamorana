"use client";

import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "../../organisms/Header";
import { Footer } from "../../organisms/Footer";

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

      <Footer />
    </div>
  );
};
