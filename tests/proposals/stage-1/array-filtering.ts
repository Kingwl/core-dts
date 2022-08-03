[].filterReject;

interface T1 {
  type: 1;
}

interface T2 {
  type: 2;
}

const t: (T1 | T2)[] = [{ type: 1 }, { type: 2 }];

function isT1(v: T1 | T2): v is T1 {
  return v.type === 1;
}

const r1: (T1 | T2)[] = t.filter((x) => x.type === 1);
const r2: (T1 | T2)[] = t.filterReject((x) => x.type === 1);

const r3: T1[] = t.filter(isT1);
const r4: T2[] = t.filterReject(isT1);
