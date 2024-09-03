export const regions = [
  'de',
  'es',
  'fr',
  'nl',
  'it',
  'be',
  'se',
  'mt',
  'at',
  'fi',
  'cy',
  'gr',
  'ee',
  'pt',
  'lt',
  'hr',
  'lv',
  'mc',
  'eu'
] as const;
export type Region = typeof regions[number];
