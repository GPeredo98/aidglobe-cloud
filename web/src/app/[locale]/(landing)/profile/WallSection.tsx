import { 
  Award, 
  MessageSquare, 
  Image as ImageIcon, 
  CheckCircle2, 
  Quote, 
  Star,
  Plus
} from 'lucide-react';

export default function WallSection() {
  const posts = [
    {
      id: 1,
      org: "Fundación Vida",
      project: "Operativo Suministros La Paz",
      date: "12 de Abril, 2026",
      type: "auto-post", // Publicado por el sistema
      content: "¡Misión cumplida! Alejandro completó con éxito el operativo de logística.",
      badges: ["Ángel de la guarda", "Héroe de la comunidad"],
      stats: "+150 pts • 8h de servicio",
      review: {
        text: "La eficiencia de Alejandro en la coordinación de carga fue vital para que los medicamentos llegaran a tiempo.",
        author: "Lucía Méndez"
      },
      photos: [
        "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&q=80&w=400",
      ]
    },
    {
      id: 2,
      org: "EcoSantaCruz",
      project: "Reforestación Urbana",
      date: "05 de Marzo, 2026",
      type: "auto-post",
      content: "Alejandro participó en la plantación de 500 árboles nativos.",
      badges: ["Guantes de oro"],
      stats: "+80 pts • 5h de servicio",
      photos: [] // Sin fotos aún
    },
    {
      id: 3,
      org: "Banco de Alimentos",
      project: "Campaña Invierno Sin Hambre",
      date: "20 de Febrero, 2026",
      type: "auto-post",
      content: "Evento finalizado. Alejandro apoyó en el área de clasificación de perecederos.",
      badges: ["Eficiencia Maestra"],
      stats: "+60 pts • 4h de servicio",
      review: {
        text: "Increíble disposición y rapidez. ¡Totalmente recomendado!",
        author: "Roberto Arce"
      },
      photos: [
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=400"
      ]
    },
    {
      id: 4,
      org: "TechForGood",
      project: "Taller de Alfabetización Digital",
      date: "10 de Enero, 2026",
      type: "auto-post",
      content: "Mentoría técnica para adultos mayores finalizada.",
      badges: ["Paciencia de Platino", "Tech Evangelist"],
      stats: "+200 pts • 12h de servicio",
      photos: []
    },
    {
      id: 5,
      org: "Cruz Roja",
      project: "Rescate tras Inundación",
      date: "15 de Diciembre, 2025",
      type: "auto-post",
      content: "Apoyo en primera línea de logística de rescate.",
      badges: ["Corazón de Hierro", "Héroe de la comunidad"],
      stats: "+300 pts • 24h de servicio (Urgencia)",
      review: {
        text: "No dudó un segundo en ayudar bajo la lluvia. Valiente y servicial.",
        author: "Dra. Ana Silva"
      },
      photos: ["https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=400"]
    },
    {
      id: 6,
      org: "Refugio Animal",
      project: "Jornada de Adopción",
      date: "02 de Noviembre, 2025",
      type: "auto-post",
      content: "Alejandro ayudó a 5 mascotas a encontrar un nuevo hogar.",
      badges: ["Amigo de las patas"],
      stats: "+40 pts • 3h de servicio",
      photos: []
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Muro de Impacto</h3>
        <button className="text-[10px] font-bold text-teal-600 flex items-center gap-1 hover:underline">
          <Plus size={12} /> AGREGAR FOTOS A POSTS ANTERIORES
        </button>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden group">
            {/* Header del Post */}
            <div className="p-5 border-b border-gray-50 flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold text-xs uppercase italic">
                  {post.org.substring(0, 2)}
                </div>
                <div>
                  <h4 className="text-sm font-black text-gray-900 leading-none">{post.project}</h4>
                  <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wider">{post.org} • {post.date}</p>
                </div>
              </div>
              <CheckCircle2 size={18} className="text-emerald-500" />
            </div>

            {/* Contenido */}
            <div className="p-5">
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.content}</p>
              
              {/* Badges otorgadas en este post */}
              {post.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.badges.map((badge, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-600 text-[10px] font-black uppercase rounded-lg border border-amber-100">
                      <Award size={12} /> {badge}
                    </span>
                  ))}
                </div>
              )}

              {/* Fotos del Usuario */}
              {post.photos.length > 0 ? (
                <div className={`grid gap-2 mb-4 ${post.photos.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {post.photos.map((photo, idx) => (
                    <img key={idx} src={photo} className="w-full h-48 object-cover rounded-xl border border-gray-100" alt="Evidencia" />
                  ))}
                </div>
              ) : (
                <div className="mb-4 py-8 border-2 border-dashed border-gray-50 rounded-xl flex flex-col items-center justify-center text-gray-300 hover:border-teal-100 hover:text-teal-400 transition-all cursor-pointer">
                  <ImageIcon size={24} />
                  <p className="text-[10px] font-bold mt-2 uppercase tracking-widest">Añadir evidencia visual</p>
                </div>
              )}

              {/* Reseña de la organización */}
              {post.review && (
                <div className="bg-gray-50 p-4 rounded-xl relative mb-4">
                  <Quote size={16} className="text-gray-200 absolute top-2 right-2" />
                  <p className="text-xs italic text-gray-500 pr-6">{post.review.text}</p>
                  <p className="text-[10px] font-black text-gray-900 mt-2">— {post.review.author}, {post.org}</p>
                </div>
              )}

              {/* Footer del Post */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div className="flex items-center gap-1 text-emerald-600">
                  <Star size={14} fill="currentColor" />
                  <span className="text-[11px] font-black uppercase">{post.stats}</span>
                </div>
                <button className="text-gray-400 hover:text-teal-500 transition-colors">
                  <MessageSquare size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}