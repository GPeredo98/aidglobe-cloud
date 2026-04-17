import { Mail, MessageSquare, MapPin, Send, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container px-6 mx-auto">
        
        {/* Cabecera */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Estamos aquí para <span className="text-teal-500">ayudarte</span>
          </h1>
          <p className="text-lg text-gray-600">
            ¿Tienes dudas sobre cómo registrar tu ONG? ¿Quieres ser patrocinador? Escríbenos y nuestro equipo te responderá en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* COLUMNA 1: FORMULARIO (8 columnas en desktop) */}
          <div className="lg:col-span-7">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Alejandro Vargas"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Asunto</label>
                <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all appearance-none">
                  <option>Soporte técnico</option>
                  <option>Registro de Organización</option>
                  <option>Alianzas y Patrocinios</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  rows={6}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full md:w-auto px-10 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-teal-500 transition-all flex items-center justify-center gap-2 group">
                Enviar mensaje
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* COLUMNA 2: INFO DE CONTACTO (5 columnas en desktop) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Tarjeta de Métodos de Contacto */}
            <div className="bg-teal-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-8 relative z-10">Información de contacto</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-teal-100 text-xs font-bold uppercase">Email</p>
                    <p className="font-medium text-lg">hello@aidglobe.org</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-teal-100 text-xs font-bold uppercase">Teléfono</p>
                    <p className="font-medium text-lg">+591 700 000 00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-teal-100 text-xs font-bold uppercase">Ubicación</p>
                    <p className="font-medium text-lg">Santa Cruz, Bolivia</p>
                  </div>
                </div>
              </div>

              {/* Decoración circular de fondo */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Chat de Soporte Rápido */}
            <div className="p-8 border border-gray-100 rounded-[2.5rem] bg-gray-50 flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-teal-600">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Chat en vivo</h4>
                <p className="text-sm text-gray-600 mt-1">¿Necesitas ayuda inmediata? Nuestros agentes están conectados de Lunes a Viernes (09:00 - 18:00).</p>
                <button className="mt-4 text-teal-600 font-bold text-sm hover:underline">Iniciar chat →</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}