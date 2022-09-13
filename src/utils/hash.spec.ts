import { Hash } from './hash';

describe('Hash utils', () => {
  it('is encrypting and comparing the value', () => {
    const value = 'some-value';
    const hash = Hash.encrypt(value);

    expect(Hash.compare(value, hash)).toBeTruthy();
  });
});
