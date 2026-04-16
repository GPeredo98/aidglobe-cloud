import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations();
  return (
    <div className="antialiased">
      <nav className="fixed top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-100">
        <div className="container flex items-center justify-between h-16 px-6 mx-auto">
          <span className="text-xl font-bold text-teal-600">AIDGLOBE</span>
          <div className="space-x-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-teal-500">{t('Impacto')}</a>
            <a href="#" className="hover:text-teal-500">{t('Nosotros')}</a>
            <Link href="/login" className="px-4 py-2 text-white bg-teal-500 rounded-lg">{t('Ingresar')}</Link>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}