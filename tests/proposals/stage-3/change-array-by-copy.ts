[].toReversed;
[].toSorted;
[].toSpliced;
[].with;

const arr1 = [1, 2, 3];
const a1: number[] = arr1.toReversed();
const a2: number[] = arr1.toSorted();
const a3: number[] = arr1.toSpliced(0, 1, 2);
const a4: number[] = arr1.with(1, 2);
