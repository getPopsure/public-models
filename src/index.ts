export type { Gender } from './gender';
export type { LegacyGender } from './gender';
export type { CalendarDate } from './calendarDate';
export type { Address } from './address';
export type {
  Alpha2CountryCode,
  Alpha2CountryOrRegionCode,
} from './countryCodes';
export { regions } from './region';
export type { Region } from './region';
export { allCountryCodes } from './countryCodes';
export { isPartialAddressValid } from './utils/address';
export {
  countryNameFromAlphaCode,
  countryOrRegionNameFromAlphaCode,
  isEEACountry,
  associatedCountryFlagForCountryCode,
  getAllCountries,
  allCountries,
} from './utils/country';
export type { Country } from './utils/country';
export { universities } from './universities';
export { mapCountryFlag, mapCountryOrRegionFlag } from './countryFlags';
export {
  breeds,
  Breeds,
  breedsSpain,
  BreedsSpain,
  dangerousBreeds,
  dangerousBreedsSpain,
  DangerousBreeds,
  DangerousBreedsSpain,
} from './breeds';
