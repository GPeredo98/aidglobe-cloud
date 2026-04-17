import { Award, Star, Zap, MapPin, Calendar, ExternalLink, Share2 } from 'lucide-react';
import WallSection from './WallSection';

export default function PublicProfile() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-20 pb-12">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-6 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative">
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-teal-400 to-emerald-500 p-1">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" 
                className="w-full h-full object-cover rounded-[1.4rem] border-4 border-white"
                alt="Profile"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-gray-900 text-white text-[10px] font-black px-3 py-1 rounded-full border-2 border-white shadow-lg">
              LVL 24
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">Alejandro Vargas</h1>
              <span className="px-3 py-0.5 bg-teal-50 text-teal-700 text-xs font-bold rounded-full border border-teal-100">
                Voluntario Certificado
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-lg mb-4">
              Desarrollador enfocado en proyectos de impacto social. Especialista en logística de suministros y rescate técnico.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <span className="flex items-center gap-1"><MapPin size={14} /> Santa Cruz, BO</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> Miembro desde 2025</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="p-2.5 bg-gray-50 text-gray-500 rounded-xl hover:bg-gray-100 transition-all border border-gray-100">
              <Share2 size={18} />
            </button>
            <button className="px-6 py-2.5 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 transition-all shadow-md shadow-teal-100">
              Contactar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Métricas de Altruismo</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Puntos de Impacto</span>
                  <span className="text-lg font-black text-gray-900">4,820</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-teal-500 h-full w-[70%]"></div>
                </div>
                <p className="text-[10px] text-gray-400">Te faltan 180 pts para el nivel 25</p>
                
                <hr className="border-gray-50" />
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <p className="text-lg font-black text-gray-900">12</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">Eventos</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <p className="text-lg font-black text-gray-900">156h</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">Horas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Medallas Obtenidas</h3>
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 border border-amber-100 shadow-inner group relative cursor-help">
                    <Award size={24} />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Fundador</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">           
              <WallSection />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}