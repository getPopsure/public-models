import {
  Alpha2CountryCode,
  Alpha2CountryOrRegionCode,
  allCountryCodes,
} from '../../countryCodes';
import * as LocaleEN from '../../static/countryNames/en.json';
import * as LocaleDE from '../../static/countryNames/de.json';
import * as LocaleES from '../../static/countryNames/es.json';
import { mapCountryFlag } from '../../countryFlags';

type languages = 'en' | 'de' | 'es';

type LocaleDataType = {
  [key in languages]: {
    locale: string;
    countries: {
      [key in Alpha2CountryOrRegionCode]: string;
    };
  };
};

const localeData: LocaleDataType = {
  en: LocaleEN,
  de: LocaleDE,
  es: LocaleES,
};

export function countryNameFromAlphaCode(
  alphaCode: Alpha2CountryCode,
  language: languages = 'en'
) {
  return localeData[language].countries[alphaCode];
}

export function countryOrRegionNameFromAlphaCode(
  alphaCode: Alpha2CountryOrRegionCode,
  language: languages = 'en'
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

/**
 * @deprecated The method will be removed in the next major release. Use getAllCountries() instead.
 */
export const allCountries = getAllCountries();
