import { Address } from '../../address';

export function isPartialAddressValid(input: Partial<Address>): boolean {
  const { street, houseNumber, postcode, city, country } = input;
  if (
    street &&
    street.length > 0 &&
    houseNumber &&
    houseNumber.length > 0 &&
    postcode &&
    postcode.length > 0 &&
    city &&
    city.length > 0 &&
    country &&
    country.length > 0
  ) {
    return true;
  }
  return false;
}
