import { 
  Users, 
  Package, 
  MessageCircle, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  ExternalLink,
  Plus
} from 'lucide-react';

export default function HomePage() {
  const stats = [
    { label: 'Voluntarios', value: '1,284', icon: Users, trend: '+12.5%', up: true },
    { label: 'Entregas', value: '43', icon: Package, trend: '-2.4%', up: false },
    { label: 'Mensajes', value: '12', icon: MessageCircle, trend: '+5.1%', up: true },
    { label: 'Impacto ($)', value: '$12.4k', icon: ArrowUpRight, trend: '+8.2%', up: true },
  ];

  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Resumen Operativo</h1>
          <p className="text-xs text-gray-500">Actualizado hace 2 minutos</p>
        </div>
        <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition-all">
          <Plus size={16} />
          Nuevo Proyecto
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="p-2 bg-gray-50 rounded-lg text-gray-600">
                <stat.icon size={18} />
              </div>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${stat.up ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'} flex items-center`}>
                {stat.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                {stat.trend}
              </span>
            </div>
            <p className="text-xs font-medium text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 leading-none mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-900 text-sm">Proyectos en curso</h3>
            <button className="text-xs text-teal-600 font-bold hover:text-teal-700">Ver reporte completo</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-500">
              <thead className="bg-gray-50 text-gray-700 uppercase font-bold border-b border-gray-100">
                <tr>
                  <th className="px-5 py-3">Nombre</th>
                  <th className="px-5 py-3">Estado</th>
                  <th className="px-5 py-3">Progreso</th>
                  <th className="px-5 py-3 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: 'Suministros Médicos - La Paz', status: 'Activo', progress: '75%', color: 'bg-emerald-500' },
                  { name: 'Kits Escolares - Santa Cruz', status: 'En espera', progress: '30%', color: 'bg-amber-500' },
                  { name: 'Ayuda Alimentaria', status: 'Urgente', progress: '90%', color: 'bg-red-500' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-semibold text-gray-900">{row.name}</td>
                    <td className="px-5 py-4">
                      <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                        {row.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1">
                        <div className={`${row.color} h-1.5 rounded-full`} style={{ width: row.progress }}></div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-900"><ExternalLink size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="font-bold text-gray-900 text-sm mb-5">Actividad reciente</h3>
          <div className="space-y-6">
            {[
              { user: 'Karis Cruz', action: 'subió un reporte', time: '10 min', color: 'bg-teal-500' },
              { user: 'Soporte', action: 'mensaje nuevo', time: '1h', color: 'bg-blue-500' },
              { user: 'Sistema', action: 'servidor migrado', time: '2h', color: 'bg-gray-800' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-3 relative">
                {i !== 2 && <div className="absolute left-[11px] top-6 w-[2px] h-8 bg-gray-100"></div>}
                <div className={`w-6 h-6 rounded-full ${activity.color} flex-shrink-0 flex items-center justify-center text-[10px] text-white font-bold`}>
                  {activity.user[0]}
                </div>
                <div>
                  <p className="text-[13px] text-gray-800 leading-tight">
                    <span className="font-bold">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{activity.time} ago</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-2 text-xs font-bold text-gray-500 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            Ver todo el historial
          </button>
        </div>

      </div>
    </div>
  );
}