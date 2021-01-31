const sum = require('./sum');
const multiply = require('./multiply');
const power = require('./power');

describe('Sum', () => {
  it('sum 2 and 4', () => {
    expect(sum(2, 4)).toBe(6);
  });
  it('sum 3 and 3', () => {
    expect(sum(3, 3)).toBe(6);
  });
  it('sum 4 and 5', () => {
    expect(sum(4, 5)).toBe(9);
  });
});

describe('Multiply', () => {
  it('multiply 2 and 2', () => {
    expect(multiply(2, 2)).toBe(4);
  });
  it('multiply 0 and 4', () => {
    expect(multiply(0, 4)).toBe(0);
  });
});

describe('Power', () => {
  it('power 2 and 0', () => {
    expect(power(2, 0)).toBe(1);
  });
  it('power 3 and 1', () => {
    expect(power(3, 1)).toBe(3);
  });
  it('power 2 and 3', () => {
    expect(power(2, 3)).toBe(8);
  });
});
