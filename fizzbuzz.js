const cases = [
  {
    divisors: [3, 5],
    result: 'fizz buzz'
  },
  {
    divisors: [7],
    result: 'micael',
  },
  {
    divisors: [3],
    result: 'fizz'
  },
  {
    divisors: [5],
    result: 'buzz'
  },
];

const verify = (number, divisors) => {
  return divisors.every(divisor => number % divisor === 0);
}

const checkCases = (number) => {
  for (let tmp_case of cases) {
    if (verify(number, tmp_case.divisors)) {
      console.log(tmp_case.result);
      return true;
    }
  }

  return false;
}

let array = Array.from(Array(100), (_, i) => i + 1);

array.forEach(number => {
  if (!checkCases(number)) {
    console.log(number);
  }
})

