import isCreditCardValid from './isCreditCardValid';

test('Correct visa number to return true', () => {
    expect(isCreditCardValid('4513814371032331')).toBe(true);
  });

test('Correct mastercard number to return true', () => {
    expect(isCreditCardValid('5119828491078045')).toBe(true);
});

test('Correct American express number to return true', () => {
    expect(isCreditCardValid('3444225920064970')).toBe(true);

});


test('Incorrect credit card number to return false', () => {
    expect(isCreditCardValid('400000000000000')).toBe(false);
});