import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
    const team = [
        {
            name: 'Alejandro Vargas',
            role: 'Co-Founder & Lead Architect',
            bio: 'Ex-Angular Senior, ahora evangelista de Next.js y NestJS. Apasionado por la arquitectura de software escalable.',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
            linkedin: '#',
            github: '#',
        },
        {
            name: 'Paola Quiroga',
            role: 'Co-Founder & Product Strategy',
            bio: 'Especialista en gestión de proyectos sociales con +10 años de experiencia en ONGs internacionales.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
            linkedin: '#',
            github: null,
        },
        {
            name: 'Ignacio Roca',
            role: 'Backend Developer (NestJS)',
            bio: 'Ninja de las bases de datos y la seguridad. Encargado de que la API de Aidglobe sea rápida y segura.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
            linkedin: '#',
            github: '#',
        }
    ];

    const pillars = [
        { title: "Nuestra Misión", desc: "Proveer una infraestructura digital robusta que optimice la logística y transparencia.", icon: Target },
        { title: "Nuestra Visión", desc: "Convertirnos en el estándar global de gestión para organizaciones sin fines de lucro.", icon: Eye },
        { title: "Nuestros Valores", desc: "Transparencia absoluta, eficiencia tecnológica y compromiso humano.", icon: ShieldCheck }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container px-6 mx-auto relative">
                
                {/* --- SECCIÓN 1: CABECERA Y PILARES (GRIS SUBTÁN) --- */}
                <div className="bg-gray-50 rounded-3xl p-10 md:p-16 mb-20 border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Texto de Cabecera */}
                        <div className="lg:col-span-5">
                            <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">Sobre nosotros</h2>
                            <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">
                                Nacimos para que la ayuda <br />
                                <span className="text-gray-400 font-light italic">no tenga fronteras.</span>
                            </h3>
                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Aidglobe surge de la falta de herramientas modernas en el sector social. Somos un equipo comprometido con digitalizar la solidaridad.
                            </p>
                        </div>

                        {/* Misión, Visión, Valores (3 Columnas Internas) */}
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {pillars.map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group hover:border-teal-100 transition-all">
                                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-5 group-hover:bg-teal-500 group-hover:text-white transition-all">
                                        <item.icon size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* --- SECCIÓN 2: EL EQUIPO (FONDO BLANCO, CENTRADO) --- */}
                <div className="max-w-6xl mx-auto">
                    {/* Cabecera Equipo Centrada */}
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <div className="inline-block bg-teal-50 text-teal-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                            People First
                        </div>
                        <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">
                            Las mentes detrás de <span className="text-teal-500">Aidglobe</span>
                        </h3>
                    </div>

                    {/* Grid de Equipo - Ajustado a 3 Columnas para Simetría */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {team.map((member, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-teal-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                {/* Foto Circular con Efecto */}
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-teal-500 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white ring-2 ring-gray-100 group-hover:ring-teal-100 transition-all relative z-10">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Info */}
                                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                                <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider mb-4 border-b border-teal-100 pb-1">{member.role}</p>
                                <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                                    &quot;{member.bio}&quot;
                                </p>

                                {/* Redes Sociales Estilizadas */}
                                <div className="flex gap-4 justify-center">
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#0077b5]/10 hover:text-[#0077b5] transition-all">
                                            <Target size={20} />
                                        </a>
                                    )}
                                    {member.github && (
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-900/10 hover:text-gray-900 transition-all">
                                            <Eye size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decoración de fondo sutil */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50/50 rounded-full blur-3xl -z-10"></div>
            </div>
        </section>
    );
}