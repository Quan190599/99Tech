const sum_to_n_loop = (n: number): number => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const sum_to_n_formula = (n: number): number => {
  return (n * (n + 1)) / 2;
};

const sum_to_n_recursive = (n: number): number => {
  if (n <= 1) {
    return n;
  }
  return n + sum_to_n_recursive(n - 1);
};

export const test_ways_to_sum_to_n = (n: number) => {
  console.log("Problem 4: three ways to sum to n:", n);
  console.log(`Iterative: ${sum_to_n_loop(n)}`);
  console.log(`Formula: ${sum_to_n_formula(n)}`);
  console.log(`Recursive: ${sum_to_n_recursive(n)}`);
};
