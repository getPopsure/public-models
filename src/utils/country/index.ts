import {
  allCountries,
  Country,
  CountryCode,
  mapCountryFlag,
} from '../../country';

export function countryNameFromAlphaCode(alphaCode: string) {
  const country = allCountries.find(({ code }: Country) => code === alphaCode);
  if (country) {
    return country.name;
  }
  return undefined;
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

export const associatedCountryFlagForCountryCode = (countryCode: CountryCode) =>
  mapCountryFlag[countryCode];
