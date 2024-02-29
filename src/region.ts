export const regions = ['de', 'es', 'fr'] as const;
export type Region = typeof regions[number];
