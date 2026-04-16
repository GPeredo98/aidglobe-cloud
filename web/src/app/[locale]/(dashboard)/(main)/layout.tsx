import { logoutAction } from '@/actions/auth';
import { Link } from '@/i18n/routing';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { name: 'Inicio', icon: '🏠', href: '/home' },
    { name: 'Voluntarios', icon: '🤝', href: '/volunteers' },
    { name: 'Logística', icon: '📦', href: '/logistics' },
    { name: 'Mensajes', icon: '✉️', href: '/messages' },
    { name: 'Configuración', icon: '⚙️', href: '/settings' },
  ];
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
            AIDGLOBE
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-3 text-gray-600 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-colors"
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <form action={logoutAction}>
            <button 
              type="submit" 
              className="flex items-center w-full px-4 py-3 text-gray-600 hover:text-red-600 transition-colors text-left"
            >
              <span className="mr-3">🚪</span> Salir
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="font-semibold text-gray-700">Panel de Control</h2>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"></div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}