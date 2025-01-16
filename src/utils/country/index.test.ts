import { countryNameFromAlphaCode, getAllCountries, isEEACountry } from '.';

describe('Countries with alpha code', () => {
  it('Should find country name for "DE" alpha code', () => {
    expect(countryNameFromAlphaCode('DE')).toEqual('Germany');
  });

  it('Should find country name for "DE" alpha code with german translation', () => {
    expect(countryNameFromAlphaCode('DE', 'de')).toEqual('Deutschland');
  });
});

describe('getAllCountries', () => {
  it('Should return all countries', () => {
    const countries = getAllCountries();
    expect(countries.length).toEqual(250);
  });

  it('Should return all countries with german translation', () => {
    const countries = getAllCountries('de');
    expect(countries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'DE',
          name: 'Deutschland',
        }),
      ])
    );
  });

  describe('when no language defined', () => {
    it('Should return all countries with english translation', () => {
      const countries = getAllCountries();
      expect(countries).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            code: 'DE',
            name: 'Germany',
          }),
        ])
      );
    });
  });

  it('Should return all countries with english translation', () => {
    const countries = getAllCountries('en');
    expect(countries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'DE',
          name: 'Germany',
        }),
      ])
    );
  });

  it('Should return all countries with spanish translation', () => {
    const countries = getAllCountries('es');
    expect(countries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          code: 'DE',
          name: 'Alemania',
        }),
      ])
    );
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
