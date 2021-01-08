import { getInitials, keepNumbers } from '../../src/utils/stringUtils';

describe('Test getInitials', () => {
  test('Initials of Wolox is: W', () => {
    expect(getInitials('Wolox')).toBe('W');
  });
  test('Text is empty', () => {
    expect(getInitials('')).toBe('');
  });

  test('Text is undefined', () => {
    expect(getInitials(undefined)).toBe(undefined);
  });
});

describe('Test keepNumber', () => {
  test('Numbers in text: 44', () => {
    expect(keepNumbers('C4S4')).toBe('44');
  });

  test('All is numbers', () => {
    expect(keepNumbers('0987654321')).toBe('0987654321');
  });

  test('Return only integer numbers', () => {
    expect(keepNumbers(1.5)).toBe('15');
  });

  test('Return string', () => {
    expect(keepNumbers(30)).toBe('30');
  });
  test('Return empty', () => {
    expect(keepNumbers(undefined)).toBe('');
  });
});
