import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// Por defecto, esto busca el archivo en './src/i18n/request.ts'
const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default withNextIntl(nextConfig);
