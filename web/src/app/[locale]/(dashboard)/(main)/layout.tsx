import { logoutAction } from '@/actions/auth';
import { Link } from '@/i18n/routing';
import { 
  Home, 
  Users, 
  Package, 
  Mail, 
  Settings, 
  LogOut, 
  Bell,
  Search
} from 'lucide-react';
import Image from 'next/image';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { name: 'Inicio', icon: Home, href: '/home' },
    { name: 'Voluntarios', icon: Users, href: '/volunteers' },
    { name: 'Logística', icon: Package, href: '/logistics' },
    { name: 'Mensajes', icon: Mail, href: '/messages' },
    { name: 'Configuración', icon: Settings, href: '/settings' },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC]"> {/* Un gris más sutil para que el blanco resalte */}
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-100 hidden md:flex flex-col">
        <div className="p-8">
          <Link href="/home" className="flex items-center gap-2">
            <Image src="/images/logos/aidglobe-logo.png" alt="AIDGLOBE" width={152} height={32} className="inline-block" />
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-4 py-3 text-gray-500 font-medium rounded-2xl hover:bg-teal-50 hover:text-teal-600 transition-all group"
            >
              <item.icon className="mr-3 group-hover:scale-110 transition-transform" size={20} />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-50">
          <form action={logoutAction}>
            <button 
              type="submit" 
              className="flex items-center w-full px-4 py-3 text-gray-400 font-semibold hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
            >
              <LogOut className="mr-3" size={20} /> Salir
            </button>
          </form>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-gray-50 flex items-center justify-between px-10">
          <div className="relative w-96 hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar proyectos, voluntarios..." 
              className="w-full bg-gray-50 border-none rounded-xl py-2 pl-10 text-sm focus:ring-2 focus:ring-teal-500/10 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-gray-600 transition-colors">
              <Bell size={22} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-10 w-px bg-gray-100 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900 leading-none">Admin Usuario</p>
                <p className="text-xs text-teal-600 font-medium mt-1">Organización</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 border-2 border-white shadow-sm"></div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10">
          {children}
        </div>
      </main>
    </div>
  );
}