import { allCountries, Country } from '../../country';

export function countryNameFromAlphaCode(alphaCode: string) {
  const country = allCountries.find(({ code }: Country) => code === alphaCode);
  if (country) {
    return country.name;
  }
  return undefined;
}
