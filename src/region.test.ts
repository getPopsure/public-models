import { countryOrRegionNameFromAlphaCode } from './utils/country';
import { mapCountryOrRegionFlag } from './countryFlags';
import { Alpha2CountryOrRegionCode } from './countryCodes';
import { regions, supportedRegions, worldRegions } from './region';

describe('worldRegions', () => {
  it('Should not contain duplicates', () => {
    expect(new Set(worldRegions).size).toEqual(worldRegions.length);
  });

  it('Should contain every region', () => {
    regions.forEach((region) => expect(worldRegions).toContain(region));
  });
});

describe('supportedRegions', () => {
  it('Should not contain duplicates', () => {
    expect(new Set(supportedRegions).size).toEqual(supportedRegions.length);
  });

  it('Should only contain world regions', () => {
    supportedRegions.forEach((region) =>
      expect(worldRegions).toContain(region)
    );
  });

  it('Should have a name and a flag for every region', () => {
    supportedRegions.forEach((region) => {
      const code = region.toUpperCase() as Alpha2CountryOrRegionCode;
      expect(countryOrRegionNameFromAlphaCode(code)).toBeTruthy();
      expect(mapCountryOrRegionFlag[code]).toBeTruthy();
    });
  });

  it('Should include worldwide', () => {
    expect(supportedRegions).toContain('ww');
  });
});
