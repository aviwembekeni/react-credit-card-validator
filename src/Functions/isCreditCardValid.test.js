import isCreditCardValid from './isCreditCardValid';

test('Correct visa number card to return true', () => {
    expect(isCreditCardValid('4513814371032331')).toBe(true);
  });

test('Correct mastercard number to return true', () => {
    expect(isCreditCardValid('5119828491078045')).toBe(true);
});

test('Correct Discover card number to return true', () => {
    expect(isCreditCardValid('6011509171855863')).toBe(true);

});

test('Should return true for correct credit card number with `-`', () => {
    expect(isCreditCardValid('5119-8284-9107-8045')).toBe(true);
});

test('Should return true for correct credit card number with spaces', () => {
    expect(isCreditCardValid('5119 8284 9107 8045')).toBe(true);
});

test('Incorrect credit card number to return false', () => {
    expect(isCreditCardValid('400000000000000')).toBe(false);
});