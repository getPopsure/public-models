import { isPartialAddressValid } from '.';

describe('is partial address valid', () => {
  it('Should be valid in case of a full address', () => {
    expect(
      isPartialAddressValid({
        street: 'Johanniterstrasse 30',
        houseNumber: '30',
        postcode: '10961',
        city: 'Berlin',
        country: 'DE',
      })
    ).toBeTruthy();
  });

  it('Should be invalid if missing a property', () => {
    expect(
      isPartialAddressValid({
        street: 'Johanniterstrasse 30',
        houseNumber: '30',
        postcode: '10961',
        country: 'DE',
      })
    ).toBeFalsy();
  });
});
