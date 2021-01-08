import { getInitials, keepNumbers } from '../../src/utils/stringUtils';

describe('Test getInitials', () => {
  it('Initials of Wolox is: W', () => {
    expect(getInitials('Wolox')).toBe('W');
  });
  it('Text is empty', () => {
    expect(getInitials('')).toBe('');
  });

  test('Text is undefined', () => {
    expect(getInitials(undefined)).toBeUndefined();
  });
});

describe('Test keepNumber', () => {
  it('Numbers in text: 44', () => {
    expect(keepNumbers('C4S4')).toBe('44');
  });

  it('All is numbers', () => {
    expect(keepNumbers('0987654321')).toBe('0987654321');
  });

  it('Return only integer numbers', () => {
    expect(keepNumbers(1.5)).toBe('15');
  });

  it('Return string', () => {
    expect(keepNumbers(30)).toBe('30');
  });
  it('Return empty', () => {
    expect(keepNumbers(undefined)).not.toBeUndefined();
  });
});
