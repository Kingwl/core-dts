[].group;
[].groupToMap;

const numArr = [1, 2, 3];
const g1: Record<number, number[]> = numArr.group((x) => x % 2);
const g2: Map<number, number[]> = numArr.groupToMap((x) => x % 2);

interface A1 {
  type: 1;
  value: number;
}

interface A2 {
  type: 2;
  value: string;
}

type A = A1 | A2;

function isA1(v: A): v is A1 {
  return v.type === 1;
}

const aArr: A[] = [
  { type: 1, value: 1 },
  { type: 2, value: 'a' },
];
const g3: Record<1 | 2, A[]> = aArr.group((x) => x.type);
const g4: Map<1 | 2, A[]> = aArr.groupToMap((x) => x.type);

const g5 = aArr.groupToMap(isA1);
const g5t: A1[] | undefined = g5.get(true);
const g5f: A2[] | undefined = g5.get(false);
