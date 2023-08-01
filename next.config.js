const { i18n } = require('./next-i18next.config');
const { cronJob, getTranslations } = require('./cronjob');

module.exports = async (phase) => {
  // eslint-disable-next-line global-require
  switch (phase) {
    case 'phase-production-server':
      // npm run start çaliştirildi.
      // eslint-disable-next-line no-unused-expressions
      cronJob;
      break;
    case 'phase-production-build':
      // npm run build çaliştirildi.
      getTranslations();
      break;
    case 'phase-development-server':
      // npm run dev çaliştirildi.
      getTranslations();
      // eslint-disable-next-line no-unused-expressions
      // cronJob;
      break;
    default:
      break;
  }
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    i18n,
    experimental: {
      esmExternals: false,
    },
    typescript: {
      tsconfigPath: './tsconfig.json',
    },
  };
  return nextConfig;
};
