function isCreditCardValid(cardNum) {

  const cardNo = cardNum.replace(/\D/g, '');
  const regex = new RegExp('^[4-6]\\d{3}-?\\d{4}-?\\d{4}-?\\d{4}$');

  if(!regex.test(cardNo)) return false;

  //use Luhn algorithm to check card's validity

  let sum = 0;
  let digit;
  let shouldDouble;
  for(let i = cardNo.length - 1; i>=0; i--) {
    digit = parseInt(cardNo.charAt(i));
    if(shouldDouble){
      if((digit *= 2) > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return (sum % 10) === 0;

  }
  
  export default isCreditCardValid;