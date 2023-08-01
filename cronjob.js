const cron = require('node-cron');
const runTS = require('./runCompileJtoTS');

async function getTranslations() {
  const clientPath = './src/utils/createLocalizationJson.ts';
  const translations = runTS(clientPath);
  await translations();
}

// Her 2 satte bir çalışacak cron job'u oluşturun
const cronJob = cron.schedule(
  `*/${process.env.NEXT_PUBLIC_CACHE_MEMORY_TIME} * * * *`,
  () => {
    getTranslations();
  }
);

cronJob.start();
module.exports = { cronJob, getTranslations };
