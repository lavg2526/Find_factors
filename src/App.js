let number = 5;
let factor = [];
const findFactors = (num) => {
  for (i = 0; i <= num; i++) {
    if (num % i === 0) {
      factor.push(i);
    }
  }
  return factor;
};
console.log(findFactors(number));
