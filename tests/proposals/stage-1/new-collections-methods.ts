const s = new Set([1, 2, 3]);

const ss1: Set<number> = s.addAll(4, 5, 6);
const d1: boolean = s.deleteAll(2, 3, 4);

const e1: boolean = s.every((x) => x % 2 === 0);
const f1: Set<number> = s.filter((x) => x % 2 === 0);
const f2: number | undefined = s.find((x) => x % 2 === 0);
const j1: string = s.join(',');
const sm1: Set<string> = s.map((x) => x.toString());
const rd1: number = s.reduce((memo, x) => memo + x, 0);
const sm2: boolean = s.some((x) => x % 2 === 0);

const ws1 = new WeakSet([{}, {}, {}]);
ws1.addAll({}, {});
ws1.deleteAll({}, {});

const m = new Map<string, number>([
  ['1', 2],
  ['2', 4],
]);
m.deleteAll('1', '2');
m.every((value, key) => value % 2 === 0 && key.length === 1);
m.filter((value, key) => value % 2 === 0 && key.length === 1);
m.find((value, key) => value % 2 === 0 && key.length === 1);
m.findKey((value, key) => value % 2 === 0 && key.length === 1);
m.includes(2);
m.keyOf(2);
m.mapKeys((value, key) => `${key}:${value}`);
m.mapValues((value, key) => `${key}:${value}`);
m.merge(['3', 3], ['4', 4]);
m.some((value, key) => value % 2 === 0 && key.length === 1);
m.update(
  '1',
  (value, key) => value + 1,
  () => 2,
);

Map.groupBy([1, 2, 3], (x) => (x % 2 === 0 ? 'even' : 'odd'));
Map.keyBy([1, 2, 3], (x) => (x % 2 === 0 ? 'even' : 'odd'));

const wm = new WeakMap([
  [{}, 1],
  [{}, 2],
]);

wm.deleteAll({}, {});
