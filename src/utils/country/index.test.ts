import { countryNameFromAlphaCode, isEEACountry } from '.';

describe('Countries with alpha code', () => {
  it('Should find country name for "DE" alpha code', () => {
    expect(countryNameFromAlphaCode('DE')).toEqual('Germany');
  });

  it('Shouldn’t find country name for incorrect alpha code', () => {
    expect(countryNameFromAlphaCode('XX')).toBeUndefined();
  });
});

describe('Is EEA Country', () => {
  it('Should be an EEA Country for "Spain"', () => {
    expect(isEEACountry({ name: 'Spain', code: 'ES' })).toEqual(true);
  });

  it('Shouldn’t be an EEA Country for Venezuela', () => {
    expect(isEEACountry({ name: 'Venezuela', code: 'VE' })).toEqual(false);
  });
});
