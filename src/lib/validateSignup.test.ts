
import { describe, expect, it } from 'vitest';
import { validateSignup } from './validateSignup';

const validData = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
};

describe('validateSignup', () => {
  it('accepts valid data', () => {
    expect(validateSignup(validData, 10)).toEqual({});
  });

  it('rejects zero tickets', () => {
    expect(validateSignup({ ...validData, tickets: '0' }, 10).tickets)
      .toBe('Choose 1 to 4 tickets');
  });

  it('rejects more than four tickets', () => {
    expect(validateSignup({ ...validData, tickets: '5' }, 10).tickets)
      .toBe('Choose 1 to 4 tickets');
  });

  it('rejects fractional tickets', () => {
    expect(validateSignup({ ...validData, tickets: '1.5' }, 10).tickets)
      .toBe('Choose 1 to 4 tickets');
  });

  it('accepts four tickets', () => {
    expect(validateSignup({ ...validData, tickets: '4' }, 10)).toEqual({});
  });

  it('rejects tickets exceeding remaining seats', () => {
    expect(validateSignup({ ...validData, tickets: '3' }, 2).tickets)
      .toBe('Only 2 seats left');
  });
});
