[].findLast;
[].findLastIndex;

function isNumber(v: unknown): v is number {
  return typeof v === 'number';
}

const arr = [1, false, 'string'];
const a: number | boolean | string | undefined = arr.findLast((x) => x === 1);
const ai: number = arr.findLastIndex((x) => x === 1);
const b: number | undefined = arr.findLast(isNumber);
const bi: number = arr.findLastIndex(isNumber);
