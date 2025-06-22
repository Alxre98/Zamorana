import { ContactHero } from "@/components/organisms/ContactHero";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactHero />

      {/* Contact Form Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          <div className="md:flex">
            {/* Left Side - Form */}
            <div className="p-8 md:p-12 md:w-2/3 bg-white">
              <h2 className="text-3xl font-bold text-gray-800 mb-3 font-serif">
                Escríbenos
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg">
                Estaremos encantados de atenderte. Te responderemos lo antes
                posible.
              </p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder=" "
                      className="w-full px-0 pt-3 pb-1 border-0 border-b border-gray-300 focus:ring-0 focus:border-black focus:outline-none bg-transparent peer"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-1 text-gray-500 text-sm transition-all duration-200 peer-focus:text-xs peer-focus:text-black peer-placeholder-shown:text-base"
                    >
                      Nombre completo
                    </label>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 peer-focus:w-full"></div>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=" "
                      className="w-full px-0 pt-3 pb-1 border-0 border-b border-gray-300 focus:ring-0 focus:border-black focus:outline-none bg-transparent peer"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-1 text-gray-500 text-sm transition-all duration-200 peer-focus:text-xs peer-focus:text-black peer-placeholder-shown:text-base"
                    >
                      Correo electrónico
                    </label>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 peer-focus:w-full"></div>
                  </div>
                </div>

                <div className="relative pt-2">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder=" "
                    className="w-full px-0 pt-3 pb-1 border-0 border-b border-gray-300 focus:ring-0 focus:border-black focus:outline-none bg-transparent peer"
                    required
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-0 -top-1 text-gray-500 text-sm transition-all duration-200 peer-focus:text-xs peer-focus:text-black peer-placeholder-shown:text-base"
                  >
                    Asunto
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 peer-focus:w-full"></div>
                </div>

                <div className="relative pt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder=" "
                    className="w-full px-0 pt-3 pb-1 border-0 border-b border-gray-300 focus:ring-0 focus:border-black focus:outline-none bg-transparent peer resize-none"
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-0 -top-1 text-gray-500 text-sm transition-all duration-200 peer-focus:text-xs peer-focus:text-black peer-placeholder-shown:text-base"
                  >
                    Mensaje
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 peer-focus:w-full"></div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    Enviar mensaje
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 inline-block"
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
            <div className="bg-white p-8 md:p-12 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 font-serif">
                Información de contacto
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-700"
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
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-gray-800 font-medium">
                      contacto@zamorana.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-700"
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
                    <p className="text-sm font-medium text-gray-500">
                      Teléfono
                    </p>
                    <p className="text-gray-800 font-medium">
                      +1 (123) 456-7890
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-blue-600"
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
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">
              Correo Electrónico
            </h3>
            <p className="text-gray-600">contacto@zamorana.com</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-green-600"
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
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">
              Teléfono
            </h3>
            <p className="text-gray-600">+58 412-XXX-XXXX</p>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">
              Ubicación
            </h3>
            <p className="text-gray-600">Zamora, Guatire, Venezuela</p>
          </div>
        </div>
      </section>
    </div>
  );
}
