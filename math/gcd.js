export const gcd = (num1, num2) => {
  if (num2 > num1) [num1, num2] = [num2, num1];
  const remain = num1 % num2;

  return remain ? gcd(num2, remain) : num2;
};
