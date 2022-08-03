for (const n of Number.range(1, 10)) {
  console.log(n);
}

for (const n of BigInt.range(1n, 10n)) {
  console.log(n);
}

Number.range(1, 10, 10);
Number.range(1, 10, { step: 10, inclusive: true });
