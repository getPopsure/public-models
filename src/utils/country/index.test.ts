import { countryNameFromAlphaCode, isEEACountry } from '.';

describe('Countries with alpha code', () => {
  it('Should find country name for "DE" alpha code', () => {
    expect(countryNameFromAlphaCode('DE')).toEqual('Germany');
  });

  it('Should find country name for "DE" alpha code with german translation', () => {
    expect(countryNameFromAlphaCode('DE', 'de')).toEqual('Deutschland');
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
