'use server';

import { authService } from '@/services/auth';
import { cookies } from 'next/headers';
import { redirect } from '@/i18n/routing';
import { getLocale } from 'next-intl/server';

export async function loginAction(formData: { email: string; password: string }) {
	try {
		const { token } = await authService.login(formData);

		const cookieStore = await cookies();
		cookieStore.set('session-token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			path: '/',
			sameSite: 'lax',
			maxAge: 60 * 60 * 24 * 7,
		});

	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : 'An error occurred';
		return { error: message };
	}
	const locale = await getLocale();
	redirect({ href: '/home', locale });
}

export async function logoutAction() {
	const cookieStore = await cookies();
	cookieStore.delete('session-token');
	const locale = await getLocale();
	redirect({ href: '/', locale });
}