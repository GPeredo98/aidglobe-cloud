"use client";

import { Link } from '@/i18n/routing';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LoginPage() {

  const router = useRouter();
	const t = useTranslations();

	const handleLogin = (e: React.SubmitEvent) => {
		e.preventDefault();
		router.push('/home');
	};

  return (
    <div className="min-h-screen flex bg-white">
      
      {/* --- LADO IZQUIERDO: FORMULARIO --- */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-24 xl:px-32">
        <div className="max-w-md w-full mx-auto">
          
          {/* Logo y Cabecera */}
          <div className="mb-10">
            <Link href="/" className="inline-block mb-8">
              <span className="text-2xl font-black tracking-tighter text-gray-900">
                AID<span className="text-teal-500">GLOBE</span>
              </span>
            </Link>
            <h1 className="text-3xl font-extrabold text-gray-900">Bienvenido de nuevo</h1>
            <p className="text-gray-500 mt-2">Ingresa tus credenciales para gestionar tu impacto.</p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Correo electrónico</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email" 
                  placeholder="nombre@organizacion.org"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-bold text-gray-700">Contraseña</label>
                <Link href="/forgot-password" className="text-xs font-bold text-teal-600 hover:text-teal-700">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 py-2">
              <input type="checkbox" className="w-4 h-4 rounded text-teal-500 focus:ring-teal-500 border-gray-300" id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-500 select-none">Recordar mi sesión</label>
            </div>

            <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-teal-600 transition-all flex items-center justify-center gap-2 group">
              Iniciar Sesión
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Aún no eres parte? {' '}
            <Link href="/register" className="font-bold text-teal-600 hover:underline">
              Crea una cuenta gratis
            </Link>
          </p>
        </div>
      </div>

      {/* --- LADO DERECHO: VISUAL (Oculto en móvil) --- */}
      <div className="hidden lg:flex lg:flex-1 relative bg-gray-900 overflow-hidden">
        {/* Imagen de fondo con Overlay */}
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200" 
          alt="Voluntariado" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent"></div>
        
        {/* Contenido flotante */}
        <div className="relative z-10 self-end p-20 text-white">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 max-w-lg">
            <h2 className="text-3xl font-bold mb-4 leading-tight">
              &ldquo;La tecnología al servicio de quienes cambian el mundo.&rdquo;
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-10 h-1  bg-teal-400"></div>
              <p className="text-teal-300 font-medium uppercase tracking-widest text-xs">Aidglobe Philosophy</p>
            </div>
          </div>
        </div>

        {/* Decoración: Círculos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      </div>
    </div>
  );
}