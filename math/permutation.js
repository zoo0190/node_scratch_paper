export const permutation = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((item) => [item]);

  arr.forEach((val, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const recurResult = permutation(rest, num - 1);
    const attach = recurResult.map((recurVal) => [val, ...recurVal]);
    result.push(...attach);
  });

  return result;
};
