import fs from 'fs';
import path from 'path';

export const locales = JSON.parse(
  process.env.NEXT_PUBLIC_DEFAULT_LOCALES ??
  `[${process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE}]`
) as string[];

async function getLocalization(lng: string) {
  const translations = await fetch(`http://localhost:3001/${lng}`)
    .then((response) => response.json())
    .then((data) => data);
  const filePath = path.join(
    'public',
    'locales',
    `${lng}`,
    'translations.json'
  );
  console.log('translations');
  console.log(translations);
  fs.writeFileSync(filePath, JSON.stringify(translations));
  console.log('**** Translations.json oluşturuldu.');
}

async function getLocalizations() {
  await locales.map((language) => getLocalization(language));
}

export default getLocalizations;