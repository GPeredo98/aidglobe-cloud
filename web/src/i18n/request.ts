// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !['en', 'es'].includes(locale)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`.//${locale}.json`)).default
  };
});