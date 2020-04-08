import { countryNameFromAlphaCode } from '.';

describe('Countries with alpha code', () => {
  it('Should find country name for "DE" alpha code', () => {
    expect(countryNameFromAlphaCode('DE')).toEqual('Germany');
  });

  it('Shouldn’t find country name for incorrect alpha code', () => {
    expect(countryNameFromAlphaCode('XX')).toBeUndefined();
  });
});
