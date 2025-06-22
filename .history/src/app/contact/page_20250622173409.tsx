"use client";

import { ContactHero } from "@/components/organisms/ContactHero";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Estilos para el autocompletado
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        -webkit-text-fill-color: #111827 !important; /* gray-900 */
      }
      textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover,
      textarea:-webkit-autofill:focus,
      textarea:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px white inset !important;
        -webkit-text-fill-color: #111827 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-white">
      <ContactHero />

      {/* Contact Form Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-white overflow-hidden">
          <div className="md:flex border border-gray-300">
            {/* Left Side - Form */}
            <div className="p-8 md:p-12 md:w-2/3">
              <div className="mb-8">
                <span className="text-green-700 text-sm font-medium tracking-wider">
                  CONTÁCTANOS
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-3 font-serif">
                  Escríbenos
                </h2>
                <div className="h-0.5 w-16 bg-green-700 my-4"></div>
                <p className="text-gray-600 max-w-lg">
                  Estaremos encantados de atenderte. Te responderemos lo antes
                  posible.
                </p>
              </div>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-0 pt-6 pb-2 border-0 border-b border-gray-200 focus:ring-0 focus:outline-none bg-transparent text-gray-900"
                      required
                    />
                    <label
                      htmlFor="name"
                      className={`absolute left-0 text-sm transition-all duration-200 ${
                        formData.name
                          ? "text-xs text-gray-600 top-0"
                          : "text-gray-500 top-2"
                      }`}
                    >
                      Nombre completo
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-0 pt-6 pb-2 border-0 border-b border-gray-200 focus:ring-0 focus:outline-none bg-transparent text-gray-900"
                      required
                    />
                    <label
                      htmlFor="email"
                      className={`absolute left-0 text-sm transition-all duration-200 ${
                        formData.email
                          ? "text-xs text-gray-600 top-0"
                          : "text-gray-500 top-2"
                      }`}
                    >
                      Correo electrónico
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-0 pt-6 pb-2 border-0 border-b border-gray-200 focus:ring-0 focus:outline-none bg-transparent text-gray-900"
                    required
                  />
                  <label
                    htmlFor="subject"
                    className={`absolute left-0 text-sm transition-all duration-200 ${
                      formData.subject
                        ? "text-xs text-gray-600 top-0"
                        : "text-gray-500 top-2"
                    }`}
                  >
                    Asunto
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-0 pt-6 pb-2 border-0 border-b border-gray-200 focus:ring-0 focus:outline-none bg-transparent text-gray-900 resize-none"
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className={`absolute left-0 text-sm transition-all duration-200 ${
                      formData.message
                        ? "text-xs text-gray-600 top-0"
                        : "text-gray-500 top-2"
                    }`}
                  >
                    Mensaje
                  </label>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 px-6 font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 flex items-center justify-center cursor-pointer"
                  >
                    Enviar mensaje
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Info */}
            <div className="bg-gray-50 p-8 md:p-12 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">
                Información de contacto
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-1">
                      Email
                    </p>
                    <p className="text-gray-700">contacto@zamorana.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200">
                      <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-1">
                      Teléfono
                    </p>
                    <p className="text-gray-700">+58 412-XXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
