import { Link } from '@/i18n/routing';
import { InfiniteCarousel } from './InfiniteCarousel';
import { useTranslations } from 'next-intl';
import { Landmark, MapPin, User, Building2, HelpCircle } from 'lucide-react';

export default function LandingPage() {
  const t = useTranslations();
  const recentProjects = [
    { id: 1, title: 'Comedor Solidario', location: 'Santa Cruz', publisherName: 'Rotaract Grigotá', publisherType: 'organization', image: 'https://img.freepik.com/foto-gratis/primer-plano-joven-negra-distribuyendo-productos-frescos-personas-hogar-necesitadas-colecta-alimentos-imagen-detallada-comida-gratis-compartida-persona-caucasica-pobre-menos-privilegiada_482257-68733.jpg?semt=ais_hybrid&w=740&q=80' },
    { id: 2, title: 'Reforestación Chiquitania', location: 'Roboré', publisherName: 'Rotaract Grigotá', publisherType: 'organization', image: 'https://www.infodiez.com/wp-content/uploads/2019/12/Chiquitanía-reforestación_infodiez.jpg' },
    { id: 3, title: 'Campaña Escolar', location: 'Warnes', publisherName: 'Alfredo Millares', publisherType: 'volunteer', image: 'https://www.trilce.edu.pe/storage/static/images/blog/116_yB2jlotIrOdgOsdu_900x650.png' },
    { id: 4, title: 'Salud para Todos', location: 'Montero', publisherName: 'Médicos Sin Fronteras', publisherType: 'organization', image: 'https://www.paho.org/sites/default/files/2024-01/who75-whd2023-web-banner-blue-es.jpg' },
    { id: 5, title: 'Educación para Todos', location: 'Cochabamba', publisherName: 'Universidad Cumbre', publisherType: 'institution', image: 'https://aulaintercultural.org/wp-content/uploads/2016/05/UNESCOE2030-300x197.jpg' },
    { id: 6, title: 'Agua Limpia', location: 'Tarija', publisherName: 'Organización de Vecinos', publisherType: 'organization', image: 'https://noticiaspositivas.org/wp-content/uploads/2015/03/1.-Purificador-de-Agua-PG.jpg' },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const publisherConfig: Record<string, { Icon: any, color: string, bg: string }> = {
    organization: { Icon: Building2, color: 'text-blue-500', bg: 'bg-blue-50' },
    volunteer:    { Icon: User,      color: 'text-green-500', bg: 'bg-green-50' },
    institution:  { Icon: Landmark,  color: 'text-purple-500', bg: 'bg-purple-50' },
  };

  const partners = [
    '/images/partners/rotaract.png', '/images/partners/aiesec.png', '/images/partners/upsa.png',
    '/images/partners/cainco.png', '/images/partners/techo.png', '/images/partners/fundacion-vida.png',
    '/images/partners/unicef.png'
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">

      <section className="pt-32 pb-16">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              {t('Una plataforma diseñada para')}&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
                {t('maximizar el impacto social')}
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Aidglobe no es solo una herramienta de gestión, es el puente entre la voluntad de ayudar y la eficiencia logística. Ayudamos a que cada recurso llegue a su destino final sin contratiempos.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <InfiniteCarousel speed={0.5}>
          {recentProjects.map((project, index) => {
            const config = publisherConfig[project.publisherType] || { Icon: HelpCircle, color: 'text-gray-400', bg: 'bg-gray-50' };
            const { Icon, color, bg } = config;
            return (
              <div
                key={`${project.id}-${index}`}
                className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group/card m-4"
              >
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="p-6">
                  {/* <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 ${color} ${bg}`}>
                    <Icon size={12} strokeWidth={3} />
                    {project.publisherType}
                  </div> */}

                  <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{project.title}</h3>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="flex items-center gap-1 text-xs font-bold text-gray-600 uppercase tracking-wider">
                      <Icon size={12} strokeWidth={3} />
                      {project.publisherName}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="flex items-center gap-1 text-xs font-bold text-teal-600 uppercase tracking-wider">
                      <MapPin size={14} /> 
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </InfiniteCarousel>


      </section>

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              {t('Una plataforma diseñada para')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">
                {t('maximizar el impacto social')}
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Aidglobe no es solo una herramienta de gestión, es el puente entre la voluntad de ayudar y la eficiencia logística. Ayudamos a que cada recurso llegue a su destino final sin contratiempos.
            </p>
            <div className="mt-8">
              <Link href="/login" className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all">
                {t('Conocer más')}
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full h-64 bg-teal-50 rounded-3xl border-2 border-dashed border-teal-200 flex items-center justify-center text-teal-400">
            [ Video o Ilustración de Aidglobe ]
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-gray-100 bg-white overflow-hidden">
        <div className="container px-6 mx-auto mb-10 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Instituciones que confían en nosotros
          </p>
        </div>

        <InfiniteCarousel speed={0.5}>
          {partners.map((partner) => (
            <div key={partner} className="min-w-[150px] mx-4 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
              <img src={partner} />
            </div>
          ))}
        </InfiniteCarousel>
      </section>

      <footer className="py-12 bg-white text-center border-t border-gray-50">
        <p className="text-gray-400 text-sm">© 2026 Aidglobe. Hecho con ❤️ para el mundo.</p>
      </footer>
    </div>
  );
}