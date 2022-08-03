[].uniqueBy;

[1, 2, 3].uniqueBy();

[
  { a: 1, b: 2 },
  { a: 1, b: 3 },
  { a: 1, b: 4 },
  { a: 2, c: 2 },
].uniqueBy('a');

[
  { a: 1, b: 2 },
  { a: 1, b: 3 },
  { a: 1, b: 4 },
  { a: 2, c: 2 },
].uniqueBy((x) => `${x.a} - ${x.b ?? x.c ?? 0}`);
