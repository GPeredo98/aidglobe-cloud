import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { TrendingUp, Users, Globe, Heart, CheckCircle2 } from 'lucide-react';

export default function ImpactPage() {
  const t = useTranslations();

  // Datos de ejemplo para los stats
  const stats = [
    { id: 1, label: 'Personas Ayudadas', value: '+50k', icon: Users, color: 'text-teal-600' },
    { id: 2, label: 'Proyectos Activos', value: '124', icon: CheckCircle2, color: 'text-emerald-600' },
    { id: 3, label: 'Países Alcanzados', value: '3', icon: Globe, color: 'text-blue-600' },
    { id: 4, label: 'Donaciones Gestionadas', value: '$2.4M', icon: TrendingUp, color: 'text-purple-600' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="container px-6 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
            <Heart size={14} fill="currentColor" />
            {t('Resultados Reales')}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Transformando la voluntad en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
              impacto medible
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            En Aidglobe creemos que la solidaridad debe ser eficiente. Aquí te mostramos cómo tus recursos están cambiando vidas hoy mismo.
          </p>
        </div>
      </section>

      <section className="py-12 -mt-16">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className={`inline-flex p-3 rounded-2xl bg-gray-50 ${stat.color} mb-4`}>
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Cómo rastreamos el impacto?
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Verificación en tiempo real', desc: 'Cada entrega de suministros se registra con geolocalización.' },
                { title: 'Reportes automatizados', desc: 'Las organizaciones generan informes de impacto con un solo clic.' },
                { title: 'Cero intermediarios innecesarios', desc: 'Optimizamos la logística para que el 98% llegue a destino.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                    src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1000" 
                    alt="Dashboard de impacto" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 hidden md:block">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Última actualización</p>
                <p className="text-sm font-bold text-emerald-600 italic">Hace 5 minutos</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/50">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Voces que mueven el mundo
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              No lo decimos nosotros, lo dicen las personas que están en el terreno cambiando realidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Gracias a Aidglobe pudimos reducir el tiempo de entrega de kits escolares en un 40%. La logística dejó de ser un dolor de cabeza.",
                author: "Lucía Méndez",
                role: "Dir. Fundacion Vida",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
              },
              {
                quote: "Ser voluntario aquí es diferente. Sientes que tu tiempo realmente cuenta porque todo está organizado y sabes exactamente a quién ayudas.",
                author: "Carlos Hurtado",
                role: "Voluntario Independiente",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
              },
              {
                quote: "La transparencia de la plataforma nos permitió atraer a más patrocinadores internacionales. Ahora pueden ver los resultados en tiempo real.",
                author: "Roberto Arce",
                role: "Logística Cruz Roja",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
              }
            ].map((testimonial, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="absolute top-6 right-8 text-teal-100 italic font-serif text-6xl select-none">
                  “
                </div>
                
                <p className="text-gray-700 leading-relaxed relative z-10 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-500/20">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-xs text-teal-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 mx-6 rounded-[3rem] mb-20 text-center overflow-hidden relative">
        <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para ser parte del cambio?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
                Únete como voluntario u organización y empieza a gestionar tus proyectos con la tecnología de Aidglobe.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/register" className="px-10 py-4 bg-teal-500 text-white rounded-full font-bold hover:bg-teal-400 transition-all">
                    Registrar Organización
                </Link>
                <Link href="/volunteer" className="px-10 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all">
                    Ser Voluntario
                </Link>
            </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </section>

    </div>
  );
}