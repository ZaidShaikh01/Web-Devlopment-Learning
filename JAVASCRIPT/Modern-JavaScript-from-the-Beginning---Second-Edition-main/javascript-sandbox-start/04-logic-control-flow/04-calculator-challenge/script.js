function calculator(num1, num2, operator) {
  //  `+`, `-`, `*` or `/`. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.
  let output = 0;
  switch (operator) {
    case '+':
      output = num1 + num2;
      break;
    case '-':
      output = num1 - num2;
      break;
    case '/':
      output = num1 / num2;
      break;
    case '*':
      output = num1 * num2;
      break;
    default:
      output = 'Go fuck yourself mate';
  }
  return output;
}
