export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Hola, ¡Bienvenido de nuevo!</h1>
        <p className="text-gray-500">Aquí tienes un resumen de lo que está pasando en Aidglobe hoy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Voluntarios Activos', 'Entregas Pendientes', 'Mensajes Nuevos'].map((stat) => (
          <div key={stat} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-gray-500">{stat}</p>
            <p className="text-3xl font-bold text-gray-800 mt-2">0</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">Eventos Recientes</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-400 italic">No hay eventos próximos...</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">Mensajes Recientes</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-400 italic">Bandeja de entrada vacía.</p>
          </div>
        </div>
      </div>
    </div>
  );
}