import { Alpha2CountryCode, allCountryCodes } from '../../countryCodes';
import * as LocaleEN from '../../static/countryNames/en.json';
import * as LocaleDE from '../../static/countryNames/de.json';

import { mapCountryFlag } from '../../countryFlags';

type languages = 'en' | 'de';

export type LocaleDataType = {
  [key in languages]: {
    locale: string;
    countries: {
      [key in Alpha2CountryCode]: string;
    };
  };
};

const localeData: LocaleDataType = {
  en: LocaleEN,
  de: LocaleDE,
};

export function countryNameFromAlphaCode(
  alphaCode: Alpha2CountryCode,
  language: (languages) = 'en'
) {
  return localeData[language].countries[alphaCode];
}

export const isEEACountry = (country: Country) => {
  const { code } = country;
  return [
    'AT',
    'BE',
    'BG',
    'HR',
    'CY',
    'CZ',
    'DK',
    'EE',
    'FI',
    'FR',
    'DE',
    'GR',
    'HU',
    'IS',
    'IE',
    'IT',
    'LV',
    'LI',
    'LT',
    'LU',
    'MT',
    'NL',
    'NO',
    'PL',
    'PT',
    'RO',
    'SK',
    'SI',
    'ES',
    'SE',
    'CH',
  ].includes(code);
};

export const associatedCountryFlagForCountryCode = (
  alphaCode: Alpha2CountryCode
) => mapCountryFlag[alphaCode];

export interface Country {
  name: string;
  code: Alpha2CountryCode;
}

export const getAllCountries = (language: languages = 'en'): Country[] =>
  allCountryCodes.map((code: Alpha2CountryCode) => ({
    name: localeData[language].countries[code],
    code,
  }));
