const combination = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((item) => [item]);

  arr.forEach((val, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const recurResult = combination(rest, num - 1);
    const attach = recurResult.map((recurVal) => [val, ...recurVal]);

    result.push(...attach);
  });

  return result;
};

console.log(combination([-2, 3, 0, 2, -5], 3));
