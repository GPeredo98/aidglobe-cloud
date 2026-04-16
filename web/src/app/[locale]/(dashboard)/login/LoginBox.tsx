'use client';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export const LoginBox = () => {
	const router = useRouter();
	const t = useTranslations();

	const handleLogin = (e: React.SubmitEvent) => {
		e.preventDefault();
		router.push('/home');
	};

	return (
		<div className="w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20">
			<div className="text-center">
				<h1 className="text-3xl font-bold tracking-tight text-gray-900">
					{t('Bienvenido a')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">AIDGLOBE</span>
				</h1>
				<p className="mt-2 text-sm text-gray-600">{t('Ingresa tus credenciales para comenzar')}</p>
			</div>

			<form onSubmit={handleLogin} className="mt-8 space-y-4">
				<div>
					<label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
					<input
						type="email"
						placeholder="tu@correo.com"
						className="w-full px-4 py-3 mt-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">Contraseña</label>
					<input
						type="password"
						placeholder="••••••••"
						className="w-full px-4 py-3 mt-1 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
					/>
				</div>

				<button
					type="submit"
					className="w-full py-3 font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 shadow-lg shadow-teal-500/30"
				>
					Iniciar Sesión
				</button>
			</form>

			<div className="text-center">
				<a href="#" className="text-sm font-medium text-teal-600 hover:text-teal-500">
					¿Olvidaste tu contraseña?
				</a>
			</div>
		</div>
	);
};