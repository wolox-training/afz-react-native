import { getInitials } from '../src/utils/stringUtils';

it('Initials of my Name: A F', () => {
  expect(getInitials('Andres Felipe')).toBe('A F');
});
